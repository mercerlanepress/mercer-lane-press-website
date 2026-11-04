import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = path => readFileSync(join(root, path), 'utf8');
const page = read('src/pages/tools/landscape-estimating-job-costing-system/index.astro');
const product = read('src/data/landscape-system.ts');

const field = name => {
  const match = product.match(new RegExp('\\b' + name + ":\\s*'([^']+)'"));
  assert.ok(match, `Expected a single quoted ${name} in the shared landscape product configuration`);
  return match[1];
};
assert.equal(field('price'), '2.99');
assert.equal(field('currency'), 'GBP');
assert.equal(field('priceLabel'), '£2.99');
assert.equal(field('checkoutUrl'), 'https://www.etsy.com/listing/4591278053');
assert.equal(field('pagePath'), '/tools/landscape-estimating-job-costing-system/');

assert.equal((page.match(/<h1\b/g) || []).length, 1, 'One semantic H1');
assert.ok(page.includes('id="choose"') && page.includes('id="inside"'), 'Free-vs-paid decision and real product images must remain accessible');
assert.ok(page.includes('href="#inside"'), 'Real workbook screenshot jump link must work');
assert.ok(page.includes('href="/tools/landscape-bid-readiness-checklist/"'), 'Free checklist must remain available');
assert.ok(page.includes("offers:{'@type':'Offer',url:product.checkoutUrl,price:product.price,priceCurrency:product.currency"), 'Schema must derive offer URL, price, and currency from shared configuration');
assert.ok((page.match(/href=\{product\.checkoutUrl\}/g) || []).length >= 3, 'Keep clearly visible purchase paths');
assert.ok(page.includes('Book sold separately.') && page.includes('no subscription'), 'Product boundaries and purchase terms should remain clear');
assert.ok(page.includes('Windows Excel desktop 16.0'), 'Compatibility limitation must remain visible');
assert.ok(page.includes('fictional Demo') && page.includes('not benchmarks or recommended prices'), 'Never mistake teaching data for market results');

for (const path of [
  'src/pages/tools/landscape-bid-readiness-checklist/index.astro',
  'src/pages/landscape-contractor-estimating/index.astro',
  'public/images/landscape-system/01_hero.webp',
  'public/images/landscape-system/03_estimating.webp',
  'public/images/landscape-system/04_client_quote.webp',
  'public/images/landscape-system/05_actual_job_profit.webp',
  'public/images/landscape-system/06_dashboard.webp',
]) {
  assert.ok(existsSync(join(root, path)), `Linked product asset or destination missing: ${path}`);
}
assert.ok(!/guaranteed profit|risk.free|limited time only|best.selling/i.test(page), 'Reject unsupported promotion claims');

console.log('Landscape conversion QA passed: free/paid choice, Etsy offer, compatibility, proof images, claims and guide links.');
