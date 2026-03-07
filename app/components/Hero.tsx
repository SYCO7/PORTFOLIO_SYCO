"use client";

import { MouseEvent, useEffect, useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";

import { profile, socialLinks } from "@/lib/portfolio-data";

const TYPING_SPEED = 95;
const HOLD_TIME = 1400;

export default function Hero() {
  const roles = useMemo(() => profile.heroRoles, []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 110, damping: 14 });
  const springY = useSpring(mouseY, { stiffness: 110, damping: 14 });
  const rotateX = useTransform(springY, [-100, 100], [8, -8]);
  const rotateY = useTransform(springX, [-100, 100], [-8, 8]);

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

  function onMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="home"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#070d1f]/80 p-6 shadow-[0_0_0_1px_rgba(54,243,255,0.12),0_30px_80px_rgba(1,6,18,0.75)] md:p-10"
    >
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-35" />
      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-14 top-10 h-44 w-44 rounded-full bg-cyan-400/12 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 16, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-8 bottom-4 h-52 w-52 rounded-full bg-violet-400/12 blur-3xl"
      />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.17em] text-cyan-200"
          >
            Tanmoy Mondal | Cyber Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="text-balance text-4xl font-semibold leading-tight text-slate-100 md:text-6xl"
          >
            Building modern
            <span className="flicker-text block bg-linear-to-r from-cyan-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
              cybersecurity workflows.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-slate-300"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="rounded-2xl border border-cyan-300/25 bg-[#061126]/70 px-4 py-3"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Current Focus</p>
            <p className="mt-2 h-7 font-mono text-lg text-cyan-200 md:text-xl">
              {displayText}
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-cyan-300 align-middle" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/#projects"
              className="neon-hover inline-flex items-center gap-2 rounded-xl border border-cyan-300/50 bg-cyan-400/15 px-5 py-3 text-sm font-medium text-cyan-100 hover:bg-cyan-400/25"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="neon-hover inline-flex items-center rounded-xl border border-violet-300/40 bg-violet-400/10 px-5 py-3 text-sm font-medium text-violet-100 hover:bg-violet-400/20"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((item) => {
              const Icon = item.label === "GitHub" ? Github : item.label === "LinkedIn" ? Linkedin : Mail;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  aria-label={item.label}
                  className="neon-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-[#08112a]/90 text-slate-200 transition-all hover:-translate-y-0.5 hover:text-cyan-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-sm rounded-3xl border border-violet-300/30 bg-linear-to-b from-[#0b1632] to-[#080f20] p-4 shadow-[0_15px_65px_rgba(0,0,0,0.55)]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-black/20">
            <Image
              src="/profile-photo.svg"
              alt="Portrait of Tanmoy Mondal"
              width={520}
              height={620}
              priority
              className="h-auto w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#030711]/65 via-transparent to-transparent" />
          </div>
          <div className="mt-4 rounded-xl border border-cyan-300/25 bg-[#050c1f]/80 px-4 py-3">
            <p className="text-sm font-medium text-slate-100">{profile.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cyan-300">Cybersecurity Student</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
