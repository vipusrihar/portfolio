import type { TimelineItem } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Timeline({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <div>
      <h3 className="mono-label mb-6 text-xs uppercase tracking-widest text-text-secondary">
        {title}
      </h3>
      <ol className="trace-line ml-1.5 flex flex-col gap-8 border-l border-transparent pl-6">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} y={12}>
            <li className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-paper dark:bg-ink" />
              <p className="font-display text-base font-semibold text-text-primary">
                {item.title}
              </p>
              <p className="mono-label mt-1 text-xs text-signal">
                {item.org}
                {item.period ? ` · ${item.period}` : ""}
              </p>
              <ul className="mt-2 space-y-0.5">
                {item.details.map((d) => (
                  <li key={d} className="text-sm text-text-secondary">
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
