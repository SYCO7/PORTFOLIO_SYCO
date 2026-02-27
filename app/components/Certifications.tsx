"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

import { sectionReveal } from "@/animations/variants";
import { certifications } from "@/lib/portfolio-data";

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-5"
    >
      <div className="flex items-center gap-2 text-rose-300">
        <BadgeCheck className="h-4 w-4" />
        <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">
          Certifications Archive
        </h2>
      </div>

      {certifications.length > 0 ? (
        <div className="relative border-l border-border/70 pl-6">
          {certifications.slice(0, 5).map((item) => (
            <article
              key={item.title}
              className="group relative mb-4 overflow-hidden glass-panel rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 last:mb-0"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
              </div>
              <span className="absolute -left-7.5 top-6 h-3 w-3 rounded-full bg-rose-300" />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-medium text-slate-100">{item.title}</h3>
                <span className="text-xs uppercase tracking-wider text-rose-300">{item.year}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">{item.issuer}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="glass-panel rounded-xl p-4 text-sm text-slate-300">
          No verified certifications listed yet. Add confirmed credentials in the profile data file.
        </div>
      )}
    </motion.section>
  );
}
