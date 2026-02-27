"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { sectionReveal } from "@/animations/variants";
import { profile } from "@/lib/portfolio-data";

export default function Hero() {
  return (
    <section className="space-y-6">
      <motion.div variants={sectionReveal} initial="hidden" animate="visible" className="space-y-6">
        <p className="inline-flex rounded-full border border-border/70 bg-panel px-4 py-1 text-xs uppercase tracking-[0.18em] text-rose-300">
          Red-Team Operations Console
        </p>
        <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-100 md:text-5xl">
          {profile.title}
        </h1>
        <p className="text-sm uppercase tracking-[0.14em] text-rose-300 md:text-base">{profile.subtitle}</p>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-panel px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:text-rose-300"
        >
          View LinkedIn Profile
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
