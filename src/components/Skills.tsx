import { skillGroups } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader routeId="skills" title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-hairline p-6">
              <p className="mono-label mb-4 text-xs uppercase tracking-widest text-text-secondary">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="mono-label rounded-full border border-hairline px-3 py-1.5 text-xs text-text-primary transition-colors hover:border-signal hover:text-signal"
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
