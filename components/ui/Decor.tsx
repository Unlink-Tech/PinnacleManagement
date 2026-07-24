import { cn } from "@/lib/utils";
import { ParticleField } from "./ParticleField";

/** Soft animated brand blobs used as section backdrops. */
export function Blobs({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <div
        className={cn(
          "absolute -left-24 top-[-6rem] h-[26rem] w-[26rem] rounded-full blur-3xl [animation:var(--animate-blob)]",
          tone === "dark" ? "bg-brand-500/20" : "bg-brand-200/50",
        )}
      />
      <div
        className={cn(
          "absolute -right-32 bottom-[-8rem] h-[30rem] w-[30rem] rounded-full blur-3xl [animation:var(--animate-blob)] [animation-delay:-6s]",
          tone === "dark" ? "bg-brand-400/15" : "bg-brand-100/70",
        )}
      />
    </div>
  );
}

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-70",
        className,
      )}
    />
  );
}

/**
 * Hero backdrop: a soft brand wash with a cursor-reactive dot field on top.
 * Dots drift on their own and get pushed along the cursor's direction of travel.
 */
export function ParticleBackdrop({
  className,
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(115%_80%_at_82%_-12%,var(--color-brand-50),transparent_60%)]" />
      <div className="absolute -left-[14%] bottom-[-30%] h-[32rem] w-[32rem] rounded-full bg-brand-100/45 blur-[110px] [animation:var(--animate-blob)]" />
      <div className="absolute right-[6%] top-[-14%] h-[26rem] w-[26rem] rounded-full bg-brand-100/55 blur-[100px] [animation:var(--animate-blob)] [animation-delay:-7s]" />

      <ParticleField interactive={interactive} />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
