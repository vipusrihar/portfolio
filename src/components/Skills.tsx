import { skillGroups } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Skills" title="Toolbox" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="glow-border h-full rounded-2xl border border-border bg-surface/60 p-6">
              <p className="mono-label mb-4 text-xs uppercase tracking-widest text-text-muted">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-secondary hover:text-secondary"
                  >
                    {skill}
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
