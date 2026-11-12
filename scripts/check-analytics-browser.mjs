// Browser-level consent QA against a *local* production Astro build.
// Google URLs are intercepted and blocked: this test NEVER sends GA4 hits.
// Requires puppeteer-core and the runner's installed Google Chrome.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve, extname, sep } from 'node:path';
import puppeteer from 'puppeteer-core';

const dist = resolve(import.meta.dirname, '..', 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.json': 'application/json' };
const server = createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://localhost');
    let target = resolve(dist, '.' + decodeURIComponent(u.pathname));
    if (target !== dist && !target.startsWith(dist + sep)) { res.writeHead(403).end(); return; }
    const meta = await stat(target).catch(() => null);
    if (meta?.isDirectory()) target = join(target, 'index.html');
    const bytes = await readFile(target);
    res.writeHead(200, {'Content-Type':types[extname(target)] || 'application/octet-stream', 'Cache-Control':'no-store'});
    res.end(bytes);
  } catch { res.writeHead(404).end('Not found'); }
});

let browser;
try {
  await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen));
  const origin = 'http://127.0.0.1:' + server.address().port;
  browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  const googleRequests = [];
  const stripeRequests = [];
  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url();
    if (/^https:\/\/(?:[^/]+\.)?(?:googletagmanager\.com|google-analytics\.com|doubleclick\.net)\//.test(url)) {
      googleRequests.push(url);
      req.abort('blockedbyclient').catch(() => {});
    } else if (new URL(url).hostname === 'buy.stripe.com') {
      // Safety guard: testing purchase buttons must never create live Checkout Sessions.
      stripeRequests.push(url);
      req.abort('blockedbyclient').catch(() => {});
    } else req.continue().catch(() => {});
  });
  const state = () => page.evaluate(() => {
    const queue = (window.dataLayer || []).map(args => Array.from(args));
    return {
      consent: localStorage.getItem('mlp-analytics-consent'),
      bannerHidden: document.getElementById('analytics-consent')?.hidden,
      defaultConsent: queue.find(x => x[0] === 'consent' && x[1] === 'default')?.[2],
      updates: queue.filter(x => x[0] === 'consent' && x[1] === 'update').map(x => x[2]),
      pageviews: queue.filter(x => x[0] === 'event' && x[1] === 'page_view').length,
      config: queue.find(x => x[0] === 'config')?.[2],
      events: queue.filter(x => x[0] === 'event').map(x => x[1])
    };
  });
  const openSettings = async () => {
    await page.click('[data-open-cookie-settings]');
    await page.waitForFunction(() => document.getElementById('analytics-consent').hidden === false);
  };
  const open = path => page.goto(origin + path, { waitUntil: 'load', timeout: 30_000 });

  // No consent or Google requests on a fresh first visit.
  await open('/');
  let s = await state();
  assert.equal(s.consent, null);
  assert.equal(s.bannerHidden, false);
  assert.equal(s.defaultConsent.analytics_storage, 'denied');
  assert.equal(s.defaultConsent.ad_storage, 'denied');
  assert.equal(s.pageviews, 0);
  assert.equal(googleRequests.length, 0);
  await page.click('[data-consent-reject]');
  assert.equal((await state()).consent, 'denied');
  assert.equal(googleRequests.length, 0);
  await page.reload({waitUntil:'load'});
  s = await state();
  assert.equal(s.bannerHidden, true);
  assert.equal(s.pageviews, 0);
  assert.equal(googleRequests.length, 0);

  // Explicit consent initiates exactly one Google tag and one manual page view.
  await openSettings();
  await page.click('[data-consent-accept]');
  await page.waitForFunction(() => (window.dataLayer || []).some(x => x[0] === 'event' && x[1] === 'page_view'));
  s = await state();
  assert.equal(s.consent, 'granted');
  assert.equal(s.pageviews, 1);
  assert.equal(s.config.send_page_view, false);
  assert.equal(s.updates.at(-1).analytics_storage, 'granted');
  assert.equal(googleRequests.filter(x => x.includes('/gtag/js')).length, 1);
  await page.evaluate(() => window.dispatchEvent(new CustomEvent('mlp:analytics-consent', {detail:'granted'})));
  assert.equal((await state()).pageviews, 1);
  assert.equal(googleRequests.filter(x => x.includes('/gtag/js')).length, 1);

  // Return visits load once; book retailer events are still queued on consent.
  await open('/books/the-new-heat-pump-owners-operating-manual/');
  s = await state();
  assert.equal(s.pageviews, 1);
  assert.equal(s.consent, 'granted');
  assert.equal(googleRequests.filter(x => x.includes('/gtag/js')).length, 2);
  await page.evaluate(() => {
    const link = document.createElement('a');
    link.href = 'https://www.amazon.com/dp/B0HF51WQ1F';
    document.body.append(link);
    document.addEventListener('click', e => e.preventDefault(), {capture:true, once:true});
    link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
    link.remove();
  });
  assert.ok((await state()).events.includes('book_retailer_click'), 'After consenting, Amazon retailer intent must still be recorded.');

  // Open the actual HR and construction book pages and click the real
  // companion links, checking the consented book_to_product GA4 queue event.
  for (const [bookPath, productPath, destinationId] of [
    ['/books/ai-productivity-for-hr-professionals/', '/tools/hr-manager-toolkit/', 'hr_ai_toolkit'],
    ['/books/construction-estimating-for-your-first-jobs/', '/tools/construction-estimating-system-pro/', 'toolkit_pro']
  ]) {
    await open(bookPath);
    const result = await page.evaluate(path => {
      const link = [...document.querySelectorAll('a[href]')]
        .find(a => new URL(a.href, location.href).pathname === path);
      if (!link) return {found:false};
      // Prevent navigation but let our delegated document listener see the click.
      document.addEventListener('click', e => e.preventDefault(), {capture:true, once:true});
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
      const events = (window.dataLayer || []).map(args => Array.from(args))
        .filter(x => x[0] === 'event' && x[1] === 'book_to_product');
      return {
        found:true,
        count:events.length,
        destination:events.at(-1)?.[2]?.destination_id,
        accidentalPurchase:(window.dataLayer || []).some(x => x[0] === 'event' && x[1] === 'purchase')
      };
    }, productPath);
    assert.equal(result.found, true, 'The companion link must exist on ' + bookPath);
    assert.equal(result.count, 1, 'One consented book_to_product event must fire on ' + bookPath);
    assert.equal(result.destination, destinationId, 'Book companion destination ID must match');
    assert.equal(result.accidentalPurchase, false, 'Clicking a companion is not a purchase');
  }

  // Validate the *real* purchase buttons without navigating to Stripe.
  // Never open a live checkout: inspect hrefs and dispatch a canceled click
  // so the site's consent-gated delegate can record checkout *intent*.
  for (const [productPath, stripeUrl, displayedPrice] of [
    ['/tools/construction-estimating-system-pro/', 'https://buy.stripe.com/00wfZj3M9fKt5A62JSds400', 'US$19.99'],
    ['/tools/hr-manager-toolkit/', 'https://buy.stripe.com/5kQbJ35UhfKtgeK708ds401', '$24.99']
  ]) {
    await open(productPath);
    const result = await page.evaluate(({stripeUrl, displayedPrice}) => {
      const checkoutLinks = [...document.querySelectorAll('a[href]')]
        .filter(a => new URL(a.href, location.href).hostname === 'buy.stripe.com');
      if (!checkoutLinks.length) return {found:false};
      const offeredPricesMatch = document.body.textContent.includes(displayedPrice);
      const linksAgree = checkoutLinks.every(a => a.href === stripeUrl);
      const prior = (window.dataLayer || []).filter(x => x[0] === 'event' && x[1] === 'product_checkout_click').length;
      document.addEventListener('click', e => e.preventDefault(), {capture:true, once:true});
      checkoutLinks[0].dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
      const events = (window.dataLayer || []).map(args => Array.from(args))
        .filter(x => x[0] === 'event' && x[1] === 'product_checkout_click');
      return {
        found:true,linksAgree,offeredPricesMatch,
        newEvents:events.length-prior,
        provider:events.at(-1)?.[2]?.checkout_provider,
        accidentalPurchase:(window.dataLayer || []).some(x => x[0] === 'event' && x[1] === 'purchase')
      };
    }, {stripeUrl, displayedPrice});
    assert.equal(result.found, true, 'A Stripe purchase button must exist on '+productPath);
    assert.equal(result.linksAgree, true, 'Every Stripe CTA must match the verified live Payment Link for '+productPath);
    assert.equal(result.offeredPricesMatch, true, 'The current purchase price must be disclosed on '+productPath);
    assert.equal(result.newEvents, 1, 'Click must emit one consented product_checkout_click event');
    assert.equal(result.provider, 'stripe', 'Checkout intent must be attributed to Stripe');
    assert.equal(result.accidentalPurchase, false, 'A checkout click is NOT a completed sale');
    assert.equal(stripeRequests.length, 0, 'This QA must never create any live Stripe session');
  }

  // Revoke consent, reload, verify the Google script is absent on the next load.
  await openSettings();
  const googleBeforeRevocation = googleRequests.length;
  await Promise.all([page.waitForNavigation({waitUntil:'load'}), page.click('[data-consent-reject]')]);
  s = await state();
  assert.equal(s.consent, 'denied');
  assert.equal(s.pageviews, 0);
  assert.equal(s.bannerHidden, true);
  assert.equal(googleRequests.length, googleBeforeRevocation);

  console.log('Chromium consent/network QA passed: denied/return, one GA tag/pageview after grant, retailer and book-companion events, both real Stripe CTA hrefs/prices/consented intent events, no Stripe requests and no Google request after withdrawal.');
} finally {
  await browser?.close().catch(() => {});
  await new Promise(resolveClose => server.close(resolveClose));
}
