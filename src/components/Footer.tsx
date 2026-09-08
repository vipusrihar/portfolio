import { navLinks, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MediumIcon, HackerrankIcon } from "./icons";

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  hackerrank: HackerrankIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="font-display text-lg font-semibold text-text-primary">
            {profile.name.split(" ")[0]}
            <span className="gradient-text">.</span>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs text-text-secondary transition-colors hover:text-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {profile.social.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-text-secondary transition-colors hover:text-secondary"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mono-label">Built with Next.js · React · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
