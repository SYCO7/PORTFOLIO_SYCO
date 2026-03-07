"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/animations/variants";
import { cybersecuritySkills, skillBars, technicalSkills } from "@/lib/portfolio-data";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="section-shell rounded-2xl p-5">
      <h3 className="text-sm uppercase tracking-[0.16em] text-cyan-300">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
            className="rounded-xl border border-cyan-300/20 bg-[#06102a]/65 px-3 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-cyan-300/45 hover:text-cyan-100"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </article>
  );
}

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
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Skills</p>
        <h2 className="text-2xl font-semibold text-slate-100 md:text-4xl">Cybersecurity and technical capability map.</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SkillGroup title="Cybersecurity Skills" items={cybersecuritySkills} />
        <SkillGroup title="Technical Skills" items={technicalSkills} />
      </div>

      <article className="section-shell rounded-2xl p-5">
        <h3 className="text-sm uppercase tracking-[0.16em] text-emerald-300">Animated Skill Bars</h3>
        <div className="mt-4 space-y-4">
          {skillBars.map((item, index) => (
            <div key={item.name}>
              <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full border border-cyan-300/20 bg-[#050a16]">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-linear-to-r from-cyan-300 via-emerald-300 to-violet-300"
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </motion.section>
  );
}
