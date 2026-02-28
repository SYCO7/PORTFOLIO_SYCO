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
          I work at the intersection of offensive security research and practical tooling, with a focus on adversary
          simulation workflows that reflect real-world operator tradecraft.
        </p>
        <p>
          My primary tracks include reconnaissance automation, attack-surface intelligence, and web exploitation
          methodology. I design and iterate utilities that support repeatable red-team style assessments and clear
          technical reporting.
        </p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <article className="rounded-xl border border-border/70 bg-black/35 p-4">
          <h3 className="text-xs uppercase tracking-[0.16em] text-rose-300">Role</h3>
          <p className="mt-2 text-sm text-slate-200">Offensive Security Enthusiast</p>
        </article>
        <article className="rounded-xl border border-border/70 bg-black/35 p-4">
          <h3 className="text-xs uppercase tracking-[0.16em] text-rose-300">Focus</h3>
          <p className="mt-2 text-sm text-slate-200">Red Team Tool Developer</p>
        </article>
        <article className="rounded-xl border border-border/70 bg-black/35 p-4">
          <h3 className="text-xs uppercase tracking-[0.16em] text-rose-300">Research</h3>
          <p className="mt-2 text-sm text-slate-200">Adversary Simulation Researcher</p>
        </article>
      </div>

      <div className="mt-6 rounded-xl border border-border/70 bg-black/35 p-4">
        <h3 className="text-xs uppercase tracking-[0.16em] text-rose-300">Contact</h3>
        <a
          href="mailto:tanmoymondaltanmoy94@gmail.com"
          className="mt-2 inline-block text-sm text-slate-200 underline decoration-rose-400/60 underline-offset-4 transition-colors hover:text-rose-200"
        >
          tanmoymondaltanmoy94@gmail.com
        </a>
      </div>
    </motion.section>
  );
}
