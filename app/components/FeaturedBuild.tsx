"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { Bug, ExternalLink, Github, Radar } from "lucide-react";

import { sectionReveal } from "@/animations/variants";
import { featuredProjects } from "@/lib/portfolio-data";

type ShowcaseCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  index: number;
};

function ShowcaseCard({ title, image, description, technologies, github, demo, index }: ShowcaseCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end 10%"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [10, -14]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.045]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group section-shell neon-hover relative overflow-hidden rounded-2xl p-4"
    >
      <div className="pointer-events-none absolute right-4 top-4 opacity-35">
        {index % 2 === 0 ? <Radar className="h-4 w-4 text-cyan-300" /> : <Bug className="h-4 w-4 text-violet-300" />}
      </div>

      <div className="overflow-hidden rounded-xl border border-cyan-300/20 bg-black/30">
        <motion.div style={{ y: imageY, scale: imageScale }}>
          <Image src={image} alt={`${title} project preview`} width={760} height={460} className="h-44 w-full object-cover" />
        </motion.div>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-cyan-300/20 bg-[#08112a]/75 px-2 py-1 text-[11px] text-slate-200 transition-colors group-hover:border-cyan-300/35"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <motion.a
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.985 }}
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-3 py-2 text-xs uppercase tracking-[0.15em] text-cyan-100 transition-colors hover:bg-cyan-400/20"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </motion.a>
        <motion.a
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.985 }}
          href={demo}
          className="inline-flex items-center gap-2 rounded-lg border border-violet-300/35 bg-violet-400/10 px-3 py-2 text-xs uppercase tracking-[0.15em] text-violet-100 transition-colors hover:bg-violet-400/20"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Demo
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function FeaturedBuild() {
  return (
    <motion.section
      id="projects"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Projects</p>
        <h2 className="text-2xl font-semibold text-slate-100 md:text-4xl">Selected cybersecurity and research builds.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ShowcaseCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
