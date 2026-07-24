import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  className,
  innerClassName,
  children,
  tone = "white",
  size = "default",
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  tone?: "white" | "soft" | "deep" | "mint";
  size?: "default" | "narrow" | "wide" | "compact";
}) {
  const tones = {
    white: "bg-white text-ink",
    soft: "bg-canvas-soft text-ink",
    mint: "bg-brand-50 text-ink",
    deep: "bg-brand-950 text-brand-50",
  } as const;

  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden",
        size === "compact" ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-32",
        tones[tone],
        className,
      )}
    >
      <Container
        size={size === "narrow" ? "narrow" : size === "wide" ? "wide" : "default"}
        className={cn("relative z-10", innerClassName)}
      >
        {children}
      </Container>
    </section>
  );
}
