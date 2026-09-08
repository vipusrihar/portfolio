import { education, profile } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Timeline } from "./Timeline";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Education" title="Academic Background" />
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-text-secondary">
        Current GPA <span className="font-display font-bold text-secondary">{profile.gpa}</span>
      </div>
      <Timeline items={education} />
    </section>
  );
}
