"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Shield, X } from "lucide-react";

import { navItems, profile } from "@/lib/portfolio-data";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

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

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          className="inline-flex items-center justify-center rounded-md border border-border/70 bg-black/35 p-2 text-slate-200 transition-colors hover:text-rose-300 md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-border/70 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-3 text-xs uppercase tracking-[0.14em] text-slate-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block rounded-md border border-border/60 bg-black/35 px-3 py-2 transition-colors hover:text-rose-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
