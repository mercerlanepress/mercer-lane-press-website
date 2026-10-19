import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../public/growth-measurement.js', import.meta.url), 'utf8');
function setup(path, initialConsent, query = '', blocked = false, savedCampaign = null) {
  let choice = initialConsent;
  const events = [], listeners = {}, clicks = {};
  const session = new Map(savedCampaign ? [['mlp-growth-campaign', JSON.stringify(savedCampaign)]] : []);
  const context = {
    URL, URLSearchParams, location: {pathname:path, origin:'https://mercerlanepress.com', href:'https://mercerlanepress.com'+path+query, search:query},
    localStorage: { getItem() { if (blocked) throw Error('Storage blocked'); return choice; } },
    sessionStorage: {setItem:(k,v)=>session.set(k,v), getItem:k=>session.get(k), removeItem:k=>session.delete(k)},
    window: {gtag:(...args)=>events.push(args), addEventListener:(n,cb)=>listeners[n]=cb},
    document: {addEventListener:(n,cb)=>clicks[n]=cb}
  };
  vm.runInNewContext(source, context);
  return {events,session, change(value) { choice=value; listeners['mlp:analytics-consent']?.({detail:value}); }, click(href) { clicks.click?.({target:{closest:()=>({href})}}); }};
}
const tool='/tools/contractor-markup-margin-calculator/';
const target='https://mercerlanepress.com/tools/construction-estimating-system-pro/';
const denied=setup(tool,'denied'); denied.click(target); assert.equal(denied.events.length,0);
denied.change('granted'); assert.equal(denied.events.length,1); assert.equal(denied.events[0][1],'tool_entry');
denied.change('granted'); assert.equal(denied.events.length,1); denied.click(target); assert.equal(denied.events.at(-1)[1],'tool_to_product');
denied.change('denied'); denied.click(target); assert.equal(denied.events.length,2); assert.equal(denied.session.size,0);
const blocked=setup(tool,null,'',true); blocked.click(target); assert.equal(blocked.events.length,0);
const query='?utm_source=pinterest&utm_campaign=construction_202610&utm_content=a1_markup&customer_email=private@example.com&cost=1000';
const campaign=setup(tool,'granted',query); assert.equal(campaign.events[1][1],'campaign_entry');
assert.ok(!JSON.stringify(campaign.events).includes('private')); assert.ok(!JSON.stringify(campaign.events).includes('1000'));
assert.equal(campaign.events[0][2].campaign_source,'pinterest');
const product=setup('/tools/construction-estimating-system-pro/','granted'); product.click('https://buy.stripe.com/00wfZj3M9fKt5A62JSds400');
assert.equal(product.events.at(-1)[1],'product_checkout_click'); assert.equal(product.events.at(-1)[2].checkout_provider,'stripe');
product.click('https://www.etsy.com/listing/4587620301/'); assert.equal(product.events.at(-1)[2].checkout_provider,'etsy');
const count=product.events.length; product.click('https://etsy.com.evil.example/listing/4587620301/'); assert.equal(product.events.length,count);
assert.ok(product.events.every(e=>e[1]!=='purchase'));
const invalid=setup(tool,'granted','?utm_source=unknown&utm_campaign=construction_202610&utm_content=a1_markup'); assert.equal(invalid.session.size,0);
const unrelated=setup('/contact/','granted'); assert.equal(unrelated.events.length,0);
const guide=setup('/small-fleet-maintenance/fleet-maintenance-schedule-spreadsheet/','granted');guide.click('https://mercerlanepress.com/tools/fleet-maintenance-due-calculator/');assert.equal(guide.events.at(-1)[1],'guide_to_tool');
console.log('Growth measurement checks passed: deny/accept/revoke, blocked storage, event de-duplication, allowlisted attribution, input exclusion, correct Etsy/Stripe destinations and no purchase claims.');
