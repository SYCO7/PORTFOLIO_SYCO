"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/animations/variants";

type ToolItem = {
  name: string;
  level: "Core" | "Operational" | "Developing";
};

const tools: ToolItem[] = [
  { name: "Nmap", level: "Core" },
  { name: "Burp Suite", level: "Operational" },
  { name: "Wireshark", level: "Developing" },
  { name: "Gobuster", level: "Operational" },
  { name: "ffuf", level: "Developing" },
  { name: "Metasploit (Lab)", level: "Developing" },
];

const levelTone: Record<ToolItem["level"], string> = {
  Core: "text-cyan-300 border-cyan-400/40 bg-cyan-400/10",
  Operational: "text-rose-300 border-rose-400/40 bg-rose-400/10",
  Developing: "text-amber-300 border-amber-400/40 bg-amber-400/10",
};

export default function ToolsProficiencyGrid() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">Tools Proficiency Grid</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <article
            key={tool.name}
            className="group relative overflow-hidden rounded-xl border border-border/70 bg-black/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
            </div>
            <div className="relative flex items-center justify-between gap-2">
              <h3 className="text-sm font-medium text-slate-100">{tool.name}</h3>
              <span className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.14em] ${levelTone[tool.level]}`}>
                {tool.level}
              </span>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
