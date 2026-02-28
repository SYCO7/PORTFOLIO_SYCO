"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/animations/variants";

export default function About() {
  return (
    <motion.section
      id="about"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="glass-panel rounded-2xl p-6"
    >
      <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">Identity Module</h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
        <p>
          I focus on practical cybersecurity engineering with emphasis on automation, reproducible workflows, and
          secure system analysis.
        </p>
        <p>
          My current development track prioritizes Python-first tooling for reconnaissance and analysis, supported by
          JavaScript/TypeScript for interface and integration needs.
        </p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <article className="rounded-xl border border-border/70 bg-black/35 p-4">
          <h3 className="text-xs uppercase tracking-[0.16em] text-cyan-300">Role</h3>
          <p className="mt-2 text-sm text-slate-200">Cybersecurity Student</p>
        </article>
        <article className="rounded-xl border border-border/70 bg-black/35 p-4">
          <h3 className="text-xs uppercase tracking-[0.16em] text-cyan-300">Focus</h3>
          <p className="mt-2 text-sm text-slate-200">Security Automation &amp; Python Development</p>
        </article>
        <article className="rounded-xl border border-border/70 bg-black/35 p-4">
          <h3 className="text-xs uppercase tracking-[0.16em] text-cyan-300">Research</h3>
          <p className="mt-2 text-sm text-slate-200">Applied Security Engineering</p>
        </article>
      </div>

      <div className="mt-6 rounded-xl border border-border/70 bg-black/35 p-4">
        <h3 className="text-xs uppercase tracking-[0.16em] text-cyan-300">Contact</h3>
        <a
          href="mailto:tanmoymondaltanmoy94@gmail.com"
          className="mt-2 inline-block text-sm text-slate-400 transition-colors hover:text-cyan-300"
        >
          tanmoymondaltanmoy94@gmail.com
        </a>
      </div>
    </motion.section>
  );
}
