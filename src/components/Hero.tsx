"use client";

import Image from "next/image";
import { Download, ArrowRight, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { useTypewriterLoop } from "@/lib/useTypewriterLoop";
import { withBasePath } from "@/lib/basePath";
import { Reveal } from "./Reveal";
import { StatCounter } from "./StatCounter";
import { GithubIcon, LinkedinIcon, MediumIcon, HackerrankIcon } from "./icons";

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  hackerrank: HackerrankIcon,
};

export function Hero() {
  const role = useTypewriterLoop(profile.roles);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col-reverse items-center gap-14 px-6 py-16 md:flex-row md:items-center">
        <div className="w-full md:w-3/5">
          <Reveal>
            <p className="mono-label mb-4 text-sm text-secondary">Hi, I&apos;m</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.12} className="mt-4 h-8">
            <p className="mono-label text-lg text-secondary sm:text-xl">
              {role}
              <span aria-hidden className="animate-pulse text-primary">
                |
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-6">
            <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {profile.shortIntro}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={withBasePath(profile.resumeUrl)}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Download Resume <Download size={15} />
            </a>
            <a
              href="#projects"
              className="glow-border inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary"
            >
              View Projects <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="glow-border inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary"
            >
              Contact Me <Mail size={15} />
            </a>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex items-center gap-3">
            {profile.social.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glow-border flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </Reveal>

          <Reveal delay={0.36} className="mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="w-48 shrink-0 md:w-72">
          <div className="glow-border relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface">
            <Image
              src={withBasePath(profile.avatarUrl)}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="288px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
