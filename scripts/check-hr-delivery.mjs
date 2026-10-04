import assert from 'node:assert/strict';
import {webcrypto} from 'node:crypto';
import {handleHrRoute,verifySignature} from '../worker/hr-delivery.js';
if(!globalThis.crypto)globalThis.crypto=webcrypto;
const orders=new Map();let paid={id:'cs_live_fixture123',status:'complete',payment_status:'paid',mode:'payment',payment_link:'plink_hr',livemode:true};let available=true;
const env={HR_PAYMENT_LINK_ID:'plink_hr',HR_PRODUCT_OBJECT_KEY:'hr.zip',STRIPE_RESTRICTED_KEY:'fixture',HR_STRIPE_WEBHOOK_SECRET:'fixture-secret',PRODUCTS:{head:async()=>available?{}:null,put:async(k,v)=>orders.set(k,v),get:async()=>available?{body:'zip fixture',size:11}:null}};
globalThis.fetch=async()=>new Response(JSON.stringify(paid));
const req=(path,body,headers={})=>new Request('https://example.test'+path,{method:body?'POST':'GET',headers:{Origin:'https://example.test','Content-Type':'application/json',...headers},...(body?{body:JSON.stringify(body)}:{})});
assert.equal((await handleHrRoute(req('/api/hr-download'),env)).status,403);
assert.equal((await handleHrRoute(req('/api/hr-access',{session_id:'bad'}),env)).status,403);
for(const change of [{payment_status:'unpaid'},{status:'open'},{payment_link:'plink_construction'},{livemode:false},{mode:'subscription'}]){
 const original=paid;paid={...paid,...change};assert.equal((await handleHrRoute(req('/api/hr-access',{session_id:paid.id}),env)).status,403);paid=original;
}
const otherOrigin=req('/api/hr-access',{session_id:paid.id},{Origin:'https://other.test'});assert.equal((await handleHrRoute(otherOrigin,env)).status,403);
available=false;assert.equal((await handleHrRoute(req('/api/hr-access',{session_id:paid.id}),env)).status,503);available=true;
const access=await handleHrRoute(req('/api/hr-access',{session_id:paid.id}),env);assert.equal(access.status,200);assert.match(access.headers.get('Set-Cookie'),/HttpOnly; Secure; SameSite=Strict/);
assert.equal((await handleHrRoute(req('/api/hr-download',null,{Cookie:'mlp_pro_session='+paid.id}),env)).status,403);
const download=await handleHrRoute(req('/api/hr-download',null,{Cookie:'mlp_hr_session='+paid.id}),env);assert.equal(download.status,200);assert.equal(download.headers.get('Cache-Control'),'private, no-store, max-age=0');
const timestamp=Math.floor(Date.now()/1000);
async function signature(payload,t=timestamp){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(env.HR_STRIPE_WEBHOOK_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign']);const h=await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(`${t}.${payload}`));return `t=${t},v1=${Buffer.from(h).toString('hex')}`;}
const payload=JSON.stringify({type:'checkout.session.completed',data:{object:paid}});
assert(await verifySignature(payload,await signature(payload),env.HR_STRIPE_WEBHOOK_SECRET));
assert(!await verifySignature(payload+' ',await signature(payload),env.HR_STRIPE_WEBHOOK_SECRET));
assert(!await verifySignature(payload,await signature(payload,timestamp-301),env.HR_STRIPE_WEBHOOK_SECRET));
const hook=async(type,object=paid)=>{const b=JSON.stringify({type,data:{object}});return handleHrRoute(new Request('https://example.test/api/hr-stripe-webhook',{method:'POST',headers:{'Stripe-Signature':await signature(b)},body:b}),env);};
orders.clear();for(const type of ['checkout.session.completed','checkout.session.completed','checkout.session.async_payment_succeeded'])assert.equal((await hook(type)).status,200);
assert.equal(orders.size,1);assert(!JSON.stringify([...orders.values()]).includes('email'));
orders.clear();await hook('checkout.session.completed',{...paid,payment_status:'unpaid'});assert.equal(orders.size,0);
assert.equal((await handleHrRoute(new Request('https://example.test/api/hr-stripe-webhook',{method:'POST',body:payload}),env)).status,400);
assert.equal(await handleHrRoute(req('/api/pro-download'),env),null);
console.log('HR delivery checks passed: paid-only access, product isolation, secure cookie, private ZIP, signed webhooks, delayed-payment gate and retry idempotency.');
