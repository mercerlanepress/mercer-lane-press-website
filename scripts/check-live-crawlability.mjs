/**
 * Read-only live crawler diagnostics. Runs in GitHub Actions against the deployed
 * public origin, NOT the build output. No credentials, writes, or indexing requests.
 *
 * A Googlebot user-agent does not prove Google's verified crawler IP can access
 * Cloudflare. It can nevertheless reveal obvious UA-based blocking/challenges.
 */
import assert from 'node:assert/strict';

const origin = 'https://mercerlanepress.com';
const samplePaths = [
  '/',
  '/books/ai-productivity-for-hr-professionals/',
  '/books/the-new-heat-pump-owners-operating-manual/',
  '/5g-home-internet/keeps-disconnecting/',
  '/tools/heat-pump-running-cost-calculator/',
  '/tools/construction-estimating-system-pro/'
];
const agents = {
  normal: 'Mozilla/5.0 (compatible; MercerLanePressIndexabilityAudit/1.0)',
  simulatedGooglebot: 'Googlebot/2.1 (+http://www.google.com/bot.html)'
};
const issues = [];
const warnings = [];

async function get(url, agentName = 'normal') {
  const response = await fetch(url, {
    headers: { 'User-Agent': agents[agentName], Accept: 'text/html,application/xml,text/plain,*/*' },
    redirect: 'follow',
    signal: AbortSignal.timeout(15000)
  });
  const body = await response.text();
  return {
    status: response.status, url: response.url, body,
    type: response.headers.get('content-type') || '',
    xRobots: response.headers.get('x-robots-tag') || '',
    server: response.headers.get('server') || '',
    cfRay: response.headers.get('cf-ray') || ''
  };
}
function report(label, r) {
  console.log(JSON.stringify({
    label, status: r.status, finalUrl: r.url,
    contentType: r.type, xRobotsTag: r.xRobots,
    server: r.server, cloudflareRayPresent: Boolean(r.cfRay),
    challenge: /just a moment|checking your browser|attention required.{0,20}cloudflare/i.test(r.body)
  }));
}
function check(label, test, message) {
  if (!test) issues.push(label + ': ' + message);
}

for (const path of samplePaths) {
  const url = origin + path;
  let r;
  try {
    r = await get(url);
    report('normal ' + path, r);
  } catch (error) {
    issues.push('normal ' + path + ': fetch failed: ' + String(error));
    continue;
  }
  const label = 'normal ' + path;
  check(label, r.status === 200, 'expected 200; got ' + r.status);
  check(label, r.url === url, 'unexpected redirect to ' + r.url);
  check(label, r.type.toLowerCase().includes('text/html'), 'not served as HTML');
  check(label, !/noindex|none/i.test(r.xRobots), 'X-Robots-Tag forbids indexing');
  check(label, !/<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(r.body), 'robots meta forbids indexing');
  check(label, !/just a moment|checking your browser|attention required.{0,20}cloudflare/i.test(r.body), 'Cloudflare challenge page returned');
  const canonical = r.body.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  check(label, canonical === url, 'canonical mismatch: ' + (canonical || '(missing)'));
}

for (const path of ['/', '/5g-home-internet/keeps-disconnecting/', '/books/the-new-heat-pump-owners-operating-manual/']) {
  const url = origin + path;
  try {
    const r = await get(url, 'simulatedGooglebot');
    report('simulatedGooglebot ' + path, r);
    check('simulatedGooglebot ' + path, r.status === 200, 'HTTP ' + r.status + ' (not proof about verified Googlebot IPs)');
    check('simulatedGooglebot ' + path, !/noindex|none/i.test(r.xRobots), 'X-Robots-Tag forbids indexing');
    check('simulatedGooglebot ' + path, !/just a moment|checking your browser|attention required.{0,20}cloudflare/i.test(r.body), 'Cloudflare challenge');
  } catch (error) {
    warnings.push('simulatedGooglebot ' + path + ': ' + String(error));
  }
}

try {
  const r = await get(origin + '/robots.txt');
  report('robots.txt', r);
  check('robots.txt', r.status === 200, 'HTTP ' + r.status);
  check('robots.txt', !/^\s*Disallow:\s*\/\s*$/im.test(r.body), 'site-wide Disallow: /');
  check('robots.txt', /Sitemap:\s*https:\/\/mercerlanepress\.com\/sitemap\.xml/i.test(r.body), 'canonical sitemap not declared');
} catch (e) {
  issues.push('robots.txt: ' + String(e));
}

try {
  const r = await get(origin + '/sitemap.xml');
  report('sitemap.xml', r);
  const count = (r.body.match(/<loc>/g) || []).length;
  console.log('Live sitemap URL count: ' + count);
  check('sitemap.xml', r.status === 200, 'HTTP ' + r.status);
  check('sitemap.xml', count >= 100, 'unexpectedly fewer than 100 URL locations');
  check('sitemap.xml', r.body.includes('<loc>https://mercerlanepress.com/'), 'canonical apex site missing');
} catch (e) {
  issues.push('sitemap.xml: ' + String(e));
}

// www redirect is diagnostic: a www host returning a canonicalized 200 can be
// valid but consolidation with a redirect is preferable. Don't alter DNS here.
try {
  const r = await get('https://www.mercerlanepress.com/');
  report('www home', r);
  if (r.status !== 200 || r.url !== origin + '/') warnings.push('www home: consider redirect/canonical audit; ' + r.status + ' ' + r.url);
  else warnings.push('www responds directly: verify whether its final URL canonicalizes to the apex domain');
} catch (e) {
  warnings.push('www home not verified: ' + String(e));
}

for (const item of warnings) console.warn('WARN: ' + item);
for (const item of issues) console.error('FAIL: ' + item);
assert.equal(issues.length, 0, 'Live crawlability audit failed; see FAIL lines above');
console.log('Live crawlability audit passed: key public URLs return indexable HTML, matching canonicals and accessible robots/sitemap. Verified Googlebot crawl and Google Search indexing still require Search Console/Cloudflare logs.');
