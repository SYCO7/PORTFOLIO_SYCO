"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

import { sectionReveal } from "@/animations/variants";

export default function FeaturedBuild() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 text-rose-300">
        <Cpu className="h-4 w-4" />
        <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">Featured Build Module</h2>
      </div>

      <article className="glass-panel rounded-2xl border border-border/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-medium text-slate-100">EchoGuard AI</h3>
          <span className="rounded-full border border-border/80 px-2 py-1 text-[10px] uppercase tracking-wider text-rose-300">
            Prototype
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          AI-assisted security monitoring prototype with simulated anomaly scoring.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Next.js', 'TypeScript', 'Python'].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/70 bg-black/45 px-2 py-1 text-[11px] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href="/projects-lab"
          className="mt-4 inline-flex rounded-lg border border-border/80 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-200 transition-colors hover:text-cyan-300"
        >
          View in Projects Lab
        </Link>
      </article>
    </motion.section>
  );
}
