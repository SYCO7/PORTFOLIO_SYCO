import type { Metadata } from "next";

import AboutPageContent from "@/components/about/AboutPageContent";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About",
  description: "About Tanmoy Mondal, cybersecurity student and ethical hacking learner.",
};

export default function AboutPage() {
  return (
    <PageShell containerClassName="space-y-12">
      <AboutPageContent />
    </PageShell>
  );
}
