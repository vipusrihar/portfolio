"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { routes, profile } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

const methodColor: Record<string, string> = {
  GET: "text-signal",
  POST: "text-violet",
};

export function Nav() {
  const [activeId, setActiveId] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = routes
      .map((r) => document.getElementById(r.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md dark:bg-ink/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="mono-label text-sm font-medium text-text-primary"
        >
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-signal">.</span>dev
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {routes.map((route) => {
            const active = activeId === route.id;
            return (
              <a
                key={route.id}
                href={`#${route.id}`}
                className={`mono-label group flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition-colors ${
                  active
                    ? "bg-signal-soft text-signal"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span
                  className={`${methodColor[route.method]} ${
                    active ? "" : "opacity-60"
                  }`}
                >
                  {route.method}
                </span>
                <span>{route.path}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-text-primary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X size={16} strokeWidth={1.75} />
            ) : (
              <Menu size={16} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-hairline px-6 py-3 md:hidden">
          {routes.map((route) => (
            <a
              key={route.id}
              href={`#${route.id}`}
              onClick={() => setMenuOpen(false)}
              className="mono-label flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-text-secondary hover:bg-signal-soft hover:text-signal"
            >
              <span className={methodColor[route.method]}>{route.method}</span>
              <span>{route.path}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
