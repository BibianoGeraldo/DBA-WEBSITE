import { Resend } from 'resend';

// Route Handlers run on the Node.js runtime by default; we keep it explicit
// because the Resend SDK and process.env secrets belong on the server only.
export const runtime = 'nodejs';
// POST is never cached, but make the intent explicit: this must always run live.
export const dynamic = 'force-dynamic';

const MAX = { name: 120, email: 160, phone: 60, area: 120, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  area?: string;
  message?: string;
  company?: string; // honeypot — must stay empty for real humans
};

// In-memory rate limit. Caveat: on serverless this is per-instance and resets on
// cold start — it blunts rapid bursts from one IP but is not a distributed guard.
// For production-grade limiting swap this for Upstash/Vercel KV (see notes).
const RATE_LIMIT = 5; // max submissions...
const RATE_WINDOW_MS = 60 * 60 * 1000; // ...per IP per hour
const hits = new Map<string, number[]>();

function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup so the map doesn't grow unbounded.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every(t => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

function clean(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return Response.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: a hidden field no real user fills. If present, silently accept
  // and discard so bots think they succeeded.
  if (clean(body.company)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const area = clean(body.area);
  const message = clean(body.message);

  // Server-side validation — never trust the browser's `required` alone.
  if (!name || !email || !phone || !area || !message) {
    return Response.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    phone.length > MAX.phone ||
    area.length > MAX.area ||
    message.length > MAX.message
  ) {
    return Response.json({ ok: false, error: 'too_long' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    console.error('Contact form: missing RESEND_API_KEY / CONTACT_TO / CONTACT_FROM');
    return Response.json({ ok: false, error: 'server_misconfigured' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Novo contacto do site dba.co.mz</h2>
    <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Área de interesse:</strong> ${escapeHtml(area)}</p>
    <p><strong>Mensagem:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;
  const text =
    `Novo contacto do site dba.co.mz\n\n` +
    `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n` +
    `Área de interesse: ${area}\n\nMensagem:\n${message}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Contacto site — ${area} — ${name}`,
      html,
      text,
    });
    if (error) {
      console.error('Resend error:', error);
      return Response.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('Resend threw:', err);
    return Response.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
