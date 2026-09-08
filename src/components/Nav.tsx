"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Nav() {
  const [activeId, setActiveId] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((r) => document.getElementById(r.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "glass-card border-b" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-semibold text-text-primary">
          {profile.name.split(" ")[0]}
          <span className="gradient-text">.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-primary/15 text-secondary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Contact Me
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="glass-card flex flex-col gap-1 border-t px-6 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2 text-sm text-text-secondary hover:bg-primary/10 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
