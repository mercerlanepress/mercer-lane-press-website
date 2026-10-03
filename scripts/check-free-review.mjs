import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { buildPerformanceReviewPrompt, outputTypes, tones } from '../src/lib/performance-review-prompt.js';
const blank = buildPerformanceReviewPrompt({});
assert.equal((blank.match(/\[Not supplied\]/g)||[]).length,7);
for (const outputType of outputTypes) for (const tone of tones) {
  const prompt=buildPerformanceReviewPrompt({jobTitle:'Marketing Coordinator',reviewPeriod:'Q3 2026',achievements:'Delivered the September campaign.',outputType,tone});
  assert.ok(prompt.includes('Format: '+outputType));assert.ok(prompt.includes('Tone: '+tone));
  assert.ok(prompt.includes('Do not invent achievements'));assert.ok(prompt.includes('Delivered the September campaign.'));
  for(const section of ['ROLE:','TASK:','CONTEXT:','OUTPUT:','SAFEGUARDS:'])assert.ok(prompt.includes(section));
}
assert.ok(buildPerformanceReviewPrompt({notes:'<script>alert(1)</script>'}).includes('<script>alert(1)</script>'));
assert.ok(!buildPerformanceReviewPrompt({notes:'x'.repeat(1400)}).includes('x'.repeat(1201)));
const page=readFileSync(new URL('../dist/free-tools/performance-review-template-excel/index.html',import.meta.url),'utf8');
assert.ok(page.includes('https://mercerlanepress.com/free-tools/performance-review-template-excel/'));
assert.ok(page.includes('Download Free — No Signup Required'));
assert.ok(!/<form\b/.test(page),'Use local controls, not an analytics-observed submit form');
for (const s of page.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))JSON.parse(s[1]);
assert.ok(existsSync(new URL('../dist/downloads/Mercer_Lane_Free_Performance_Review_Starter_Kit.zip',import.meta.url)));
console.log('Free review checks passed: 25 prompt combinations, blank state, text limits, literal context, metadata, JSON-LD and ZIP asset.');
