"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { values } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Scroll-snap carousel: 1 card on mobile, 2 on tablet, 3 on desktop.
 * Arrows page by one card; native swipe/scroll also works.
 */
export function ValuesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const step = first ? first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : 1;
    setActive(Math.round(el.scrollLeft / step));
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const go = (dir: number) =>
    scrollToIndex(Math.min(Math.max(active + dir, 0), values.length - 1));

  return (
    <div className="mt-14">
      <div
        ref={trackRef}
        onScroll={update}
        className="-my-4 flex snap-x snap-mandatory gap-6 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {values.map((v, i) => (
          <div
            key={v.title}
            className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <Card className="h-full p-8">
              <span className="text-4xl font-semibold tracking-tight text-brand-100 transition-colors duration-500 group-hover:text-brand-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {v.body}
              </p>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-2">
          {values.map((v, i) => (
            <button
              key={v.title}
              type="button"
              aria-label={`Show value ${i + 1}: ${v.title}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400",
                i === active
                  ? "w-8 bg-brand-600"
                  : "w-2.5 bg-brand-200 hover:bg-brand-300",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <NavBtn label="Previous value" onClick={() => go(-1)} disabled={atStart} flip />
          <NavBtn label="Next value" onClick={() => go(1)} disabled={atEnd} />
        </div>
      </div>
    </div>
  );
}

function NavBtn({
  onClick,
  label,
  disabled,
  flip,
}: {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  flip?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:border-brand-400 enabled:hover:bg-brand-50 enabled:hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <Icon
        name="arrow"
        className={cn("h-4.5 w-4.5", flip && "rotate-180")}
        strokeWidth={2}
      />
    </button>
  );
}
