"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/animations/variants";
import { learningJourney } from "@/lib/portfolio-data";

export default function MissionStatement() {
  return (
    <motion.section
      id="journey"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Experience / Learning Journey</p>
        <h2 className="text-2xl font-semibold text-slate-100 md:text-4xl">Timeline of growth in cybersecurity.</h2>
      </div>

      <div className="relative space-y-4 border-l border-cyan-300/25 pl-5">
        {learningJourney.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            className="section-shell relative rounded-2xl p-5"
          >
            <span className="absolute -left-7.25 top-7 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(54,243,255,0.8)]" />
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-medium text-slate-100">{step.title}</h3>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-cyan-200">
                {step.period}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{step.summary}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
