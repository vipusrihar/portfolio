import { experience } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Experience" title="Where I've Worked" />

      <div className="flex flex-col gap-6">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.08}>
            <div className="glow-border rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{job.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  {job.current && (
                    <span className="rounded-full bg-secondary/15 px-2.5 py-1 text-xs font-medium text-secondary">
                      Current
                    </span>
                  )}
                  <span className="mono-label text-xs text-text-muted">{job.period}</span>
                </div>
              </div>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="mono-label rounded-full border border-border px-2.5 py-1 text-[11px] text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
