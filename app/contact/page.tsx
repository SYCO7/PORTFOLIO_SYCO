import type { Metadata } from "next";

import { Mail, MapPin } from "lucide-react";

import ContactForm from "@/components/contactform/ContactForm";
import PageShell from "@/components/layout/PageShell";
import { profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tanmoy Mondal for cybersecurity collaboration, internships, and projects.",
};

export default function ContactPage() {
  return (
    <PageShell containerClassName="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Contact</p>
        <h1 className="text-4xl font-semibold text-slate-100 md:text-5xl">Let&apos;s Connect</h1>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          For collaborations, internships, and security-focused opportunities, send a message using the form below.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />

        <aside className="section-shell space-y-4 rounded-2xl p-5">
          <div className="rounded-xl border border-cyan-300/20 bg-[#08122b]/75 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-200">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <div className="rounded-xl border border-cyan-300/20 bg-[#08122b]/75 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">Location</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-200">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
