"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/animations/variants";
import { profile } from "@/lib/portfolio-data";

export default function About() {
  return (
    <motion.section
      id="about"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="glass-panel rounded-2xl p-6"
    >
      <h2 className="text-xl font-semibold tracking-wide text-slate-100 md:text-2xl">Identity Module</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">{profile.about}</p>
    </motion.section>
  );
}
