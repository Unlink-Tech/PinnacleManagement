import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function StatsBand({
  stats,
  tone = "light",
  className,
}: {
  stats: { value: string; suffix?: string; label: string }[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <RevealGroup
      className={cn(
        "grid gap-px overflow-hidden rounded-3xl border",
        tone === "dark" ? "border-white/10 bg-white/10" : "border-line bg-line",
        stats.length === 3
          ? "sm:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((s) => (
        <RevealItem
          key={s.label}
          className={cn(
            "group px-6 py-9 text-center transition-colors duration-500 sm:px-8 sm:py-11",
            tone === "dark"
              ? "bg-brand-950 hover:bg-brand-900"
              : "bg-white hover:bg-brand-50",
          )}
        >
          <div
            className={cn(
              "text-4xl font-semibold tracking-tight sm:text-5xl",
              tone === "dark" ? "text-white" : "text-brand-800",
            )}
          >
            <Counter value={s.value} suffix={s.suffix ?? ""} />
          </div>
          <div
            className={cn(
              "mt-3 text-xs font-semibold uppercase tracking-[0.16em]",
              tone === "dark" ? "text-brand-200/70" : "text-ink-soft",
            )}
          >
            {s.label}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
