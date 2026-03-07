import type { Metadata } from "next";

import PageShell from "@/components/layout/PageShell";
import ProjectGalleryCard from "@/components/projectcard/ProjectGalleryCard";
import { featuredProjects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Cybersecurity projects by Tanmoy Mondal including recon tools and security research builds.",
};

export default function ProjectsPage() {
  return (
    <PageShell containerClassName="space-y-10">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Projects</p>
        <h1 className="text-4xl font-semibold text-slate-100 md:text-5xl">Security Engineering Portfolio</h1>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          Selected cybersecurity projects focused on offensive security workflows, automation, and security research.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectGalleryCard
            key={project.title}
            index={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tools={project.technologies}
            github={project.github}
            demo={project.demo === "#" ? project.github : project.demo}
          />
        ))}
      </section>
    </PageShell>
  );
}
