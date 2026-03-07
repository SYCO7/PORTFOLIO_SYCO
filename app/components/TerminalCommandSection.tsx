"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Activity, Shield, Terminal } from "lucide-react";

import { sectionReveal } from "@/animations/variants";

const terminalLines = [
  "nmap -sC -sV target.example --open",
  "gobuster dir -u https://target.example -w common.txt",
  "sqlmap -u 'https://target.example/item?id=1' --batch",
  "hydra -L users.txt -P passwords.txt ssh://10.10.10.10",
  "python reconpulse.py --domain target.example --report",
];

export default function TerminalCommandSection() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((previous) => (previous + 1) % terminalLines.length);
    }, 1900);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-2 text-cyan-300">
        <Terminal className="h-4 w-4" />
        <p className="text-xs uppercase tracking-[0.18em]">Live Command Feed</p>
      </div>

      <div className="section-shell scanline relative overflow-hidden rounded-2xl p-5 md:p-6">
        <div className="pointer-events-none absolute inset-0 animated-grid-bg opacity-35" />

        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-cyan-300/20 pb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-300">
            <Shield className="h-3.5 w-3.5 text-emerald-300" />
            Pentest Operator Terminal
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-200">
            <Activity className="h-3 w-3" />
            Monitoring
          </span>
        </div>

        <div className="relative z-10 mt-4 space-y-2 font-mono text-sm text-slate-200">
          {terminalLines.map((line, index) => {
            const isActive = index === lineIndex;
            const hasPlayed = index <= lineIndex;

            return (
              <motion.p
                key={line}
                initial={false}
                animate={{ opacity: hasPlayed ? 1 : 0.35, x: isActive ? 0 : -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`rounded-md px-2 py-1 ${isActive ? "bg-cyan-400/10 text-cyan-200" : "text-slate-400"}`}
              >
                <span className="mr-2 text-emerald-300">$</span>
                {line}
                {isActive ? <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-cyan-200 align-middle" /> : null}
              </motion.p>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
