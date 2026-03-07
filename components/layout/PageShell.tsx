import type { ReactNode } from "react";

import CyberBackdropClient from "@/components/CyberBackdropClient";
import SiteFooter from "@/components/footer/SiteFooter";
import SiteNavbar from "@/components/navbar/SiteNavbar";

type PageShellProps = {
  children: ReactNode;
  containerClassName?: string;
};

export default function PageShell({ children, containerClassName }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CyberBackdropClient />
      <div className="pointer-events-none fixed inset-0 z-0 animated-grid-bg opacity-[0.14]" />

      <SiteNavbar />

      <main className={`relative z-20 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 md:px-10 ${containerClassName ?? ""}`}>
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
