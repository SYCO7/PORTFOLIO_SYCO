import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

import { profile } from "@/lib/portfolio-data";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
  formStartedAt?: number;
};

const EMAILJS_SERVICE_ID = "service_sblgste";
const EMAILJS_TEMPLATE_ID = "template_16f25en";
const EMAILJS_PUBLIC_KEY = "IKCPQqy2LBYPxJQ2o";

type RateEntry = {
  count: number;
  resetAt: number;
};

const NAME_MIN = 2;
const NAME_MAX = 80;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;
const DEFAULT_RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const DEFAULT_RATE_LIMIT_MAX = 5;
const DEFAULT_MIN_FILL_MS = 2500;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const globalForRateLimit = globalThis as typeof globalThis & {
  __contactRateStore?: Map<string, RateEntry>;
};

const rateStore = globalForRateLimit.__contactRateStore ?? new Map<string, RateEntry>();

if (!globalForRateLimit.__contactRateStore) {
  globalForRateLimit.__contactRateStore = rateStore;
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRequestIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || DEFAULT_RATE_LIMIT_WINDOW_MS);
  const maxRequests = Number(process.env.CONTACT_RATE_LIMIT_MAX || DEFAULT_RATE_LIMIT_MAX);

  for (const [key, entry] of rateStore.entries()) {
    if (entry.resetAt <= now) {
      rateStore.delete(key);
    }
  }

  const entry = rateStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateStore.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true as const, remaining: maxRequests - 1 };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false as const, remaining: 0, retryAt: entry.resetAt };
  }

  entry.count += 1;
  rateStore.set(ip, entry);
  return { allowed: true as const, remaining: Math.max(0, maxRequests - entry.count) };
}

async function sendViaEmailJs(payload: { name: string; email: string; message: string }) {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        name: payload.name,
        email: payload.email,
        message: payload.message,
      },
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const message = asString(payload.message);
  const website = asString(payload.website);
  const formStartedAt = asNumber(payload.formStartedAt);

  // Honeypot field should stay empty for real users.
  if (website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const minFillMs = Number(process.env.CONTACT_MIN_FILL_MS || DEFAULT_MIN_FILL_MS);
  if (!formStartedAt || Date.now() - formStartedAt < minFillMs) {
    return NextResponse.json({ error: "Please wait a moment before submitting the form." }, { status: 400 });
  }

  const ip = getRequestIp(request);
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(((rateLimit.retryAt || Date.now()) - Date.now()) / 1000)),
        },
      },
    );
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (name.length < NAME_MIN || name.length > NAME_MAX) {
    return NextResponse.json({ error: "Name must be between 2 and 80 characters." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length < MESSAGE_MIN || message.length > MESSAGE_MAX) {
    return NextResponse.json({ error: "Message must be between 10 and 2000 characters." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === "true";

  if (!smtpHost || !smtpUser || !smtpPass) {
    const emailJsSent = await sendViaEmailJs({ name, email, message });
    if (emailJsSent) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const destination = process.env.CONTACT_TO || profile.email;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM || `"Portfolio Contact" <${smtpUser}>`,
      to: destination,
      replyTo: email,
      subject: `Portfolio Contact | ${name}`,
      text: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Sender Name:</strong> ${safeName}</p>
        <p><strong>Sender Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    const emailJsSent = await sendViaEmailJs({ name, email, message });
    if (emailJsSent) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
