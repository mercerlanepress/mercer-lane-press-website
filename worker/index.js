import { handleFleetRoute } from './fleet-delivery.js';
import { handleHrRoute } from './hr-delivery.js';
const COOKIE_NAME = 'mlp_pro_session';
const ACCESS_TTL_SECONDS = 60 * 60 * 24;

const DEFAULT_OBJECT_KEY = 'ML-Toolkit-PRO-v32.zip';



function json(data, status = 200, headers = {}) {

  return new Response(JSON.stringify(data), {

    status,

    headers: {

      'Content-Type': 'application/json; charset=utf-8',

      'Cache-Control': 'no-store',

      ...headers,

    },

  });

}



function readCookie(request, name) {

  const raw = request.headers.get('Cookie') || '';

  for (const part of raw.split(';')) {

    const [key, ...rest] = part.trim().split('=');

    if (key === name) return decodeURIComponent(rest.join('='));

  }

  return null;

}



function validSessionId(value) {

  return /^cs_[A-Za-z0-9_]+$/.test(String(value || ''));

}



async function retrieveStripeSession(sessionId, env) {

  if (!env.STRIPE_RESTRICTED_KEY) throw new Error('Stripe verification is not configured.');

  const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {

    headers: { Authorization: `Bearer ${env.STRIPE_RESTRICTED_KEY}` },

  });

  if (!response.ok) return null;

  return response.json();

}



function isPaidProSession(session, env) {

  return Boolean(

    session &&

    session.status === 'complete' &&

    session.payment_status === 'paid' &&

    env.PRO_PAYMENT_LINK_ID &&

    session.payment_link === env.PRO_PAYMENT_LINK_ID

  );

}



async function verifyPaidProSession(sessionId, env) {

  if (!validSessionId(sessionId)) return null;

  const session = await retrieveStripeSession(sessionId, env);

  return isPaidProSession(session, env) ? session : null;

}



async function handleAccess(request, env) {

  if (request.method !== 'POST') return json({ message: 'Method not allowed.' }, 405, { Allow: 'POST' });

  if (!env.PRODUCTS) return json({ message: 'Secure delivery is not configured yet.' }, 503);



  let body;

  try {

    body = await request.json();

  } catch {

    return json({ message: 'Invalid request.' }, 400);

  }



  const sessionId = String(body?.session_id || '');

  const session = await verifyPaidProSession(sessionId, env);

  if (!session) return json({ message: 'This checkout could not be verified as a completed paid PRO order.' }, 403);



  return json(

    { ok: true, currency: session.currency, amount_subtotal: session.amount_subtotal },

    200,

    { 'Set-Cookie': `${COOKIE_NAME}=${encodeURIComponent(sessionId)}; Max-Age=${ACCESS_TTL_SECONDS}; Path=/api/; HttpOnly; Secure; SameSite=Strict` },

  );

}



async function handleDownload(request, env) {

  if (request.method !== 'GET') return json({ message: 'Method not allowed.' }, 405, { Allow: 'GET' });

  if (!env.PRODUCTS) return json({ message: 'Secure delivery is not configured yet.' }, 503);



  const sessionId = readCookie(request, COOKIE_NAME);

  if (!sessionId) return json({ message: 'No verified checkout was found in this browser.' }, 403);



  const session = await verifyPaidProSession(sessionId, env);

  if (!session) return json({ message: 'This download is not linked to a completed paid PRO order.' }, 403);



  const objectKey = env.PRO_PRODUCT_OBJECT_KEY || DEFAULT_OBJECT_KEY;

  const object = await env.PRODUCTS.get(objectKey);

  if (!object) return json({ message: 'The product file is temporarily unavailable. Contact Mercer Lane Press.' }, 503);



  const headers = new Headers();

  object.writeHttpMetadata(headers);

  headers.set('Content-Type', 'application/zip');

  headers.set('Content-Disposition', 'attachment; filename="ML-Toolkit-PRO-v32.zip"');

  headers.set('Cache-Control', 'private, no-store, max-age=0');

  headers.set('X-Content-Type-Options', 'nosniff');

  if (object.size != null) headers.set('Content-Length', String(object.size));

  if (object.httpEtag) headers.set('ETag', object.httpEtag);



  return new Response(object.body, { status: 200, headers });

}



export default {

  async fetch(request, env) {

    const url = new URL(request.url);
    const fleetResponse = await handleFleetRoute(request, env);
    if (fleetResponse) return fleetResponse;
    const hrResponse = await handleHrRoute(request, env);
    if (hrResponse) return hrResponse;


    if (url.pathname === '/api/pro-access') return handleAccess(request, env);

    if (url.pathname === '/api/pro-download') return handleDownload(request, env);



    if (env.ASSETS) return env.ASSETS.fetch(request);

    return new Response('Not found', { status: 404 });

  },

};
