"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Shield, X } from "lucide-react";

import { profile } from "@/lib/portfolio-data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-cyan-300/20 bg-[#050914]/82 shadow-[0_10px_40px_rgba(0,0,0,0.48)] backdrop-blur-xl"
            : "border-cyan-300/10 bg-[#050914]/40 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="group inline-flex items-center gap-2 text-sm tracking-[0.14em] text-cyan-100">
            <Shield className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-medium">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-all duration-250 ${
                      active
                        ? "border border-cyan-300/50 bg-cyan-400/18 text-cyan-100 shadow-[0_0_28px_rgba(54,243,255,0.18)]"
                        : "border border-transparent text-slate-300 hover:border-cyan-300/35 hover:bg-cyan-400/8 hover:text-cyan-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            className="inline-flex items-center justify-center rounded-md border border-cyan-300/30 bg-[#060d1f]/85 p-2 text-slate-100 md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu overlay"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] bg-black/65 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-x-0 top-16 z-50 border-b border-cyan-300/30 bg-[#050b19]/95 px-6 py-4 backdrop-blur-xl md:hidden"
            >
              <ul className="grid gap-2">
                {navLinks.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-lg border px-3 py-2 text-xs uppercase tracking-[0.15em] transition-all ${
                          active
                            ? "border-cyan-300/45 bg-cyan-400/14 text-cyan-100"
                            : "border-cyan-300/20 bg-[#0a1327]/85 text-slate-300 hover:text-cyan-200"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
