import { routes, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono-label text-xs text-text-secondary">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {routes.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="mono-label text-xs text-text-secondary transition-colors hover:text-signal"
            >
              {r.path}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
