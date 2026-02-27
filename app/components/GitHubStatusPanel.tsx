"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { sectionReveal } from "@/animations/variants";

type GithubProfileTelemetry = {
  username: string;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  mostRecentRepo: string | null;
  primaryLanguages: string[];
};

function PanelSkeleton() {
  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="h-14 animate-pulse rounded-md border border-border/70 bg-black/45" />
      ))}
    </div>
  );
}

export default function GitHubStatusPanel() {
  const [data, setData] = useState<GithubProfileTelemetry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchTelemetry() {
      try {
        const response = await fetch("/api/github/profile", { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Failed to load GitHub telemetry");
        }

        const payload = (await response.json()) as GithubProfileTelemetry;

        if (isMounted) {
          setData(payload);
        }
      } catch (error) {
        console.error("GitHub status panel fetch failure", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchTelemetry();

    return () => {
      isMounted = false;
    };
  }, []);

  const primaryStack = useMemo(() => {
    if (!data || data.primaryLanguages.length === 0) {
      return "N/A";
    }

    return data.primaryLanguages[0];
  }, [data]);

  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="space-y-3 rounded-lg border border-cyan-400/35 bg-black/55 px-3 py-3 font-mono shadow-lg shadow-cyan-500/10"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">GitHub Status Panel</p>
        <a
          href="https://github.com/SYCO7"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-black/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-slate-200 transition-colors hover:text-cyan-300"
        >
          View Full GitHub Profile
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {loading || !data ? (
        <PanelSkeleton />
      ) : (
        <div className="grid gap-2 text-[11px] uppercase tracking-[0.14em] text-slate-300 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
            <span className="text-cyan-300">Repositories:</span> {data.totalRepos}
          </div>
          <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
            <span className="text-cyan-300">Total Stars:</span> {data.totalStars}
          </div>
          <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
            <span className="text-cyan-300">Total Forks:</span> {data.totalForks}
          </div>
          <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
            <span className="text-cyan-300">Most Active Repo:</span> {data.mostRecentRepo ?? "N/A"}
          </div>
          <div className="rounded-md border border-border/70 bg-black/45 px-3 py-2">
            <span className="text-cyan-300">Primary Stack:</span> {primaryStack}
          </div>
        </div>
      )}
    </motion.section>
  );
}
