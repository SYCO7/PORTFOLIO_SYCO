"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/animations/variants";
import { skillColumns } from "@/lib/portfolio-data";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">Tactical Skill Matrix</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {skillColumns.map((column) => (
          <article
            key={column.category}
            className="group relative overflow-hidden glass-panel rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
            </div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-rose-300">{column.category}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {column.skills.map((skill) => (
                <li key={skill} className="rounded-lg border border-border/80 bg-black/30 px-3 py-2">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
