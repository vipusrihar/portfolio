import { about } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader routeId="about" title={about.heading} />
      <div className="grid gap-6 md:grid-cols-2">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-base leading-relaxed text-text-secondary">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
