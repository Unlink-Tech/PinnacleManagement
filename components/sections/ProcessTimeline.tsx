"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

/** Static class strings so Tailwind can see them at build time. */
const colClass: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

export function ProcessTimeline({
  steps,
  className,
}: {
  steps: { step?: string; title: string; body: string }[];
  className?: string;
}) {
  const n = steps.length;
  // Rail spans centre-of-first-column to centre-of-last-column, so it never
  // trails off past the final step regardless of how many steps there are.
  const railInset = `${50 / n}%`;

  return (
    <div className={cn("relative", className)}>
      {/* Desktop rail */}
      <span
        aria-hidden
        className="absolute top-7 hidden h-px bg-line lg:block"
        style={{ left: railInset, right: railInset }}
      />
      <motion.span
        aria-hidden
        className="absolute top-7 hidden h-[2px] origin-left rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300 lg:block"
        style={{ left: railInset, right: railInset }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 1.15, ease, delay: 0.15 }}
      />

      {/* Mobile rail */}
      <span
        aria-hidden
        className="absolute bottom-6 left-7 top-6 w-px bg-line lg:hidden"
      />
      <motion.span
        aria-hidden
        className="absolute bottom-6 left-7 top-6 w-[2px] origin-top rounded-full bg-gradient-to-b from-brand-600 via-brand-500 to-brand-300 lg:hidden"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 1.15, ease, delay: 0.15 }}
      />

      <ol
        className={cn(
          "relative grid gap-y-10 lg:gap-x-6 lg:gap-y-0",
          colClass[n] ?? "lg:grid-cols-4",
        )}
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            className="group relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, ease, delay: 0.25 + i * 0.12 }}
          >
            {/* Badge */}
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center">
              {/* Halo */}
              <span className="absolute inset-0 scale-90 rounded-2xl bg-brand-400/25 opacity-0 blur-md transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-200 bg-white text-sm font-semibold text-brand-700 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-800 group-hover:text-white group-hover:shadow-lift">
                {s.step ?? String(i + 1).padStart(2, "0")}
              </span>
            </span>

            {/* Copy */}
            <div className="min-w-0 pb-1 lg:mt-8">
              <h3 className="text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-800">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft lg:mx-auto lg:max-w-[19rem]">
                {s.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
