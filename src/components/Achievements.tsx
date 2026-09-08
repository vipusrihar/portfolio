import { Award } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Achievements" title="Milestones" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.07}>
            <div className="glow-border h-full rounded-2xl border border-border bg-surface/60 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Award size={18} className="text-white" />
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {a.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
