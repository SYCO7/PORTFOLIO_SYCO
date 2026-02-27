import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import type { ProjectLabItem, ProjectStatus } from "@/data/projects";

type ProjectCardProps = ProjectLabItem;

const threatByStatus: Record<ProjectStatus, { level: string; width: number; tone: string }> = {
  Prototype: { level: "Elevated", width: 42, tone: "bg-rose-400/85" },
  Active: { level: "Moderate", width: 62, tone: "bg-cyan-400/85" },
  Research: { level: "Critical", width: 78, tone: "bg-amber-400/85" },
};

export default function ProjectCard({
  projectTitle,
  shortTagline,
  githubLink,
  screenshotImage,
  techStack,
  categoryTag,
  statusBadge,
  typeTag,
  languageTag,
  keyFeatures,
  highlightBadge,
  releaseLink,
  releaseLabel,
}: ProjectCardProps) {
  const threat = threatByStatus[statusBadge];
  const isFlagship = highlightBadge === "FLAGSHIP PROJECT";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-black/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] ${
        isFlagship
          ? "border-rose-500/70 shadow-[0_0_0_1px_rgba(244,63,94,0.25)] hover:border-rose-400/90"
          : "border-border/70 hover:border-cyan-400/45"
      }`}
    >
      <div
        className={`pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -translate-x-full bg-linear-to-r from-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[430%] group-hover:opacity-100 ${
          isFlagship ? "via-rose-300/25 to-transparent" : "via-cyan-300/20 to-transparent"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className={`absolute -inset-14 blur-2xl ${isFlagship ? "bg-rose-500/12" : "bg-cyan-400/10"}`} />
      </div>

      <div className="relative space-y-4">
        <div className="overflow-hidden rounded-xl border border-border/70 bg-black/60">
          <Image
            src={screenshotImage}
            alt={`${projectTitle} screenshot`}
            width={640}
            height={360}
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {highlightBadge ? (
          <span className="inline-flex rounded-full border border-rose-400/60 bg-rose-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-200">
            {highlightBadge}
          </span>
        ) : null}

        <div className="flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] ${
              isFlagship
                ? "border border-rose-400/50 bg-rose-500/12 text-rose-200"
                : "border border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
            }`}
          >
            {categoryTag}
          </span>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-border/70 bg-black/45 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">
              Repo Activity: Sync Pending
            </span>
            <span className="rounded-full border border-rose-400/35 bg-rose-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-rose-300">
              {statusBadge}
            </span>
          </div>
        </div>

        {typeTag || languageTag ? (
          <div className="flex flex-wrap gap-2">
            {typeTag ? (
              <span className="rounded-md border border-border/70 bg-black/45 px-2 py-1 text-[11px] text-slate-200">Type: {typeTag}</span>
            ) : null}
            {languageTag ? (
              <span className="rounded-md border border-border/70 bg-black/45 px-2 py-1 text-[11px] text-slate-200">
                Language: {languageTag}
              </span>
            ) : null}
          </div>
        ) : null}

        <div>
          <h3 className="text-lg font-semibold text-slate-100">{projectTitle}</h3>
          <div className="mt-2 rounded-lg border border-border/70 bg-black/50 px-3 py-2 font-mono text-xs leading-5 text-slate-300">
            analyst@lab:~$ {shortTagline}
          </div>
        </div>

        {keyFeatures?.length ? (
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Key Features</p>
            <ul className="space-y-1 pl-4 text-xs text-slate-300">
              {keyFeatures.map((feature) => (
                <li key={feature} className="list-disc">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-400">
            <span>Threat Level</span>
            <span className="text-slate-300">{threat.level}</span>
          </div>
          <div className="h-2 rounded-full border border-border/70 bg-black/55 p-0.5">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: `${threat.width}%` }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`h-full rounded-full ${threat.tone}`}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/70 bg-black/45 px-2 py-1 text-[11px] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex rounded-lg border bg-black/45 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-100 transition-colors ${
              isFlagship ? "border-rose-400/60 hover:text-rose-200" : "border-border/80 hover:border-cyan-400/45 hover:text-cyan-300"
            }`}
          >
            View GitHub Repo
          </Link>

          {releaseLink && releaseLabel ? (
            <Link
              href={releaseLink}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.16em] text-rose-300 underline decoration-rose-400/60 underline-offset-4 transition-colors hover:text-rose-200"
            >
              {releaseLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
