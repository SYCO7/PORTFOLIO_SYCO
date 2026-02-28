export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Red Team Arsenal", href: "/projects-lab" },
  { label: "Profile", href: "/profile" },
];

export const profile = {
  name: "Tanmoy Mondal",
  title: "Offensive Security Engineer",
  subtitle: "Adversarial Security Research & Pentesting",
  linkedinUrl: "https://www.linkedin.com/in/tanmoy-mondal-11070334b/",
  about:
    "I focus on offensive security assessments across web applications and modern attack surfaces, with workflow depth in reconnaissance, exploitation, and reporting. My current training path emphasizes red-team methodology, adversary simulation research, and offensive tooling development.",
};

export const certifications: Array<{ title: string; issuer: string; year: string }> = [];

export const skillColumns = [
  {
    category: "Offensive Security",
    skills: ["Nmap", "Burp Suite", "OWASP Testing", "Basic Enumeration"],
  },
  {
    category: "Pentest Workflow",
    skills: ["Recon", "Vulnerability Validation", "Reporting", "CTF Practice"],
  },
  {
    category: "Engineering",
    skills: ["TypeScript", "Node.js", "Python", "Git"],
  },
];
