import { aboutCards, aboutTimeline } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="About" title="Beyond the Code" />

      <div className="grid gap-5 sm:grid-cols-2">
        {aboutCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.07}>
            <div className="glow-border h-full rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-lg font-semibold text-text-primary">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <p className="mono-label mb-6 text-xs uppercase tracking-widest text-text-muted">
          Timeline
        </p>
        <div className="grid gap-6 sm:grid-cols-4">
          {aboutTimeline.map((milestone, i) => (
            <Reveal key={milestone.year} delay={i * 0.08}>
              <div className="relative border-l-2 border-primary/40 pl-5">
                <span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <p className="font-display text-lg font-bold text-secondary">{milestone.year}</p>
                <p className="mt-1 text-sm text-text-secondary">{milestone.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
