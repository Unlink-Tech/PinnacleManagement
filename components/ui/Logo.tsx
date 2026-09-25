import Link from "next/link";
import { cn } from "@/lib/utils";

/** Dummy brand mark — stacked peaks forming a "pinnacle". */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 shadow-soft transition-transform duration-500 group-hover:rotate-6",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3.5 20 19H4z" fill="white" fillOpacity="0.95" />
        <path d="M12 10.5 16.5 19h-9z" fill="#0f3d2e" fillOpacity="0.85" />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      aria-label="Pinnacle Millgrove, home"
      className={cn("group flex items-center gap-3", className)}
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.05rem] font-semibold tracking-tight",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          Pinnacle
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
            tone === "dark" ? "text-brand-300" : "text-brand-600",
          )}
        >
          Millgrove
        </span>
      </span>
    </Link>
  );
}
