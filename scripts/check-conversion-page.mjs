import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');
const page = read('src/pages/tools/construction-estimating-system-pro/index.astro');
const guide = read('src/content/construction-estimating/construction-job-costing-spreadsheet-estimate-vs-actual.md');

const schemaMatch = page.match(/const schema = (\{[^\n]+\});/);
assert.ok(schemaMatch, 'Product JSON-LD must be present and parseable');
const schema = JSON.parse(schemaMatch[1]);
assert.equal(schema['@type'], 'Product');
assert.equal(schema.offers.priceCurrency, 'USD');
assert.equal(schema.offers.price, '19.99');
assert.equal(schema.url, 'https://mercerlanepress.com/tools/construction-estimating-system-pro/');

const checkoutLinks = [...page.matchAll(/href="(https:\/\/buy\.stripe\.com\/[^"]+)"/g)].map(match => match[1]);
assert.ok(checkoutLinks.length >= 2, 'Keep a clear checkout link near the top and bottom');
assert.ok(checkoutLinks.every(url => url === schema.offers.url), 'Product schema checkout URL must match the purchase buttons');
assert.equal((page.match(/<h1\b/g) ?? []).length, 1, 'Use exactly one H1');
assert.ok(page.includes('US$19.99 plus applicable tax'), 'Keep price and tax disclosure visible');
assert.ok(page.includes('Microsoft Excel desktop'), 'Keep compatibility requirements visible');
assert.ok(page.includes('no external workbook links or macros'), 'Keep product capability disclosure visible');
assert.ok(page.includes('id="included"') && page.includes('href="#included"'), 'The contents link must resolve');

for (const path of [
  'public/images/construction-toolkit/v32-dashboard.png',
  'src/pages/tools/construction-job-profit-calculator/index.astro',
  'src/pages/tools/contractor-markup-margin-calculator/index.astro',
  'src/pages/digital-products/index.astro',
  'src/pages/construction-estimating/index.astro',
  'src/content/construction-estimating/construction-job-costing-spreadsheet-estimate-vs-actual.md',
]) assert.ok(existsSync(join(root,path)), `Referenced source or destination is missing: ${path}`);

for (const text of ['$36,000', '$19,700', '$10,000', '$6,300']) {
  assert.ok(page.includes(text) && guide.includes(text), `Worked example has drifted from source guide: ${text}`);
}
assert.equal(36_000 - (19_700 + 10_000), 6_300, 'Recalculate the example if inputs change');
assert.ok(page.includes('fictional training example'), 'Examples must not be presented as customer results');
assert.ok(page.includes('not a screenshot'), 'Distinguish static training arithmetic from product imagery');
assert.ok(!/limited time only|guaranteed profit|risk.free offer/i.test(page), 'Avoid unsupported urgency, profit or risk promises');

console.log('Conversion page QA passed: offer/CTA agreement, compatibility, factual example, assets, links and claims.');
