import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {calculateDue,addMonths,parseDate} from '../src/scripts/fleet-due.mjs';
import {handleFleetRoute} from '../worker/fleet-delivery.js';
const today='2026-10-15';
const base={trigger:'dual',sourceVerified:true,intervalMiles:10000,lastMileage:30250,currentMileage:39600,readingDate:today,intervalMonths:12,lastDate:'2026-01-12',warningMiles:1000,warningDays:30,freshnessDays:14};
const cases=[
 ['dual due soon',{},'DUE SOON'],['exact mileage',{currentMileage:40250},'OVERDUE'],['one before',{currentMileage:40249},'DUE SOON'],['one after',{currentMileage:40251},'OVERDUE'],
 ['date exact',{lastDate:'2025-10-15'},'OVERDUE'],['date overdue mileage current',{lastDate:'2025-09-15',currentMileage:31000},'OVERDUE'],['miles overdue date current',{currentMileage:45000},'OVERDUE'],
 ['due soon date',{lastDate:'2025-11-01',currentMileage:31000},'DUE SOON'],['current',{currentMileage:31000},'CURRENT'],['zero window one before',{trigger:'miles',currentMileage:40249,warningMiles:0},'CURRENT'],
 ['missing mileage',{currentMileage:''},'DATA ISSUE'],['missing date',{readingDate:''},'DATA ISSUE'],['stale',{readingDate:'2026-09-01'},'DATA ISSUE'],['missing source',{sourceVerified:false},'DATA ISSUE'],
 ['missing baseline',{lastMileage:''},'DATA ISSUE'],['backward',{currentMileage:30000},'DATA ISSUE'],['negative mileage',{currentMileage:-1},'DATA ISSUE'],['invalid date',{lastDate:'2026-02-30'},'DATA ISSUE'],
 ['future baseline',{lastDate:'2026-11-01'},'DATA ISSUE'],['future reading',{readingDate:'2026-10-16'},'DATA ISSUE'],['negative warning',{warningMiles:-1},'DATA ISSUE'],['fraction months',{intervalMonths:1.5},'DATA ISSUE'],
 ['date only ignores mileage',{trigger:'date',currentMileage:'',readingDate:'',lastMileage:''},'CURRENT'],['miles only ignores date',{trigger:'miles',lastDate:'',intervalMonths:''},'DUE SOON'],
 ['source overrides overdue',{sourceVerified:false,currentMileage:45000},'DATA ISSUE'],['missing other trigger overrides overdue',{lastDate:'',currentMileage:45000},'DATA ISSUE'],
 ['freshness exact boundary',{readingDate:'2026-10-01'},'DUE SOON'],['freshness one over',{readingDate:'2026-09-30'},'DATA ISSUE'],['blank freshness',{freshnessDays:'',readingDate:'2026-09-01'},'DUE SOON'],
 ['zero baseline legitimate',{lastMileage:0,currentMileage:1},'CURRENT'],['blank interval',{intervalMiles:''},'DATA ISSUE'],['zero interval',{intervalMiles:0},'DATA ISSUE'],['unrecognized mode',{trigger:'other'},'DATA ISSUE']
];
for(const[label,change,status]of cases)assert.equal(calculateDue({...base,...change},today).status,status,label);
assert.equal(addMonths(parseDate('2024-01-31'),1).toISOString().slice(0,10),'2024-02-29');
assert.equal(addMonths(parseDate('2025-01-31'),1).toISOString().slice(0,10),'2025-02-28');
assert.equal(addMonths(parseDate('2024-02-29'),12).toISOString().slice(0,10),'2025-02-28');
const demo=calculateDue(base,today);assert.equal(demo.nextMileage,40250);assert.equal(demo.nextDate,'2027-01-12');assert.equal(demo.milesRemaining,650);assert.equal(demo.controlling,'Mileage');
const api='https://example.com/api/fleet-access';
assert.equal((await handleFleetRoute(new Request(api,{method:'POST'}),{})).status,503,'Unconfigured release fails closed');
assert.equal((await handleFleetRoute(new Request(api),{FLEET_RELEASED:'true'})).status,405);
const env={FLEET_RELEASED:'true',FLEET_PAYMENT_LINK_ID:'plink_fictional_test',STRIPE_RESTRICTED_KEY:'TEST_ONLY',PRODUCTS:{head:async()=>({}),get:async()=>({body:new Uint8Array([1]),size:1}),put:async()=>{}}};
const fetchOriginal=globalThis.fetch;
globalThis.fetch=async()=>new Response(JSON.stringify({id:'cs_test_fleet12345',status:'complete',payment_status:'paid',mode:'payment',payment_link:'plink_fictional_test',livemode:true}),{status:200});
try{
 const req=()=>new Request(api,{method:'POST',headers:{Origin:'https://example.com','Content-Type':'application/json'},body:JSON.stringify({session_id:'cs_test_fleet12345'})});
 const ok=await handleFleetRoute(req(),env);assert.equal(ok.status,200);assert.match(ok.headers.get('Set-Cookie'),/HttpOnly; Secure; SameSite=Strict/);
 const dl=await handleFleetRoute(new Request('https://example.com/api/fleet-download',{headers:{Cookie:'mlp_fleet_session=cs_test_fleet12345'}}),env);assert.equal(dl.status,200);assert.match(dl.headers.get('Content-Disposition'),/Mercer_Lane_Small_Fleet_Maintenance_System_v1_0.zip/);
 for(const bad of [{payment_status:'unpaid'},{payment_link:'another_product'},{livemode:false},{status:'open'},{mode:'subscription'}]){globalThis.fetch=async()=>new Response(JSON.stringify({id:'cs_test_fleet12345',status:'complete',payment_status:'paid',mode:'payment',payment_link:'plink_fictional_test',livemode:true,...bad}));assert.equal((await handleFleetRoute(req(),env)).status,403);}
 assert.equal((await handleFleetRoute(new Request(api,{method:'POST',headers:{Origin:'https://wrong.example','Content-Type':'application/json'},body:'{}'}),env)).status,403);
 assert.equal((await handleFleetRoute(new Request('https://example.com/api/fleet-download'),env)).status,403);
}finally{globalThis.fetch=fetchOriginal;}
for(const p of ['fleet-maintenance-due-calculator','small-fleet-maintenance-system']){const html=readFileSync(`dist/tools/${p}/index.html`,'utf8');assert.match(html,/rel="canonical"/);assert.match(readFileSync('dist/sitemap.xml','utf8'),new RegExp(`/tools/${p}/`));}
assert.equal(existsSync('public/Mercer_Lane_Small_Fleet_Maintenance_System_v1_0.zip'),false);
const tool=readFileSync('src/scripts/fleet-due.mjs','utf8');assert.doesNotMatch(tool,/localStorage\.setItem|sessionStorage|fetch\(/);assert.match(tool,/mlp-analytics-consent/);
console.log(`Fleet checks passed: ${cases.length} status scenarios, calendar boundaries, manuscript example, delivery release gate, paid product/session isolation, origin checks, private routing and page metadata.`);
