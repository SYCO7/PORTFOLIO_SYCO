"use client";

import { FormEvent, useState } from "react";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

import { sectionReveal } from "@/animations/variants";
import { profile } from "@/lib/portfolio-data";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact | ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <motion.section
      id="contact"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Contact</p>
        <h2 className="text-2xl font-semibold text-slate-100 md:text-4xl">Let&apos;s connect on security projects.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={onSubmit} className="section-shell rounded-2xl p-5">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm text-slate-300">
              Name
              <input
                required
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="rounded-xl border border-cyan-300/25 bg-[#040b1b]/90 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-cyan-300/60"
                placeholder="Your Name"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-xl border border-cyan-300/25 bg-[#040b1b]/90 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-cyan-300/60"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="rounded-xl border border-cyan-300/25 bg-[#040b1b]/90 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-cyan-300/60"
                placeholder="How can we collaborate?"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/45 bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-100 transition-colors hover:bg-cyan-400/25"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </div>
        </form>

        <aside className="section-shell space-y-4 rounded-2xl p-5">
          <div className="rounded-xl border border-cyan-300/20 bg-[#08122b]/70 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-200">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <div className="rounded-xl border border-cyan-300/20 bg-[#08122b]/70 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">Location</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-200">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </p>
          </div>

          <p className="text-sm leading-7 text-slate-300">
            For collaborations, internship opportunities, or security-focused discussions, feel free to reach out.
          </p>
        </aside>
      </div>
    </motion.section>
  );
}
