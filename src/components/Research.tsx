import { research } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Research" title="Academic Work" />

      <Reveal>
        <div className="glow-border rounded-2xl border border-border bg-surface/60 p-6 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
              {research.title}
            </h3>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
              {research.status}
            </span>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="mono-label mb-2 text-xs uppercase tracking-widest text-text-muted">
                Research Problem
              </p>
              <p className="text-sm leading-relaxed text-text-secondary">{research.problem}</p>
            </div>

            <div>
              <p className="mono-label mb-2 text-xs uppercase tracking-widest text-text-muted">
                Objectives
              </p>
              <ul className="space-y-1.5">
                {research.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono-label mb-2 text-xs uppercase tracking-widest text-text-muted">
                Methodology
              </p>
              <p className="text-sm leading-relaxed text-text-secondary">
                {research.methodology}
              </p>
            </div>

            <div>
              <p className="mono-label mb-2 text-xs uppercase tracking-widest text-text-muted">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {research.techStack.map((t) => (
                  <span
                    key={t}
                    className="mono-label rounded-full bg-card px-2.5 py-1 text-[11px] text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
            <div>
              <p className="mono-label mb-1 text-xs uppercase tracking-widest text-text-muted">
                Current Progress
              </p>
              <p className="text-sm text-text-secondary">{research.progress}</p>
            </div>
            <div>
              <p className="mono-label mb-1 text-xs uppercase tracking-widest text-text-muted">
                Publication Status
              </p>
              <p className="text-sm text-text-secondary">{research.publicationStatus}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
