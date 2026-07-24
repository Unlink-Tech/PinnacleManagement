"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) =>
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [paused, go]);

  const active = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-soft sm:p-14">
        <Icon
          name="quote"
          className="h-12 w-12 text-brand-100 sm:h-16 sm:w-16"
        />

        <div className="relative mt-6 min-h-[13rem] sm:min-h-[11rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-balance text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl">
                “{active.quote}”
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-sm font-semibold text-white">
                  {active.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {active.name}
                  </span>
                  <span className="block text-sm text-ink-soft">
                    {active.role}
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6 border-t border-line pt-6">
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-400",
                  i === index
                    ? "w-8 bg-brand-600"
                    : "w-2.5 bg-brand-200 hover:bg-brand-300",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <NavBtn label="Previous testimonial" onClick={() => go(-1)} flip />
            <NavBtn label="Next testimonial" onClick={() => go(1)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBtn({
  onClick,
  label,
  flip,
}: {
  onClick: () => void;
  label: string;
  flip?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
    >
      <Icon
        name="arrow"
        className={cn("h-4.5 w-4.5", flip && "rotate-180")}
        strokeWidth={2}
      />
    </button>
  );
}
