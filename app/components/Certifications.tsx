"use client";

import { motion } from "framer-motion";

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
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Certifications</p>
        <h2 className="text-2xl font-semibold text-slate-100 md:text-4xl">Professional certification roadmap.</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
            className="section-shell rounded-2xl p-4"
          >
            <p className="text-sm uppercase tracking-[0.15em] text-cyan-300">{item.status}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{item.issuer}</p>
            <p className="mt-4 inline-flex rounded-full border border-violet-300/30 bg-violet-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-violet-200">
              {item.year}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
