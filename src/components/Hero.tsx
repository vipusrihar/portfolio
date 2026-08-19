"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { useTypewriter } from "@/lib/useTypewriter";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon, MediumIcon, HackerrankIcon } from "./icons";
import { withBasePath } from "@/lib/basePath";

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  hackerrank: HackerrankIcon,
};

export function Hero() {
  const name = useTypewriter(profile.name, 70, 500);

  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 px-6 pb-24 pt-16 md:flex-row md:items-center md:pt-24"
    >
      <div className="w-full md:w-3/5">
        <Reveal>
          <p className="mono-label mb-4 flex items-center gap-2 text-xs text-text-secondary">
            <span className="text-signal">GET</span> /home
            <span className="status-dot ml-1 inline-block h-1.5 w-1.5 rounded-full bg-signal" />
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="w-full rounded-2xl border border-hairline bg-paper-raised/60 p-6 shadow-[0_1px_0_0_var(--hairline)] dark:bg-ink-raised/60 sm:p-8">
            <p className="mono-label mb-4 text-xs text-text-secondary">
              200 OK · application/json
            </p>
            <pre className="mono-label overflow-x-auto text-[13px] leading-relaxed text-text-secondary sm:text-sm">
              <code>
                {"{\n"}
                {"  "}
                <span className="text-violet">&quot;name&quot;</span>
                {": "}
                <span className="text-signal">
                  &quot;{name}
                  <span aria-hidden className="animate-pulse">
                    |
                  </span>
                  &quot;
                </span>
                {",\n  "}
                <span className="text-violet">&quot;role&quot;</span>
                {": "}
                <span className="text-text-primary">&quot;{profile.role}&quot;</span>
                {",\n  "}
                <span className="text-violet">&quot;affiliation&quot;</span>
                {": "}
                <span className="text-text-primary">&quot;{profile.affiliation}&quot;</span>
                {",\n  "}
                <span className="text-violet">&quot;status&quot;</span>
                {": "}
                <span className="text-amber">&quot;open to collaborate&quot;</span>
                {"\n}"}
              </code>
            </pre>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-8">
          <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={withBasePath(profile.resumeUrl)}
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-paper dark:text-ink"
          >
            Download CV <Download size={15} strokeWidth={2} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-text-primary transition-transform hover:-translate-y-0.5 hover:border-signal hover:text-signal"
          >
            Get in touch <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex items-center gap-3">
          {profile.social
            .filter((s) => socialIcons[s.icon])
            .map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-text-secondary transition-colors hover:border-signal hover:text-signal"
                >
                  <Icon size={16} />
                </a>
              );
            })}
        </Reveal>
      </div>

      <Reveal delay={0.1} className="w-48 shrink-0 md:w-64">
        <div className="relative aspect-square overflow-hidden rounded-full border border-hairline bg-paper-raised dark:bg-ink-raised">
          <Image
            src={withBasePath(profile.avatarUrl)}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="256px"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>
    </section>
  );
}
