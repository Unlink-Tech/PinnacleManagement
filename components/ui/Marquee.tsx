import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("mask-fade-x relative overflow-hidden", className)}>
      <div className="flex w-max [animation:var(--animate-marquee)] hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className={cn(
              "flex shrink-0 items-center gap-3 px-8 text-lg font-semibold tracking-tight text-ink-soft/70 sm:text-xl",
              itemClassName,
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
