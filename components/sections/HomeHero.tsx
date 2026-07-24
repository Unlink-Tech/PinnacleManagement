"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ParticleBackdrop } from "@/components/ui/Decor";
import { services } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const headline = ["Clarity", "at every", "level."];

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-white pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44"
    >
      <ParticleBackdrop />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <motion.div style={{ y, opacity: fade }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <Eyebrow>Corporate services, simplified</Eyebrow>
            </motion.div>

            <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.16] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              {headline.map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className={i === 2 ? "gradient-text inline-block" : "inline-block"}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, delay: 0.1 + i * 0.1, ease }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button href="/contact" size="lg">
                Book a Consultation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                icon="arrowUpRight"
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-soft"
            >
              {["No lock-in contracts", "Senior-led teams", "Fixed-fee clarity"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-square">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-brand-100" />
              <div className="absolute inset-[12%] rounded-full border border-brand-100" />
              <div className="absolute inset-[24%] rounded-full border border-brand-200/70" />
              <motion.div
                className="absolute inset-[24%] rounded-full"
                animate={reduced ? {} : { rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(34,197,111,0.15)]" />
              </motion.div>

              {/* Core panel */}
              <div className="absolute inset-[30%] flex flex-col items-center justify-center rounded-[2rem] border border-line bg-white/90 p-6 text-center shadow-lift backdrop-blur">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-600">
                  Pinnacle
                </span>
                <span className="mt-2 text-3xl font-semibold tracking-tight text-ink">
                  100<span className="text-brand-500">%</span>
                </span>
                <span className="mt-1 text-xs text-ink-soft">
                  senior-led
                </span>
              </div>

              {/* Floating service chips */}
              {services.slice(0, 4).map((s, i) => {
                const spots = [
                  "left-0 top-[14%]",
                  "right-0 top-[28%]",
                  "left-[4%] bottom-[20%]",
                  "right-[6%] bottom-[8%]",
                ];
                return (
                  <motion.div
                    key={s.slug}
                    className={`absolute ${spots[i]} flex items-center gap-2.5 rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-soft`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.12, ease }}
                  >
                    <motion.span
                      animate={reduced ? {} : { y: [0, -6, 0] }}
                      transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-2.5"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <Icon name={s.icon} className="h-4 w-4" />
                      </span>
                      <span className="whitespace-nowrap text-xs font-semibold text-ink">
                        {s.title}
                      </span>
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
