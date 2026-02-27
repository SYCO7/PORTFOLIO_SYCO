"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

import { sectionReveal } from "@/animations/variants";

const statusRows = [
  { label: "ROLE", value: "Aspiring Red Team Operator" },
  { label: "FOCUS", value: "Web Pentesting | AI Security" },
  { label: "LAB STATUS", value: "Active" },
  { label: "CURRENT TRACK", value: "eJPT  PNPT  OSCP" },
];

export default function OperationalStatus() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 text-cyan-300">
        <Activity className="h-4 w-4" />
        <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">Operational Status Panel</h2>
      </div>

      <article className="glass-panel relative overflow-hidden rounded-2xl border border-cyan-400/20 p-5 font-mono">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:26px_26px] opacity-35" />
        <div className="relative space-y-3">
          {statusRows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1 border-b border-border/50 pb-2 last:border-b-0 last:pb-0 md:flex-row">
              <span className="w-44 text-xs uppercase tracking-[0.16em] text-cyan-300">{row.label}:</span>
              <span className="text-sm text-slate-200">{row.value}</span>
            </div>
          ))}
        </div>
      </article>
    </motion.section>
  );
}
