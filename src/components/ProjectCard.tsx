import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import type { Project } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";

const statusStyle: Record<string, string> = {
  Ongoing: "text-secondary bg-secondary/15",
  Completed: "text-emerald-400 bg-emerald-400/15",
  "Research Ongoing": "text-accent bg-accent/15",
  Rebuilding: "text-amber-400 bg-amber-400/15",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glow-border flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-card">
        <Image
          src={withBasePath(project.image)}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />

        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {project.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {project.summary}
        </p>

        <ul className="mt-4 grid gap-1.5">
          {project.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-text-secondary"
            >
              <CheckCircle2
                size={13}
                className="mt-0.5 shrink-0 text-secondary"
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-1 flex-wrap items-end gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="mono-label rounded-full bg-card px-2 py-1 text-[11px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {/* GitHub */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-text-primary transition-colors hover:text-secondary"
          >
            View on GitHub
            <ArrowUpRight size={13} />
          </a>

          {/* Live Demo */}
          {project.hostedUrl && (
            <a
              href={project.hostedUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-secondary transition-colors hover:text-text-primary"
            >
              <Globe2 size={14} />
              Live Demo
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}