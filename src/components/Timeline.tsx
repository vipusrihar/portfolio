import type { TimelineItem } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col gap-8 border-l-2 border-primary/30 pl-6">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06} y={12}>
          <li className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-secondary bg-background" />
            <p className="font-display text-base font-semibold text-text-primary">
              {item.title}
            </p>
            <p className="mono-label mt-1 text-xs text-secondary">
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
  );
}
