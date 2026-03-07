"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Target } from "lucide-react";

import { sectionReveal } from "@/animations/variants";
import { profile } from "@/lib/portfolio-data";

const aboutPoints = [
  {
    title: "Who I Am",
    description:
      "I am Tanmoy Mondal, a cybersecurity student deeply interested in offensive security and practical security engineering.",
    icon: ShieldCheck,
  },
  {
    title: "Current Studies",
    description: "I am currently pursuing a BSc in Cybersecurity while building hands-on skills through labs and CTF practice.",
    icon: GraduationCap,
  },
  {
    title: "Career Goal",
    description:
      "My mission is to become a professional penetration tester capable of delivering real-world security assessments.",
    icon: Target,
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">About Me</p>
        <h2 className="text-2xl font-semibold text-slate-100 md:text-4xl">A focused learner in offensive security.</h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">{profile.about}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {aboutPoints.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="section-shell rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35"
            >
              <Icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-lg font-medium text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
