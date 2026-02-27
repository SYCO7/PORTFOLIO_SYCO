"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/animations/variants";
import { profile } from "@/lib/portfolio-data";

export type SystemStatusData = {
  status: string;
  focus: string[];
  lastUpdate: string;
};

type OperatorStatusBarProps = {
  systemData: SystemStatusData;
};

const preferredFocus = ["Web Exploitation", "AI Security", "Recon"];

function getFocusDomain(focus: string[]) {
  const normalized = new Map(focus.map((item) => [item.toLowerCase(), item]));
  const prioritized = preferredFocus
    .map((item) => normalized.get(item.toLowerCase()))
    .filter((item): item is string => Boolean(item));

  if (prioritized.length > 0) {
    return prioritized;
  }

  return focus.slice(0, 3);
}

export default function OperatorStatusBar({ systemData }: OperatorStatusBarProps) {
  const focusDomain = getFocusDomain(systemData.focus);

  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      animate="visible"
      className="rounded-lg border border-cyan-400/35 bg-black/55 px-3 py-2 font-mono shadow-lg shadow-cyan-500/10"
    >
      <div className="grid gap-2 text-[11px] uppercase tracking-[0.14em] text-slate-300 md:grid-cols-3">
        <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
          <span className="text-cyan-300">ONLINE STATUS:</span> {systemData.status}
        </div>
        <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
          <span className="text-cyan-300">ROLE:</span> {profile.title}
        </div>
        <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
          <span className="text-cyan-300">FOCUS DOMAIN:</span> {focusDomain.join(" | ")}
        </div>
      </div>
    </motion.section>
  );
}
