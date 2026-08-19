"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
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

    if (!name) {
      setStatus({ state: "error", message: "400 — Name is required." });
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus({ state: "error", message: "400 — Enter a valid email address." });
      return;
    }

    if (subject.length < 3) {
      setStatus({ state: "error", message: "400 — Subject needs at least 3 characters." });
      return;
    }

    if (message.length < 10) {
      setStatus({ state: "error", message: "400 — Message needs at least 10 characters." });
      return;
    }

    setStatus({ state: "sending" });

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          state: "error",
          message: `${response.status} — ${result.message ?? "Something went wrong."}`,
        });
        return;
      }

      setStatus({
        state: "success",
        message: "202 Accepted — message sent. I'll reply soon.",
      });

      form.reset();
    } catch {
      setStatus({
        state: "error",
        message: "503 — Couldn't reach the server. Try again shortly.",
      });
    }
  }

  const sending = status.state === "sending";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader routeId="contact" title="Get in Touch" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <p className="text-base leading-relaxed text-text-secondary">
            Have a project, a role, or an idea worth building? The form sends straight
            to my inbox — or reach me directly at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-signal underline decoration-signal/40 underline-offset-4"
            >
              {profile.email}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-3">
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
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 dark:bg-paper dark:text-ink"
              >
                {sending ? (
                  <>
                    Sending <Loader2 size={15} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send <Send size={15} strokeWidth={2} />
                  </>
                )}
              </button>

              {status.state !== "idle" && status.state !== "sending" && (
                <p
                  role="status"
                  className={`mono-label text-xs ${status.state === "success" ? "text-signal" : "text-amber"
                    }`}
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
    "w-full rounded-xl border border-hairline bg-transparent px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-colors focus:border-signal";

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
