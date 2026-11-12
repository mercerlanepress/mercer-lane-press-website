import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
const banner = readFileSync(new URL('../src/components/AnalyticsConsent.astro', import.meta.url), 'utf8');
const privacy = readFileSync(new URL('../src/pages/privacy/index.astro', import.meta.url), 'utf8');
const scriptPattern = /<script is:inline define:vars=\{\{ measurementId \}\}>([\s\S]*?)<\/script>/g;
const layoutScripts = [...layout.matchAll(scriptPattern)].map(match => match[1]);
const bannerScripts = [...banner.matchAll(scriptPattern)].map(match => match[1]);
assert.equal(layoutScripts.length, 2, 'The ordinary and sensitive layout analytics scripts must both exist.');
assert.equal(bannerScripts.length, 1, 'The consent banner must have exactly one inline script.');
assert.ok(!layout.includes('<script is:inline async src="https://www.googletagmanager.com/gtag/js'), 'No unconditional Google tag request is allowed.');
assert.ok(privacy.includes('basic consent mode'), 'The privacy notice must describe the new data collection behaviour.');
assert.ok(privacy.includes('reloads the page'), 'The privacy notice must explain withdrawal behaviour.');

function run({initial, sensitive=false, storageBlocked=false, includeBanner=true} = {}) {
  const store = new Map(initial === undefined ? [] : [['mlp-analytics-consent', initial]]);
  const scripts = [], clicks = {}, listeners = {};
  let reloads = 0;
  const bannerNode = {hidden:true};
  const acceptButton = {addEventListener(_, fn) {clicks.accept=fn;}};
  const rejectButton = {addEventListener(_, fn) {clicks.reject=fn;}};
  const doc = {
    title:'Mercer Lane Press test page',
    cookie:'',
    createElement(tag) {assert.equal(tag,'script'); return {src:'',async:false};},
    head: {append(script) { scripts.push(script); }},
    getElementById(id) {return id==='analytics-consent' ? bannerNode : null;},
    querySelector(selector) {return selector==='[data-consent-accept]' ? acceptButton : selector==='[data-consent-reject]' ? rejectButton : null;},
    querySelectorAll() {return [];}
  };
  const loc = {origin:'https://mercerlanepress.com',pathname:'/books/example/',hostname:'mercerlanepress.com',reload() {reloads++;}};
  const win = {
    dataLayer:[],
    location:loc,
    addEventListener(name, fn) {(listeners[name] ||= []).push(fn);},
    dispatchEvent(event) {for(const listener of listeners[event.type]||[])listener(event);}
  };
  const storage = {
    getItem(key) {if(storageBlocked)throw Error('Storage blocked'); return store.get(key)||null;},
    setItem(key, value) {if(storageBlocked)throw Error('Storage blocked'); store.set(key,value);}
  };
  class CustomEvent {constructor(type, options) {this.type=type;this.detail=options?.detail;}}
  const context = {window:win,document:doc,location:loc,localStorage:storage,measurementId:'G-CK9SW6VRS9',encodeURIComponent,Date,CustomEvent};
  vm.runInNewContext(layoutScripts[sensitive?1:0],context);
  if(includeBanner)vm.runInNewContext(bannerScripts[0],context);
  const commands=()=>win.dataLayer.map(args=>Array.from(args));
  const events=(name)=>commands().filter(c=>c[0]==='event'&&c[1]===name);
  const state=()=>({scripts:scripts.length,views:events('page_view').length,queue:commands(),consent:store.get('mlp-analytics-consent'),reloads,bannerHidden:bannerNode.hidden,urls:scripts.map(x=>x.src)});
  return {state, accept() {clicks.accept?.();}, reject() {clicks.reject?.();}, dispatchGrant() {win.dispatchEvent(new CustomEvent('mlp:analytics-consent',{detail:'granted'}));}};
}

// Default/denied means no request to Google, and no measured pageview.
for (const choice of [undefined,'denied']) {
  const x=run({initial:choice});
  const v=x.state();
  assert.equal(v.scripts,0);
  assert.equal(v.views,0);
  assert.equal(v.queue[0][0],'consent');
  assert.equal(v.queue[0][1],'default');
  assert.equal(v.queue[0][2].analytics_storage,'denied');
  assert.equal(v.queue[0][2].ad_storage,'denied');
}
// Denial does not load GA4, even when the user clicks Reject.
const rejected=run({});rejected.reject();assert.equal(rejected.state().scripts,0);
assert.equal(rejected.state().consent,'denied');
// A first-time acceptance loads exactly one tag and sends one pageview.
const first=run({});
assert.equal(first.state().bannerHidden,false);
first.accept();
let v=first.state();
assert.equal(v.consent,'granted');
assert.equal(v.scripts,1);
assert.equal(v.views,1);
assert.equal(v.urls[0],'https://www.googletagmanager.com/gtag/js?id=G-CK9SW6VRS9');
assert.equal(v.queue.find(x=>x[0]==='config')[2].send_page_view,false);
assert.equal(v.queue.find(x=>x[0]==='consent'&&x[1]==='update')[2].analytics_storage,'granted');
first.accept();first.dispatchGrant();
assert.equal(first.state().scripts,1);
assert.equal(first.state().views,1);
// Returning consented visitors get one tag/pageview, not two.
const returning=run({initial:'granted'});
assert.equal(returning.state().scripts,1);
assert.equal(returning.state().views,1);
// Withdrawal clears the stored grant, denies analytics and reloads to remove the loaded script.
returning.reject();
v=returning.state();
assert.equal(v.consent,'denied');
assert.equal(v.reloads,1);
assert.equal(v.queue.filter(x=>x[0]==='consent'&&x[1]==='update').at(-1)[2].analytics_storage,'denied');
assert.equal(run({initial:'denied'}).state().scripts,0);
// Storage failures must never cause a Google request.
const blocked=run({storageBlocked:true,includeBanner:false});
assert.equal(blocked.state().scripts,0);
assert.equal(blocked.state().views,0);
// Sensitive tool: preserve its opt-in-only tag and one manual pageview.
const sensitive=run({sensitive:true});
assert.equal(sensitive.state().scripts,0);
sensitive.accept();sensitive.accept();
assert.equal(sensitive.state().scripts,1);
assert.equal(sensitive.state().views,1);
const sensitiveReturning=run({initial:'granted',sensitive:true});
assert.equal(sensitiveReturning.state().scripts,1);
assert.equal(sensitiveReturning.state().views,1);
console.log('Basic consent analytics QA passed: no tag before grant, single pageview, no duplicate on regrant, withdrawal reload, storage-blocked safety and sensitive-tool behaviour.');
