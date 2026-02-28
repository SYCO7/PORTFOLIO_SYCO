export type ProjectCategory =
  | "Red Team"
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
    techStack: ["Python (Primary)", "Typer", "Requests", "JavaScript / TypeScript (Secondary)", "Rich"],
    categoryTag: "Offensive Security",
    statusBadge: "Active",
    typeTag: "CLI Tool",
    languageTag: "Python (Primary)",
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
    projectTitle: "OWASP Trail Mapper",
    shortTagline: "Web attack-surface mapping utility for structured offensive testing and remediation tracking.",
    githubLink: "https://github.com/username/owasp-trail-mapper",
    screenshotImage: "/projects/owasp-trail.svg",
    techStack: ["Python (Primary)", "JavaScript / TypeScript (Secondary)", "Next.js", "Zod"],
    categoryTag: "Red Team",
    statusBadge: "Active",
    typeTag: "Assessment Tool",
    languageTag: "JavaScript / TypeScript (Secondary)",
    keyFeatures: [
      "Engagement-oriented endpoint mapping with scoped test-note workflows",
      "Operator-friendly remediation trail support for post-assessment reporting",
      "Consistent structure for repeatable web penetration testing cycles",
    ],
  },
  {
    projectTitle: "ShellSafe Lab",
    shortTagline: "Controlled command-injection validation lab for offensive payload testing and exploit analysis.",
    githubLink: "https://github.com/username/shellsafe-lab",
    screenshotImage: "/projects/shellsafe.svg",
    techStack: ["Python (Primary)", "JavaScript / TypeScript (Secondary)", "Express", "Docker"],
    categoryTag: "Offensive Security",
    statusBadge: "Research",
    typeTag: "Lab Environment",
    languageTag: "JavaScript / TypeScript (Secondary)",
    keyFeatures: [
      "Isolated target surfaces for command injection payload experimentation",
      "Repeatable exploit scenarios for adversary simulation research",
      "Containerized local workflow for safe offensive test execution",
    ],
  },
];
