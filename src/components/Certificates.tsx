import { ExternalLink, BadgeCheck } from "lucide-react";
import { certificates } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Certificates" title="Credentials" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.credentialId} delay={i * 0.06}>
            <div className="glow-border flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6">
              <BadgeCheck size={22} className="mb-3 text-secondary" />
              <h3 className="font-display text-base font-semibold text-text-primary">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{cert.issuer}</p>
              <p className="mono-label mt-2 text-xs text-text-muted">
                ID: {cert.credentialId}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-secondary hover:text-secondary"
                >
                  Verify Credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
