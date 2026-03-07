"use client";

import { FormEvent, useMemo, useState } from "react";

import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  message: "",
  website: "",
  formStartedAt: Date.now(),
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isDisabled = useMemo(
    () => isSubmitting || !form.name.trim() || !form.email.trim() || !form.message.trim(),
    [form.email, form.message, form.name, isSubmitting],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Failed to send message. Please try again.");
      }

      setForm({ ...initialForm, formStartedAt: Date.now() });
      setSuccess(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="section-shell rounded-2xl p-5">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            required
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
            rows={6}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            placeholder="Tell me about your project, internship opportunity, or security collaboration."
            className="rounded-xl border border-cyan-300/20 bg-[#050d20]/90 px-3 py-2 text-slate-100 outline-none transition-all focus:border-cyan-300/60 focus:shadow-[0_0_0_1px_rgba(54,243,255,0.28),0_0_28px_rgba(54,243,255,0.15)]"
          />
        </label>

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
          className="hidden"
          aria-hidden
        />

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.985 }}
          disabled={isDisabled}
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/45 bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-100 transition-all hover:bg-cyan-400/25 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        {success ? <p className="text-sm text-emerald-300">Your message has been sent successfully.</p> : null}
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      </div>
    </form>
  );
}
