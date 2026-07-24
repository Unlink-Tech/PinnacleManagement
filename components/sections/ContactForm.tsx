"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent";

const fieldBase =
  "w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-soft/50 transition-all duration-300 hover:border-brand-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder submit — wire to a real endpoint when copy/CRM is confirmed.
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[26rem] flex-col items-center justify-center text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white">
              <Icon name="check" className="h-7 w-7" strokeWidth={2.2} />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              Message received
            </h3>
            <p className="mt-3 max-w-sm text-ink-soft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A member of
              our team will respond within one business day.
            </p>
            <Button
              className="mt-8"
              variant="secondary"
              icon={null}
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Field label="First name" htmlFor="firstName">
              <input
                id="firstName"
                name="firstName"
                required
                placeholder="Lorem"
                className={fieldBase}
              />
            </Field>
            <Field label="Last name" htmlFor="lastName">
              <input
                id="lastName"
                name="lastName"
                required
                placeholder="Ipsum"
                className={fieldBase}
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={fieldBase}
              />
            </Field>
            <Field label="Phone" htmlFor="phone" optional>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+65 0000 0000"
                className={fieldBase}
              />
            </Field>
            <Field label="Service of interest" htmlFor="service" full>
              <select id="service" name="service" className={cn(fieldBase, "appearance-none")}>
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
                <option value="other">Something else</option>
              </select>
            </Field>
            <Field label="How can we help?" htmlFor="message" full>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit…"
                className={cn(fieldBase, "resize-none")}
              />
            </Field>

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-line accent-brand-600"
                />
                <span>
                  I agree to the processing of my details in line with the{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-brand-700 underline underline-offset-4"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <div className="sm:col-span-2">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
  full,
  optional,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
  optional?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-2", full && "sm:col-span-2")}>
      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
      >
        {label}
        {optional && <span className="ml-2 normal-case tracking-normal text-ink-soft/60">optional</span>}
      </label>
      {children}
    </div>
  );
}
