import Link from "next/link";

import { profile, socialLinks } from "@/lib/portfolio-data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-20 border-t border-cyan-300/20 bg-[#030813]/88 backdrop-blur-lg">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 md:grid-cols-[1.3fr_1fr_1fr] md:px-10">
        <div>
          <p className="text-sm font-semibold text-slate-100">{profile.name}</p>
          <p className="mt-2 text-sm text-slate-300">Cybersecurity Student / Ethical Hacking Enthusiast</p>
          <p className="mt-3 text-xs text-slate-400">Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">Navigation</p>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-300 transition-colors hover:text-cyan-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">Connect</p>
          <ul className="mt-3 space-y-2">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  className="text-sm text-slate-300 transition-colors hover:text-cyan-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
