"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Binary, Bug, Network, Radar, ShieldCheck, TerminalSquare } from "lucide-react";

import { profile } from "@/lib/portfolio-data";

const TYPING_SPEED = 90;
const HOLD_TIME = 1300;

const quickSkills = ["Penetration Testing", "Web Security", "Recon Automation", "CTF Workflow"];
const toolIcons = [Network, ShieldCheck, Bug, Radar, Binary, TerminalSquare];
const photoParticles = [
  { left: "8%", top: "20%", size: 3, delay: 0.1, duration: 4.2 },
  { left: "20%", top: "72%", size: 2, delay: 0.8, duration: 4.8 },
  { left: "41%", top: "15%", size: 2, delay: 0.45, duration: 5.1 },
  { left: "63%", top: "74%", size: 3, delay: 0.2, duration: 4.6 },
  { left: "79%", top: "27%", size: 2, delay: 1.1, duration: 5.4 },
  { left: "91%", top: "60%", size: 3, delay: 0.6, duration: 4.1 },
];

export default function HomeHero() {
  const roles = useMemo(() => profile.heroRoles, []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, TYPING_SPEED);
    } else if (!deleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, HOLD_TIME);
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, TYPING_SPEED / 2);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      }, 260);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [displayText, deleting, roleIndex, roles]);

  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-6">
        <p className="inline-flex rounded-full border border-cyan-300/45 bg-cyan-400/12 px-4 py-1 text-xs uppercase tracking-[0.17em] text-cyan-200">
          Tanmoy Mondal | Cyber Portfolio
        </p>

        <h1 className="text-4xl font-semibold leading-tight text-slate-100 md:text-6xl">
          Building modern
          <span className="flicker-text block bg-linear-to-r from-cyan-300 via-emerald-300 to-blue-300 bg-clip-text text-transparent">
            cybersecurity operations.
          </span>
        </h1>

        <p className="max-w-xl text-base text-slate-300 md:text-lg">{profile.subtitle}</p>

        <div className="rounded-2xl border border-cyan-300/25 bg-[#061126]/75 px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400">Current Role</p>
          <p className="mt-2 h-7 font-mono text-lg text-cyan-200 md:text-xl">
            {displayText}
            <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-cyan-300 align-middle" />
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="neon-hover inline-flex items-center gap-2 rounded-xl border border-cyan-300/45 bg-cyan-400/15 px-5 py-3 text-sm font-medium text-cyan-100 hover:bg-cyan-400/25"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="neon-hover inline-flex items-center rounded-xl border border-emerald-300/35 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-100 hover:bg-emerald-400/20"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.58, delay: 0.12, ease: "easeOut" }}
        className="mx-auto w-full lg:justify-self-end"
        style={{ maxWidth: "350px" }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          whileHover={{ y: -12, scale: 1.02 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 -z-10">
            <div className="absolute inset-0 rounded-[2.25rem] bg-radial-[at_20%_22%] from-cyan-400/28 via-cyan-400/10 to-transparent blur-2xl" />
            <div className="absolute inset-0 rounded-[2.25rem] bg-radial-[at_80%_78%] from-emerald-300/18 via-emerald-300/8 to-transparent blur-2xl" />
            <div className="absolute inset-2 rounded-4xl bg-[linear-gradient(to_right,rgba(120,198,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,198,255,0.12)_1px,transparent_1px)] bg-size-[24px_24px] opacity-45" />

            {photoParticles.map((particle) => (
              <motion.span
                key={`${particle.left}-${particle.top}`}
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: particle.size,
                  height: particle.size,
                }}
                initial={{ opacity: 0.15, y: 0 }}
                animate={{ opacity: [0.2, 0.65, 0.2], y: [0, -10, 0] }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-cyan-200"
              />
            ))}
          </div>

          <motion.div
            aria-hidden
            animate={{
              opacity: [0.4, 0.82, 0.4],
              boxShadow: [
                "0 0 24px rgba(54,243,255,0.34), 0 0 46px rgba(52,211,153,0.16)",
                "0 0 38px rgba(54,243,255,0.54), 0 0 72px rgba(52,211,153,0.28)",
                "0 0 24px rgba(54,243,255,0.34), 0 0 46px rgba(52,211,153,0.16)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-1 rounded-4xl border border-cyan-300/45"
          />

          <div className="rounded-4xl bg-linear-to-b from-cyan-300/80 via-emerald-300/45 to-cyan-300/70 p-0.5">
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.9rem] border border-cyan-300/35 bg-[#040a17] shadow-[0_28px_65px_rgba(0,0,0,0.52)]">
              <Image
                src="/profile-photo.png"
                alt="Portrait of Tanmoy Mondal"
                fill
                priority
                sizes="(max-width: 768px) 82vw, 350px"
                className="object-cover object-[58%_18%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#020612]/52 via-transparent to-transparent" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28, duration: 0.4 }}
            className="absolute -right-3 top-4 rounded-xl border border-cyan-300/45 bg-[#061126]/85 px-3 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.45)] backdrop-blur-lg"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-200">Cybersecurity Student</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-emerald-300">Red Team Learner</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{ delay: 0.24, duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="mx-auto -mt-5 w-[86%] rounded-2xl border border-cyan-300/35 bg-[#071125]/72 p-4 text-center shadow-[0_18px_42px_rgba(0,0,0,0.44)] backdrop-blur-xl"
        >
          <p className="text-sm font-semibold text-slate-100">Tanmoy Mondal</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cyan-300">Cybersecurity Student</p>
        </motion.div>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.14 }}
        className="section-shell rounded-2xl p-5 lg:col-span-2"
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Quick Skills Preview</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {quickSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              I am {profile.name}, a BSc cybersecurity student focused on practical ethical hacking, recon automation,
              and real-world security workflows built from labs and CTF-style practice.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Tools Snapshot</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {toolIcons.map((Icon, index) => (
                <span
                  key={index}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-[#08122a]/80 text-cyan-200"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
