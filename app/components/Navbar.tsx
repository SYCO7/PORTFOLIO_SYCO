"use client";

import Link from "next/link";

import { Shield } from "lucide-react";

import { navItems, profile } from "@/lib/portfolio-data";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-sm tracking-[0.14em] text-rose-300">
          <Shield className="h-4 w-4" />
          <span>{profile.name}</span>
        </Link>
        <ul className="hidden items-center gap-6 text-xs uppercase tracking-[0.14em] text-slate-300 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-rose-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
