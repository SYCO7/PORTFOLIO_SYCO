"use client";

import { motion } from "framer-motion";
import { Binary, Boxes, Bug, Network, Radar, Search, Shield, TerminalSquare, Wifi } from "lucide-react";

import { sectionReveal } from "@/animations/variants";
import { toolCards } from "@/lib/portfolio-data";

const icons = [Network, Shield, Bug, Wifi, Binary, Search, Radar, TerminalSquare, Boxes];

export default function ToolsProficiencyGrid() {
  return (
    <motion.section
      id="tools"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Tools</p>
        <h2 className="text-2xl font-semibold text-slate-100 md:text-4xl">Operational toolkit for ethical hacking practice.</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {toolCards.map((tool, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group neon-hover relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#07112a]/70 p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-12 bg-linear-to-r from-cyan-400/15 via-emerald-300/15 to-violet-400/15 blur-2xl" />
              </div>
              <div className="relative z-10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-medium text-slate-100">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{tool.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
