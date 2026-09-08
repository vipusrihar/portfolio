import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./icons";

// These use github-readme-stats.vercel.app, a public open-source service
// that renders live SVG cards server-side — no GitHub token needed on our
// end, and it works fine from a static export since it's just an <img>.
const statsUrl = `https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&theme=dark&bg_color=0f172a&title_color=06b6d4&icon_color=8b5cf6&text_color=94a3b8&border_color=ffffff20&hide_border=false`;
const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&theme=dark&bg_color=0f172a&title_color=06b6d4&text_color=94a3b8&border_color=ffffff20&hide_border=false`;

export function GithubDashboard() {
  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="GitHub" title="Open Source Activity" />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glow-border overflow-hidden rounded-2xl border border-border bg-surface/60 p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={statsUrl} alt="GitHub stats" className="w-full" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <div className="glow-border overflow-hidden rounded-2xl border border-border bg-surface/60 p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={languagesUrl} alt="Most used languages" className="w-full" loading="lazy" />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.14} className="mt-6">
        <a
          href={`https://github.com/${profile.githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="glow-border inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary"
        >
          <GithubIcon size={15} /> View full profile <ArrowUpRight size={13} />
        </a>
      </Reveal>
    </section>
  );
}
