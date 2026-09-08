"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, Mail, MapPin, Download } from "lucide-react";
import { emailjsConfig, profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon, MediumIcon, HackerrankIcon } from "./icons";

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  hackerrank: HackerrankIcon,
};

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) return setStatus({ state: "error", message: "Name is required." });
    if (!EMAIL_PATTERN.test(email))
      return setStatus({ state: "error", message: "Enter a valid email address." });
    if (subject.length < 3)
      return setStatus({ state: "error", message: "Subject needs at least 3 characters." });
    if (message.length < 10)
      return setStatus({ state: "error", message: "Message needs at least 10 characters." });

    setStatus({ state: "sending" });

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { from_name: name, from_email: email, subject, message },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus({ state: "success", message: "Message sent - I'll reply soon." });
      form.reset();
    } catch {
      setStatus({ state: "error", message: "Couldn't send. Please try again shortly." });
    }
  }

  const sending = status.state === "sending";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Contact" title="Let's Build Something" />

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glow-border h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-text-secondary">
              Have an internship, a role, or an idea worth building? I&apos;m always
              open to a conversation.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-secondary"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin size={16} /> {profile.location}
              </p>
              <a
                href={withBasePath(profile.resumeUrl)}
                download
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-secondary"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
              {profile.social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="glow-border flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <Field label="Message" name="message" as="textarea" placeholder="Your message" />

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {sending ? (
                  <>
                    Sending <Loader2 size={15} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>

              {status.state !== "idle" && status.state !== "sending" && (
                <p
                  role="status"
                  className={`text-xs ${status.state === "success" ? "text-secondary" : "text-amber-400"}`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  as?: "input" | "textarea";
}) {
  const sharedClasses =
    "w-full rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-secondary";

  return (
    <label className="flex flex-col gap-2 text-xs text-text-secondary">
      <span className="mono-label">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={sharedClasses} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={sharedClasses} />
      )}
    </label>
  );
}
