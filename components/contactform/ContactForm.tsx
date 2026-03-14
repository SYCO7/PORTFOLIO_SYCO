"use client";

import { FormEvent, useMemo, useState } from "react";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const missingConfig = useMemo(() => {
    const missing: string[] = [];

    if (!EMAILJS_SERVICE_ID) {
      missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
    }

    if (!EMAILJS_TEMPLATE_ID) {
      missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
    }

    if (!EMAILJS_PUBLIC_KEY) {
      missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    }

    return missing;
  }, []);

  const isDisabled = useMemo(
    () => isSubmitting || !form.name.trim() || !form.email.trim() || !form.message.trim(),
    [form.email, form.message, form.name, isSubmitting],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.info("[contact] submit fired");
    setStatus(null);

    if (honeypot) {
      console.warn("[contact] honeypot triggered, ignoring submission");
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      console.warn("[contact] blocked submit: empty required field");
      setStatus({ type: "error", message: "Name, email, and message are required." });
      return;
    }

    if (!emailPattern.test(email)) {
      console.warn("[contact] blocked submit: invalid email", { email });
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (missingConfig.length > 0) {
      const missingKeys = missingConfig.join(", ");
      console.error("[contact] EmailJS env missing", { missing: missingConfig });
      setStatus({
        type: "error",
        message: `Contact form is not configured. Missing: ${missingKeys}. Add these in Vercel Environment Variables and redeploy.`,
      });
      return;
    }

    setIsSubmitting(true);
    console.info("[contact] submitting message", {
      serviceConfigured: Boolean(EMAILJS_SERVICE_ID),
      templateConfigured: Boolean(EMAILJS_TEMPLATE_ID),
      keyConfigured: Boolean(EMAILJS_PUBLIC_KEY),
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );
      console.info("[contact] email sent via EmailJS");

      setForm(initialForm);
      setHoneypot("");
      setStatus({ type: "success", message: "Message sent successfully. I will get back to you soon." });
    } catch (error) {
      console.error("[contact] EmailJS send failed", error);
      const message = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="section-shell relative z-30 rounded-2xl p-5 pointer-events-auto" noValidate>
      <div className="grid gap-4">
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            required
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Your full name"
            className="rounded-xl border border-cyan-300/20 bg-[#050d20]/90 px-3 py-2 text-slate-100 outline-none transition-all focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(54,243,255,0.28),0_0_28px_rgba(54,243,255,0.15)]"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="you@example.com"
            className="rounded-xl border border-cyan-300/20 bg-[#050d20]/90 px-3 py-2 text-slate-100 outline-none transition-all focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(54,243,255,0.28),0_0_28px_rgba(54,243,255,0.15)]"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Message
          <textarea
            required
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            placeholder="Tell me about your project, internship opportunity, or security collaboration."
            className="rounded-xl border border-cyan-300/20 bg-[#050d20]/90 px-3 py-2 text-slate-100 outline-none transition-all focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(54,243,255,0.28),0_0_28px_rgba(54,243,255,0.15)]"
          />
        </label>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.985 }}
          disabled={isDisabled}
          type="submit"
          aria-busy={isSubmitting}
          className="relative z-30 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/45 bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-100 transition-all hover:bg-cyan-400/25 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        {status?.type === "success" ? (
          <p role="status" className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">
            {status.message}
          </p>
        ) : null}

        {status?.type === "error" ? (
          <p role="alert" className="rounded-lg border border-rose-300/20 bg-rose-400/10 px-3 py-2 text-sm text-rose-300">
            {status.message}
          </p>
        ) : null}

        {missingConfig.length > 0 ? (
          <p className="rounded-lg border border-amber-300/25 bg-amber-400/10 px-3 py-2 text-xs text-amber-200">
            Missing EmailJS env in this deployment: {missingConfig.join(", ")}.
          </p>
        ) : null}
      </div>
    </form>
  );
}
