import { routes } from "@/lib/data";

const methodColor: Record<string, string> = {
  GET: "text-signal",
  POST: "text-violet",
};

export function SectionHeader({
  routeId,
  title,
}: {
  routeId: (typeof routes)[number]["id"];
  title: string;
}) {
  const route = routes.find((r) => r.id === routeId)!;

  return (
    <div className="mb-12 flex items-end justify-between border-b border-hairline pb-5">
      <div>
        <p className="mono-label mb-2 flex items-center gap-2 text-xs text-text-secondary">
          <span className={methodColor[route.method]}>{route.method}</span>
          {route.path}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
      </div>
      <span className="status-dot mono-label hidden shrink-0 rounded-full bg-signal-soft px-2.5 py-1 text-[11px] text-signal sm:inline-block">
        200 OK
      </span>
    </div>
  );
}
