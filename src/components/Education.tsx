import { education, certificates } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Timeline } from "./Timeline";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader routeId="education" title="Education & Certificates" />
      <div className="grid gap-16 md:grid-cols-2">
        <Timeline title="Education" items={education} />
        <Timeline title="Certificates" items={certificates} />
      </div>
    </section>
  );
}
