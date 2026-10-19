import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import worker from '../worker/index.js';

const fixture = { id: 'cs_live_fixture123', status: 'complete', payment_status: 'paid', mode: 'payment', livemode: true, payment_link: 'plink_pro', currency: 'usd', amount_subtotal: 1999 };
let session = fixture;
let objectReads = 0;
const env = { PRO_PAYMENT_LINK_ID: 'plink_pro', STRIPE_RESTRICTED_KEY: 'fixture', PRODUCTS: { get: async () => { objectReads++; return { body: 'zip fixture', size: 11, writeHttpMetadata() {} }; } } };
const request = (download = false) => new Request('https://example.test/api/pro-' + (download ? 'download' : 'access'), download
  ? { headers: { Cookie: 'mlp_pro_session=' + fixture.id } }
  : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ session_id: fixture.id }) });
const originalFetch = globalThis.fetch;
try {
  globalThis.fetch = async () => new Response(JSON.stringify(session));
  for (const change of [{livemode:false}, {livemode:undefined}, {mode:'subscription'}, {mode:'setup'}, {payment_status:'unpaid'}, {status:'open'}, {payment_link:'plink_other'}]) {
    session = {...fixture, ...change};
    const access = await worker.fetch(request(), env);
    assert.equal(access.status, 403, JSON.stringify(change));
    assert.equal(access.headers.get('Set-Cookie'), null);
    assert.equal((await worker.fetch(request(true), env)).status, 403);
  }
  assert.equal(objectReads, 0, 'Rejected sessions must never read a private ZIP.');
  session = fixture;
  const access = await worker.fetch(request(), env);
  assert.equal(access.status, 200);
  assert.equal((await access.json()).livemode, true);
  assert.match(access.headers.get('Set-Cookie'), /HttpOnly; Secure; SameSite=Strict/);
  const download = await worker.fetch(request(true), env);
  assert.equal(download.status, 200);
  assert.equal(download.headers.get('Cache-Control'), 'private, no-store, max-age=0');
  assert.equal(objectReads, 1);
} finally { globalThis.fetch = originalFetch; }

// Execute the actual page script with browser stubs. No network or analytics calls leave this process.
const source = readFileSync(new URL('../src/pages/tools/construction-estimating-system-pro/download/index.astro', import.meta.url), 'utf8');
assert.match(source, /sensitiveTool=\{true\}/);
const script = source.match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
async function pageCase({id=fixture.id, consent='granted', verified=true, live=true, storageThrows=false}={}) {
  const events = []; let fetches = 0;
  const nodes = Object.fromEntries(['download-title','download-message','download-actions','download-button'].map(id => [id, { hidden: id==='download-actions', textContent:'', addEventListener(name, handler) { this[name]=handler; } }]));
  const context = { URLSearchParams, window: {location: {search:'?session_id='+id}, gtag: (...args) => events.push(args)}, localStorage: {getItem() {if(storageThrows) throw new Error('unavailable'); return consent;}}, document: {getElementById:id=>nodes[id]}, fetch:async()=>{fetches++;return {ok:verified,json:async()=>({livemode:live,currency:'usd',amount_subtotal:1999})};} };
  vm.runInNewContext(script, context);
  await new Promise(resolve=>setImmediate(resolve));
  nodes['download-button'].click?.();
  return { events, fetches, nodes };
}
const live = await pageCase();
assert.equal(live.nodes['download-actions'].hidden, false);
assert.equal(live.events.filter(e=>e[1]==='purchase').length, 1);
assert.equal(live.events.find(e=>e[1]==='purchase')[2].value, 19.99);
assert.equal(live.events.filter(e=>e[1]==='file_download').length, 1);
for (const consent of ['denied', null]) {
  const result = await pageCase({consent});
  assert.equal(result.nodes['download-actions'].hidden, false, 'Consent must not gate delivery.');
  assert.equal(result.events.length, 0);
}
assert.equal((await pageCase({storageThrows:true})).events.length, 0);
const test = await pageCase({id:'cs_test_fixture123'});
assert.equal(test.fetches, 0); assert.equal(test.events.length, 0); assert.equal(test.nodes['download-actions'].hidden, true);
assert.equal((await pageCase({verified:false})).events.length, 0);
assert.equal((await pageCase({live:false})).events.filter(e=>e[1]==='purchase').length, 0);
console.log('PRO delivery checks passed: live-only paid sessions, one-time mode, product isolation, private ZIP gate, purchase/download consent and test-event exclusion.');
