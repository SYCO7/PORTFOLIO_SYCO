import type { Metadata } from "next";

import Link from "next/link";

import HomeHero from "@/components/home/HomeHero";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <PageShell containerClassName="space-y-12">
      <HomeHero />

      <section className="grid gap-4 md:grid-cols-2">
        <article className="section-shell rounded-2xl p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">About Snapshot</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-100">Focused on offensive security practice.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            I build practical cybersecurity skills through lab-based testing, reconnaissance workflows, and project-led
            learning designed for real-world penetration testing readiness.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-cyan-100 transition-colors hover:bg-cyan-400/20"
          >
            Learn More
          </Link>
        </article>

        <article className="section-shell rounded-2xl p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Featured Work</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-100">Project-driven cybersecurity growth.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Explore reconnaissance automation, vulnerability analysis, and research-focused builds created for security
            learning and pentest workflow development.
          </p>
          <Link
            href="/projects"
            className="mt-4 inline-flex rounded-lg border border-emerald-300/40 bg-emerald-400/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-emerald-100 transition-colors hover:bg-emerald-400/20"
          >
            Explore Projects
          </Link>
        </article>
      </section>
    </PageShell>
  );
}
