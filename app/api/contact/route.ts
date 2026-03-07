import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

import { profile } from "@/lib/portfolio-data";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === "true";

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later." },
      { status: 500 },
    );
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

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM || `"Portfolio Contact" <${smtpUser}>`,
      to: destination,
      replyTo: email,
      subject: `Portfolio Contact | ${name}`,
      text: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
