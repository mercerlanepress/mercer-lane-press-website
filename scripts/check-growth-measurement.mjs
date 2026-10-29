import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../public/growth-measurement.js', import.meta.url), 'utf8');
function setup(path, initialConsent, query = '', blocked = false, savedCampaign = null, referrer = '', savedAi = null) {
  let choice = initialConsent;
  const events = [], listeners = {}, clicks = {};
  const session = new Map(savedCampaign ? [['mlp-growth-campaign', JSON.stringify(savedCampaign)]] : []);
  if (savedAi) session.set('mlp-ai-source', savedAi);
  const context = {
    URL, URLSearchParams, location: {pathname:path, origin:'https://mercerlanepress.com', href:'https://mercerlanepress.com'+path+query, search:query},
    localStorage: { getItem() { if (blocked) throw Error('Storage blocked'); return choice; } },
    sessionStorage: {setItem:(k,v)=>session.set(k,v), getItem:k=>session.get(k), removeItem:k=>session.delete(k)},
    window: {gtag:(...args)=>events.push(args), addEventListener:(n,cb)=>listeners[n]=cb},
    document: {referrer, addEventListener:(n,cb)=>clicks[n]=cb, getElementById:()=>({hidden:context.resultHidden})}
  };
  vm.runInNewContext(source, context);
  return {events,session, submit(valid, id='heat-cost-form') {context.resultHidden=!valid;clicks.submit?.({target:{id}});}, change(value) { choice=value; listeners['mlp:analytics-consent']?.({detail:value}); }, click(href) { clicks.click?.({target:{closest:()=>({href})}}); }};
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
const pilotContents = [
  ['pinterest', 'pin01'], ['pinterest', 'pin02'], ['pinterest', 'pin03'],
  ['pinterest', 'pin04'], ['pinterest', 'pin05'], ['pinterest', 'pin06'],
  ['youtube', 'video01_markup'], ['youtube', 'video01_product'],
  ['youtube', 'video02_profit'], ['youtube', 'video02_product'],
  ['youtube', 'video03_remaining'], ['youtube', 'video03_product'],
  ['linkedin', 'post01_markup'], ['linkedin', 'post02_remaining']
];
for (const [source, content] of pilotContents) {
  const query = `?utm_source=${source}&utm_campaign=construction_pilot_2026_10&utm_content=${content}&customer_email=private@example.com&cost=1000`;
  const entry = setup(tool, 'granted', query);
  assert.equal(entry.events.filter(e => e[1] === 'campaign_entry').length, 1);
  assert.equal(entry.events[0][2].campaign_content, content);
  assert.ok(!JSON.stringify(entry.events).includes('private'));
  assert.ok(!JSON.stringify(entry.events).includes('1000'));
  const saved = JSON.parse(entry.session.get('mlp-growth-campaign'));
  const onward = setup('/tools/construction-estimating-system-pro/', 'granted', '', false, saved);
  assert.equal(onward.events[0][2].campaign_name, 'construction_pilot_2026_10');
  assert.equal(onward.events[0][2].campaign_content, content);
  const deniedPilot = setup(tool, 'denied', query);
  assert.equal(deniedPilot.events.length, 0);
  assert.equal(deniedPilot.session.size, 0);
  entry.change('denied');
  const count = entry.events.length;
  entry.click(target);
  assert.equal(entry.events.length, count);
  assert.equal(entry.session.size, 0);
}
for (const [source, name, content] of [
  ['pinterest', 'construction_pilot_2026_10', 'unreviewed_content'],
  ['unknown', 'construction_pilot_2026_10', 'pin01'],
  ['tiktok', 'construction_pilot_2026_10', 'pin01'],
  ['pinterest', 'fleet_202610', 'pin01'],
  ['pinterest', 'construction_202610', 'b1_due_point'],
  ['pinterest', 'construction_pilot_2026_10', 'a1_markup'],
  ['pinterest', '__proto__', 'pin01']
]) {
  const entry = setup(tool, 'granted', `?utm_source=${source}&utm_campaign=${name}&utm_content=${content}`);
  assert.equal(entry.session.size, 0);
  assert.ok(entry.events.every(e => !('campaign_name' in e[2])));
  const invalidSaved = setup(tool, 'granted', '', false, {campaign_source:source, campaign_name:name, campaign_content:content});
  assert.ok(invalidSaved.events.every(e => !('campaign_name' in e[2])));
}
const unrelated=setup('/contact/','granted'); assert.equal(unrelated.events.length,0);
const guide=setup('/small-fleet-maintenance/fleet-maintenance-schedule-spreadsheet/','granted');guide.click('https://mercerlanepress.com/tools/fleet-maintenance-due-calculator/');assert.equal(guide.events.at(-1)[1],'guide_to_tool');
const heat=setup('/tools/heat-pump-running-cost-calculator/','denied');
heat.submit(true);assert.equal(heat.events.length,0);
heat.change('granted');assert.equal(heat.events.at(-1)[1],'tool_entry');
heat.submit(false);heat.submit(true,'unrelated-form');assert.equal(heat.events.length,1);
heat.submit(true);heat.submit(true);assert.equal(heat.events.filter(e=>e[1]==='heat_pump_calculator_used').length,1);
assert.deepEqual(Object.keys(heat.events.at(-1)[2]).sort(),['campaign_group','page_id','page_kind']);
heat.click('https://mercerlanepress.com/books/the-new-heat-pump-owners-operating-manual/');assert.equal(heat.events.at(-1)[1],'tool_to_book');
const book=setup('/books/the-new-heat-pump-owners-operating-manual/','granted');
book.click('https://www.amazon.co.uk/dp/B0HF51WQ1F');assert.equal(book.events.at(-1)[1],'book_retailer_click');
const bookCount=book.events.length;book.click('https://www.amazon.co.uk.evil.example/dp/B0HF51WQ1F');book.click('https://www.amazon.co.uk/dp/OTHER');assert.equal(book.events.length,bookCount);
book.change('denied');book.click('https://www.amazon.co.uk/dp/B0HF51WQ1F');assert.equal(book.events.length,bookCount);
const pto=setup('/tools/pto-accrual-calculator/','granted');pto.click('https://mercerlanepress.com/tools/hr-manager-toolkit/');assert.equal(pto.events.at(-1)[1],'tool_to_product');
const newBook=setup('/books/home-ev-charger-installed-now-what/','granted');
assert.equal(newBook.events[0][1],'funnel_page_entry');
newBook.click('https://www.amazon.co.uk/dp/B0HMS4KNVQ');
assert.equal(newBook.events.at(-1)[1],'book_retailer_click');
assert.equal(newBook.events.at(-1)[2].checkout_provider,'amazon_uk');
newBook.click('https://www.amazon.com/dp/B0HMS4KNVQ');
assert.equal(newBook.events.at(-1)[2].checkout_provider,'amazon_us');
const retailerCount=newBook.events.length;
newBook.click('https://www.amazon.com.evil.example/dp/B0HMS4KNVQ');
newBook.click('https://www.amazon.com/dp/not-an-asin');
assert.equal(newBook.events.length,retailerCount);
const broadGuide=setup('/construction-estimating/construction-job-costing-spreadsheet-estimate-vs-actual/','granted');
assert.equal(broadGuide.events[0][1],'funnel_page_entry');
broadGuide.click('https://mercerlanepress.com/tools/construction-job-profit-calculator/');
assert.equal(broadGuide.events.at(-1)[1],'guide_to_tool');
broadGuide.click('https://mercerlanepress.com/tools/construction-estimating-system-pro/');
assert.equal(broadGuide.events.at(-1)[1],'guide_to_product');
const officeGuide=setup('/power-automate/save-outlook-attachments-to-sharepoint/','granted');
officeGuide.click('https://mercerlanepress.com/books/automate-the-office/');
assert.equal(officeGuide.events.at(-1)[1],'guide_to_book');
const familyPlanner=setup('/tools/family-admin-reset-planner/','granted');
familyPlanner.click('https://mercerlanepress.com/tools/family-admin-operating-system/');
assert.equal(familyPlanner.events.at(-1)[1],'tool_to_product');
const deniedGuide=setup('/power-automate/save-outlook-attachments-to-sharepoint/','denied');
deniedGuide.click('https://mercerlanepress.com/books/automate-the-office/');
assert.equal(deniedGuide.events.length,0);
assert.ok([...newBook.events,...broadGuide.events,...officeGuide.events].every(e=>e[1]!=='purchase'));

console.log('Growth measurement checks passed: deny/accept/revoke, blocked storage, event de-duplication, allowlisted attribution, input exclusion, correct Etsy/Stripe destinations and no purchase claims.');

// AI referral labels must survive an internal journey, remain consent gated,
// reject lookalikes, and never include prompts or complete referring URLs.
const ai = setup(tool, 'granted', '?utm_source=chatgpt.com&prompt=private');
assert.equal(ai.events[0][2].ai_source, 'chatgpt');
assert.equal(ai.events.filter(e=>e[1]==='ai_referred_entry').length, 1);
ai.click(target); assert.equal(ai.events.at(-1)[2].ai_source, 'chatgpt');
assert.ok(!JSON.stringify(ai.events).includes('private'));
const onwardAi = setup('/tools/construction-estimating-system-pro/', 'granted', '', false, null, 'https://mercerlanepress.com/tools/contractor-markup-margin-calculator/', 'chatgpt');
assert.equal(onwardAi.events[0][2].ai_source, 'chatgpt');
for (const ref of ['https://chatgpt.com.evil.example/private', 'https://example.com/?chatgpt.com']) {
  const other = setup(tool,'granted','',false,null,ref,'chatgpt');
  assert.ok(other.events.every(e=>!e[2].ai_source));
}
const refAi = setup(tool,'granted','',false,null,'https://www.perplexity.ai/search/private');
assert.equal(refAi.events[0][2].ai_source, 'perplexity');
assert.ok(!JSON.stringify(refAi.events).includes('/search/private'));
const noAi = setup(tool,'denied','?utm_source=chatgpt.com');
assert.equal(noAi.events.length,0); assert.equal(noAi.session.size,0);
ai.change('denied'); assert.equal(ai.session.size,0);
const forged = setup(tool,'granted','',false,null,'','unapproved');
assert.ok(forged.events.every(e=>!e[2].ai_source));
console.log('AI referral tests passed: consent, internal carryover, revocation, exact hosts and private-URL exclusion.');

assert.equal(onwardAi.events.filter(e=>e[1]==='ai_referred_entry').length,0);
assert.ok(setup(tool,'granted','?utm_source=__proto__').events.every(e=>!e[2].ai_source));
