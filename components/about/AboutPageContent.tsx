"use client";

import { motion } from "framer-motion";
import { BookOpen, Crosshair, ShieldCheck, UserRound } from "lucide-react";

import { profile } from "@/lib/portfolio-data";

const aboutBlocks = [
  {
    title: "Who I Am",
    icon: UserRound,
    description:
      "My name is Tanmoy Mondal. I am a cybersecurity student who enjoys practical security learning, offensive workflows, and analytical thinking under pressure.",
  },
  {
    title: "Cybersecurity Interests",
    icon: ShieldCheck,
    description:
      "I focus on penetration testing, reconnaissance strategy, web security testing, and building repeatable automation for technical validation.",
  },
  {
    title: "Career Goals",
    icon: Crosshair,
    description:
      "My long-term goal is to become a professional penetration tester who can identify meaningful risks and communicate actionable remediation clearly.",
  },
  {
    title: "Learning Journey",
    icon: BookOpen,
    description:
      "Currently pursuing BSc in Cybersecurity and continuously improving through labs, CTFs, security writeups, and project-based experimentation.",
  },
];

const timeline = [
  "Learning Linux",
  "Studying networking",
  "Practicing ethical hacking labs",
  "Building cybersecurity projects",
];

export default function AboutPageContent() {
  return (
    <>
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">About</p>
        <h1 className="text-4xl font-semibold text-slate-100 md:text-5xl">Professional Profile</h1>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">{profile.about}</p>
        <p className="text-sm text-slate-300 md:text-base">
          <span className="font-medium text-cyan-200">Currently studying:</span> BSc in Cybersecurity
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {aboutBlocks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="section-shell rounded-2xl p-5"
            >
              <Icon className="h-5 w-5 text-cyan-300" />
              <h2 className="mt-3 text-xl font-semibold text-slate-100">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.article>
          );
        })}
      </section>

      <section className="section-shell rounded-2xl p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Timeline</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-100">Learning Trajectory</h2>

        <ol className="mt-6 space-y-5">
          {timeline.map((step, index) => (
            <li key={step} className="relative pl-10">
              <span className="absolute left-0 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-400/10 text-xs text-cyan-200">
                {index + 1}
              </span>
              {index < timeline.length - 1 ? (
                <span className="absolute left-3 top-7 h-[calc(100%+0.7rem)] w-px bg-linear-to-b from-cyan-300/45 to-transparent" />
              ) : null}
              <p className="rounded-lg border border-cyan-300/20 bg-[#08122a]/80 px-3 py-2 text-sm text-slate-200">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
