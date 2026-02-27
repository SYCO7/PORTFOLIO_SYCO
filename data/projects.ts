export type ProjectCategory =
  | "Red Team"
  | "Blue Team"
  | "AI Security"
  | "Web Pentest"
  | "Offensive Security";
export type ProjectStatus = "Prototype" | "Active" | "Research";

export type ProjectLabItem = {
  projectTitle: string;
  shortTagline: string;
  githubLink: string;
  screenshotImage: string;
  techStack: string[];
  categoryTag: ProjectCategory;
  statusBadge: ProjectStatus;
  typeTag?: string;
  languageTag?: string;
  keyFeatures?: string[];
  highlightBadge?: string;
  releaseLink?: string;
  releaseLabel?: string;
};

export const projectsLabData: ProjectLabItem[] = [
  {
    projectTitle: "ReconPulse v4 — Passive Domain Intelligence Framework",
    shortTagline:
      "Passive reconnaissance CLI framework for domain intelligence collection, correlation, and operator-ready reporting.",
    githubLink: "https://github.com/SYCO7/ReconPulse",
    screenshotImage: "/projects/reconpulse.svg",
    techStack: ["Python", "Typer", "Requests", "Rich", "JSON"],
    categoryTag: "Offensive Security",
    statusBadge: "Active",
    typeTag: "CLI Tool",
    languageTag: "Python",
    keyFeatures: [
      "Passive subdomain and DNS intelligence aggregation from multi-source feeds",
      "Enrichment pipeline for WHOIS, ASN, and service metadata correlation",
      "Operator-focused output modes for quick triage and reporting workflows",
    ],
    highlightBadge: "FLAGSHIP PROJECT",
    releaseLink: "https://github.com/SYCO7/ReconPulse/releases/tag/v4.0.0",
    releaseLabel: "View Release v4.0.0",
  },
  {
    projectTitle: "EchoGuard AI",
    shortTagline: "AI-assisted anomaly detection prototype for SOC-style workflows.",
    githubLink: "https://github.com/username/echoguard",
    screenshotImage: "/projects/echoguard.svg",
    techStack: ["Next.js", "TypeScript", "Python"],
    categoryTag: "AI Security",
    statusBadge: "Prototype",
  },
  {
    projectTitle: "ReconPulse",
    shortTagline: "Target-scope recon dashboard for ethical engagement planning.",
    githubLink: "https://github.com/username/reconpulse",
    screenshotImage: "/projects/reconpulse.svg",
    techStack: ["Node.js", "TypeScript", "SQLite"],
    categoryTag: "Red Team",
    statusBadge: "Active",
  },
  {
    projectTitle: "BlueLens SIEM Mini",
    shortTagline: "Detection rule sandbox with timeline-based event triage.",
    githubLink: "https://github.com/username/bluelens-siem-mini",
    screenshotImage: "/projects/bluelens.svg",
    techStack: ["React", "TypeScript", "PostgreSQL"],
    categoryTag: "Blue Team",
    statusBadge: "Research",
  },
  {
    projectTitle: "OWASP Trail Mapper",
    shortTagline: "Interactive OWASP practice tracker with remediation notes.",
    githubLink: "https://github.com/username/owasp-trail-mapper",
    screenshotImage: "/projects/owasp-trail.svg",
    techStack: ["Next.js", "Tailwind", "Zod"],
    categoryTag: "Web Pentest",
    statusBadge: "Active",
  },
  {
    projectTitle: "ThreatCanvas",
    shortTagline: "MITRE ATT&CK mapping utility for purple-team exercises.",
    githubLink: "https://github.com/username/threatcanvas",
    screenshotImage: "/projects/threatcanvas.svg",
    techStack: ["TypeScript", "D3", "Vite"],
    categoryTag: "Blue Team",
    statusBadge: "Prototype",
  },
  {
    projectTitle: "ShellSafe Lab",
    shortTagline: "Command injection testing playground for secure coding demos.",
    githubLink: "https://github.com/username/shellsafe-lab",
    screenshotImage: "/projects/shellsafe.svg",
    techStack: ["Node.js", "Express", "Docker"],
    categoryTag: "Web Pentest",
    statusBadge: "Research",
  },
];
