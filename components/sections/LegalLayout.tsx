"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export type LegalSection = {
  id: string;
  heading: string;
  body: string[];
  list?: string[];
};

export function LegalLayout({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              On this page
            </p>
            <nav className="mt-5 flex flex-col gap-1 border-l border-line">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={cn(
                    "-ml-px border-l-2 py-2 pl-4 text-sm transition-all duration-300",
                    active === s.id
                      ? "border-brand-600 font-medium text-brand-800"
                      : "border-transparent text-ink-soft hover:border-brand-200 hover:text-brand-700",
                  )}
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Body */}
          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <Reveal key={s.id} as="section" className="scroll-mt-28 pb-12">
                <div id={s.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold text-brand-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                      {s.heading}
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 pl-0 sm:pl-10">
                    {s.body.map((p, j) => (
                      <p key={j} className="leading-relaxed text-ink-soft">
                        {p}
                      </p>
                    ))}
                    {s.list && (
                      <ul className="mt-5 grid gap-3">
                        {s.list.map((item) => (
                          <li key={item} className="flex gap-3 text-ink-soft">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                              <Icon
                                name="check"
                                className="h-3 w-3"
                                strokeWidth={3}
                              />
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
