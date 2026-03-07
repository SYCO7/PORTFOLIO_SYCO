export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const profile = {
  name: "Tanmoy Mondal",
  title: "Cybersecurity Student / Ethical Hacking Enthusiast",
  subtitle: "Building practical offensive-security skills through labs, CTFs, and automation",
  linkedinUrl: "https://www.linkedin.com/in/tanmoy-mondal-11070334b/",
  githubUrl: "https://github.com/SYCO7",
  email: "tanmoymondaltanmoy94@gmail.com",
  location: "Kolkata, India",
  heroRoles: ["Cybersecurity Student", "Ethical Hacker", "Red Team Learner"],
  about:
    "I am a BSc Cybersecurity student focused on ethical hacking, practical penetration testing, and offensive-security learning. I enjoy breaking down attack surfaces, simulating real-world threats in controlled labs, and building scripts that make reconnaissance and validation faster. My long-term goal is to become a professional penetration tester who can deliver clear security impact for organizations.",
};

export const certifications: Array<{ title: string; issuer: string; year: string; status: string }> = [
  { title: "eJPT", issuer: "INE", year: "Planned", status: "In Progress" },
  { title: "CEH", issuer: "EC-Council", year: "Planned", status: "Roadmap" },
  { title: "OSCP", issuer: "OffSec", year: "Target", status: "Future Goal" },
  { title: "CompTIA Security+", issuer: "CompTIA", year: "Planned", status: "Roadmap" },
];

export const socialLinks = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const cybersecuritySkills = [
  "Penetration Testing",
  "Web Security",
  "Network Scanning",
  "Vulnerability Assessment",
  "Reconnaissance",
];

export const technicalSkills = ["Linux", "Python", "Bash", "Java", "Networking"];

export const skillBars = [
  { name: "Penetration Testing", value: 78 },
  { name: "Web Security", value: 75 },
  { name: "Network Scanning", value: 82 },
  { name: "Python Automation", value: 72 },
  { name: "CTF Problem Solving", value: 80 },
];

export const toolCards = [
  {
    name: "Nmap",
    description: "Host discovery, service enumeration, and focused network reconnaissance.",
  },
  {
    name: "Burp Suite",
    description: "Web request interception, repeater testing, and attack-surface validation.",
  },
  {
    name: "Metasploit",
    description: "Controlled exploitation workflow for payload testing in lab setups.",
  },
  {
    name: "Wireshark",
    description: "Packet-level traffic analysis for protocol and anomaly investigation.",
  },
  {
    name: "SQLmap",
    description: "Automated SQL injection testing and database fingerprinting support.",
  },
  {
    name: "Gobuster",
    description: "Directory, DNS, and virtual host brute forcing during recon phases.",
  },
  {
    name: "Nikto",
    description: "Quick web server misconfiguration and vulnerability checks.",
  },
  {
    name: "Hydra",
    description: "Credential attack simulation in authorized challenge environments.",
  },
  {
    name: "Kali Linux",
    description: "Primary offensive-security environment for labs and scripting.",
  },
];

export const featuredProjects = [
  {
    title: "SYCAX Cyber Attack Explorer",
    description:
      "A cybersecurity SaaS concept to visualize attacker paths, monitor suspicious chains, and map defensive response ideas.",
    image: "/projects/threatcanvas.svg",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Security Analytics"],
    github: "https://github.com/SYCO7",
    demo: "#",
  },
  {
    title: "Recon Automation Tool",
    description:
      "Automation toolkit for target reconnaissance that combines endpoint discovery, metadata enrichment, and report-ready outputs.",
    image: "/projects/reconpulse.svg",
    technologies: ["Python", "Bash", "Nmap", "JSON Pipelines"],
    github: "https://github.com/SYCO7/ReconPulse",
    demo: "#",
  },
  {
    title: "Web Vulnerability Scanner",
    description:
      "A modular scanner prototype for baseline web checks and initial vulnerability triage in controlled environments.",
    image: "/projects/owasp-trail.svg",
    technologies: ["Python", "OWASP Concepts", "CLI", "Automation"],
    github: "https://github.com/SYCO7",
    demo: "#",
  },
  {
    title: "Security Research Projects",
    description:
      "A growing repository of security writeups, POCs, and experimentation notes from labs and CTF-style practice.",
    image: "/projects/bluelens.svg",
    technologies: ["Research", "CTF", "Reporting", "Threat Analysis"],
    github: "https://github.com/SYCO7",
    demo: "#",
  },
];

export const learningJourney = [
  {
    title: "Cybersecurity Degree",
    period: "Current",
    summary: "Pursuing BSc Cybersecurity with core focus on network security and offensive methodologies.",
  },
  {
    title: "Ethical Hacking Practice",
    period: "Ongoing",
    summary: "Hands-on exploitation and validation practice across web and system attack surfaces.",
  },
  {
    title: "Labs and CTF Learning",
    period: "Continuous",
    summary: "Skill development through TryHackMe/CTF style labs, privilege escalation, and recon challenges.",
  },
  {
    title: "Security Research",
    period: "In Progress",
    summary: "Documenting findings, testing hypotheses, and improving reporting quality for practical security impact.",
  },
];

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
