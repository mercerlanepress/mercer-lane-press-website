const COOKIE='mlp_fleet_session';
const ZIP='Mercer_Lane_Small_Fleet_Maintenance_System_v1_0.zip';
const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store',...headers}});
const validId=id=>/^cs_[A-Za-z0-9_]{8,200}$/.test(String(id||''));
async function paidSession(id,env){
 if(!validId(id))return null;
 if(!env.STRIPE_RESTRICTED_KEY||!env.FLEET_PAYMENT_LINK_ID)throw new Error('Purchase verification is not configured.');
 const r=await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(id)}`,{headers:{Authorization:`Bearer ${env.STRIPE_RESTRICTED_KEY}`}});
 if(!r.ok)return null;
 const s=await r.json();
 return s.status==='complete'&&s.payment_status==='paid'&&s.mode==='payment'&&s.payment_link===env.FLEET_PAYMENT_LINK_ID&&s.livemode===true?s:null;
}
async function recordOrder(s,env){
 // Stable key makes Stripe retries idempotent; no customer/card/HR details are stored.
 await env.PRODUCTS.put(`orders/small-fleet-maintenance-system/${s.id}.json`,JSON.stringify({session_id:s.id,product:'small-fleet-maintenance-system',version:'1.0',payment_status:'paid'}),{httpMetadata:{contentType:'application/json'}});
}
async function access(request,env){
 if(request.method!=='POST')return json({message:'Method not allowed.'},405,{Allow:'POST'});
 if(request.headers.get('Origin')!==new URL(request.url).origin)return json({message:'Use the purchase download page.'},403);
 if(!env.PRODUCTS)return json({message:'Secure delivery is not configured.'},503);
 let body;try{body=await request.json();}catch{return json({message:'Invalid request.'},400);}
 const s=await paidSession(body?.session_id,env);
 if(!s)return json({message:'This checkout is not a completed paid Small Fleet Maintenance System order. If payment is still processing, return after confirmation or contact support.'},403);
 if(!await env.PRODUCTS.head(env.FLEET_PRODUCT_OBJECT_KEY||ZIP))return json({message:'The toolkit file is temporarily unavailable. Contact Mercer Lane Press with your receipt.'},503);
 await recordOrder(s,env);
 return json({ok:true},200,{'Set-Cookie':`${COOKIE}=${encodeURIComponent(s.id)}; Max-Age=86400; Path=/api/; HttpOnly; Secure; SameSite=Strict`});
}
async function download(request,env){
 if(request.method!=='GET')return json({message:'Method not allowed.'},405,{Allow:'GET'});
 if(!env.PRODUCTS)return json({message:'Secure delivery is not configured.'},503);
 const cookie=(request.headers.get('Cookie')||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='));
 const id=cookie?.slice(COOKIE.length+1);
 if(!await paidSession(id,env))return json({message:'A verified paid Small Fleet Maintenance System checkout is required.'},403);
 const o=await env.PRODUCTS.get(env.FLEET_PRODUCT_OBJECT_KEY||ZIP);
 if(!o)return json({message:'The toolkit file is temporarily unavailable. Contact Mercer Lane Press.'},503);
 const headers=new Headers({'Content-Type':'application/zip','Content-Disposition':`attachment; filename="${ZIP}"`,'Cache-Control':'private, no-store, max-age=0','X-Content-Type-Options':'nosniff'});
 if(o.size!=null)headers.set('Content-Length',String(o.size));
 return new Response(o.body,{headers});
}
export async function verifySignature(payload,header,secret,now=Math.floor(Date.now()/1000)){
 if(!secret||!header)return false;
 const pieces=header.split(',');const t=pieces.find(x=>x.startsWith('t='))?.slice(2);
 if(!/^\d+$/.test(t||'')||Math.abs(now-Number(t))>300)return false;
 const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['verify']);
 const bytes=new TextEncoder().encode(`${t}.${payload}`);
 for(const p of pieces.filter(x=>x.startsWith('v1='))){
  const h=p.slice(3);if(!/^[a-f0-9]{64}$/i.test(h))continue;
  if(await crypto.subtle.verify('HMAC',key,Uint8Array.from(h.match(/../g),x=>parseInt(x,16)),bytes))return true;
 }
 return false;
}
async function webhook(request,env){
 if(request.method!=='POST')return json({message:'Method not allowed.'},405,{Allow:'POST'});
 if(!env.FLEET_STRIPE_WEBHOOK_SECRET||!env.PRODUCTS)return json({message:'Webhook delivery is not configured.'},503);
 if(Number(request.headers.get('Content-Length')||0)>262144)return json({message:'Request too large.'},413);
 const payload=await request.text();if(payload.length>262144)return json({message:'Request too large.'},413);
 if(!await verifySignature(payload,request.headers.get('Stripe-Signature'),env.FLEET_STRIPE_WEBHOOK_SECRET))return json({message:'Invalid signature.'},400);
 let e;try{e=JSON.parse(payload);}catch{return json({message:'Invalid event.'},400);}
 if(['checkout.session.completed','checkout.session.async_payment_succeeded'].includes(e.type)){
  const object=e.data?.object;
  if(object?.payment_link===env.FLEET_PAYMENT_LINK_ID&&object?.payment_status==='paid'){
   const s=await paidSession(object.id,env);if(!s)return json({message:'Payment verification unavailable; retry.'},503);
   await recordOrder(s,env);
  }
 }
 return json({received:true});
}
export async function handleFleetRoute(request,env){
 const path=new URL(request.url).pathname;
 if(!['/api/fleet-access','/api/fleet-download','/api/fleet-stripe-webhook'].includes(path))return null;
 if(env.FLEET_RELEASED!=='true')return json({message:'This product is not yet released for sale.'},503);
 try{return await (path==='/api/fleet-access'?access(request,env):path==='/api/fleet-download'?download(request,env):webhook(request,env));}
 catch{return json({message:'Purchase verification is temporarily unavailable. Try again or contact Mercer Lane Press.'},503);}
}
