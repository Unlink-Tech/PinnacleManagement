import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  const width =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-[88rem]"
        : "max-w-7xl";
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", width, className)}>
      {children}
    </div>
  );
}
