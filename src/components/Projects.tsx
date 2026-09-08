import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Projects" title="Featured Work" />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
