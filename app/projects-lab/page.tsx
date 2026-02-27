"use client";

import { motion } from "framer-motion";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projectsLabData } from "@/data/projects";

export default function ProjectsLabPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_42%),radial-gradient(circle_at_bottom,rgba(251,113,133,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 [background-image:linear-gradient(to_right,rgba(251,113,133,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,113,133,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 md:px-10"
      >
        <section className="mb-10 space-y-4">
          <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">
            Red-Team Project Space
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">Hacker Projects Lab</h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Real-world cybersecurity builds and experiments.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectsLabData.map((project) => (
            <ProjectCard key={project.projectTitle} {...project} />
          ))}
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}
