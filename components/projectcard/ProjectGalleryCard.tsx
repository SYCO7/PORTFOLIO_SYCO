"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type ProjectGalleryCardProps = {
  title: string;
  description: string;
  image: string;
  tools: string[];
  github: string;
  demo: string;
  index: number;
};

export default function ProjectGalleryCard({ title, description, image, tools, github, demo, index }: ProjectGalleryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group section-shell relative overflow-hidden rounded-2xl p-4"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-16 bg-linear-to-r from-cyan-400/15 via-emerald-300/15 to-blue-400/15 blur-2xl" />
      </div>

      <div className="relative overflow-hidden rounded-xl border border-cyan-300/25 bg-black/30">
        <Image
          src={image}
          alt={`${title} project preview`}
          width={780}
          height={460}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="relative mt-4">
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className="rounded-md border border-cyan-300/25 bg-[#081128]/80 px-2 py-1 text-xs text-slate-200">
            {tool}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-3">
        <Link
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-cyan-100 transition-colors hover:bg-cyan-400/20"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </Link>

        <Link
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/35 bg-emerald-400/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-emerald-100 transition-colors hover:bg-emerald-400/20"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Demo
        </Link>
      </div>
    </motion.article>
  );
}
