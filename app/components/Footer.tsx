import Link from "next/link";

import { profile, socialLinks } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-cyan-300/20 bg-[#040a17]/80 py-6 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 text-xs md:flex-row md:items-center md:px-10">
        <p className="text-slate-400">Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Email" ? undefined : "_blank"}
              rel={item.label === "Email" ? undefined : "noreferrer"}
              className="text-slate-300 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Link
          href="/#home"
          className="rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-cyan-200 transition-colors hover:bg-cyan-400/20"
        >
          Back to Top
        </Link>
      </div>
    </footer>
  );
}
