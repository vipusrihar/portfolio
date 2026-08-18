import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const methodColor: Record<string, string> = {
  GET: "text-signal",
  POST: "text-violet",
  PUT: "text-amber",
};

const statusColor: Record<string, string> = {
  "200 OK": "text-signal bg-signal-soft",
  "201 Created": "text-violet bg-violet/10",
  Archived: "text-text-secondary bg-hairline/40",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline transition-colors hover:border-signal">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-hairline bg-paper-raised dark:bg-ink-raised">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mono-label mb-3 flex items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <span className={methodColor[project.method]}>{project.method}</span>
            <span className="text-text-secondary">{project.endpoint}</span>
          </span>
          <span className={`rounded-full px-2 py-0.5 ${statusColor[project.status]}`}>
            {project.status}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="mono-label rounded-full bg-hairline/40 px-2 py-1 text-[11px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="mono-label mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-text-primary transition-colors hover:text-signal"
        >
          Source code <ArrowUpRight size={13} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}
