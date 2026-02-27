"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";

import { sectionReveal } from "@/animations/variants";

export default function MissionStatement() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 text-rose-300">
        <Crosshair className="h-4 w-4" />
        <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">Mission Statement</h2>
      </div>

      <article className="glass-panel rounded-2xl border border-border/70 p-6 transition-all duration-300 hover:border-cyan-400/35">
        <p className="text-balance text-lg font-semibold leading-8 text-slate-100 md:text-xl">
          &quot;I build offensive security tools focused on practical detection, recon automation, and AI-assisted
          workflows.&quot;
        </p>
      </article>
    </motion.section>
  );
}
