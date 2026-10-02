const COOKIE_NAME = 'mlp_pro_download';
const ACCESS_TTL_SECONDS = 60 * 60 * 24 * 7;
const MAX_DOWNLOADS = 3;
const DEFAULT_OBJECT_KEY = 'Mercer_Lane_Construction_Estimating_System_PRO.zip';

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

async function retrieveStripeSession(sessionId, env) {
  if (!env.STRIPE_RESTRICTED_KEY) throw new Error('Stripe verification is not configured.');
  const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
    headers: { Authorization: `Bearer ${env.STRIPE_RESTRICTED_KEY}` },
  });
  if (!response.ok) return null;
  return response.json();
}

async function handleAccess(request, env) {
  if (request.method !== 'POST') return json({ message: 'Method not allowed.' }, 405, { Allow: 'POST' });
  if (!env.DOWNLOADS || !env.PRODUCTS) return json({ message: 'Secure delivery is not configured yet.' }, 503);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: 'Invalid request.' }, 400);
  }

  const sessionId = String(body?.session_id || '');
  if (!/^cs_[A-Za-z0-9_]+$/.test(sessionId)) return json({ message: 'Invalid checkout session.' }, 400);

  const existingToken = await env.DOWNLOADS.get(`session:${sessionId}`);
  const requestToken = readCookie(request, COOKIE_NAME);
  if (existingToken) {
    if (requestToken && requestToken === existingToken) {
      const record = await env.DOWNLOADS.get(`token:${existingToken}`, 'json');
      const remaining = Math.max(0, MAX_DOWNLOADS - Number(record?.downloads || 0));
      return json({ ok: true, downloads_remaining: remaining });
    }
    return json({ message: 'Download access for this order has already been issued in another browser or device. Contact Mercer Lane Press if you need access restored.' }, 409);
  }

  const session = await retrieveStripeSession(sessionId, env);
  if (!session || session.status !== 'complete' || session.payment_status !== 'paid') {
    return json({ message: 'This checkout is not recorded as a completed paid order.' }, 403);
  }

  if (!env.PRO_PAYMENT_LINK_ID || session.payment_link !== env.PRO_PAYMENT_LINK_ID) {
    return json({ message: 'This checkout does not match the Construction Estimating System PRO payment link.' }, 403);
  }

  const token = `${crypto.randomUUID()}${crypto.randomUUID().replaceAll('-', '')}`;
  const record = {
    session_id: sessionId,
    email: session.customer_details?.email || session.customer_email || null,
    downloads: 0,
    issued_at: new Date().toISOString(),
  };

  await Promise.all([
    env.DOWNLOADS.put(`session:${sessionId}`, token, { expirationTtl: ACCESS_TTL_SECONDS }),
    env.DOWNLOADS.put(`token:${token}`, JSON.stringify(record), { expirationTtl: ACCESS_TTL_SECONDS }),
  ]);

  return json(
    { ok: true, downloads_remaining: MAX_DOWNLOADS },
    200,
    { 'Set-Cookie': `${COOKIE_NAME}=${encodeURIComponent(token)}; Max-Age=${ACCESS_TTL_SECONDS}; Path=/api/; HttpOnly; Secure; SameSite=Strict` },
  );
}

async function handleDownload(request, env) {
  if (request.method !== 'GET') return json({ message: 'Method not allowed.' }, 405, { Allow: 'GET' });
  if (!env.DOWNLOADS || !env.PRODUCTS) return json({ message: 'Secure delivery is not configured yet.' }, 503);

  const token = readCookie(request, COOKIE_NAME);
  if (!token) return json({ message: 'No valid download access was found in this browser.' }, 403);

  const record = await env.DOWNLOADS.get(`token:${token}`, 'json');
  if (!record) return json({ message: 'Download access has expired. Contact Mercer Lane Press if you need help.' }, 403);

  const downloads = Number(record.downloads || 0);
  if (downloads >= MAX_DOWNLOADS) {
    return json({ message: 'The download limit for this order has been reached. Contact Mercer Lane Press if you need access restored.' }, 429);
  }

  const objectKey = env.PRO_PRODUCT_OBJECT_KEY || DEFAULT_OBJECT_KEY;
  const object = await env.PRODUCTS.get(objectKey);
  if (!object) return json({ message: 'The product file is temporarily unavailable. Contact Mercer Lane Press.' }, 503);

  record.downloads = downloads + 1;
  record.last_download_at = new Date().toISOString();
  await env.DOWNLOADS.put(`token:${token}`, JSON.stringify(record), { expirationTtl: ACCESS_TTL_SECONDS });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Content-Type', 'application/zip');
  headers.set('Content-Disposition', 'attachment; filename="Mercer_Lane_Construction_Estimating_System_PRO.zip"');
  headers.set('Cache-Control', 'private, no-store, max-age=0');
  headers.set('X-Content-Type-Options', 'nosniff');
  if (object.size != null) headers.set('Content-Length', String(object.size));
  if (object.httpEtag) headers.set('ETag', object.httpEtag);

  return new Response(object.body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/pro-access') return handleAccess(request, env);
    if (url.pathname === '/api/pro-download') return handleDownload(request, env);

    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Not found', { status: 404 });
  },
};
