"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Surface card with a cursor-following spotlight and subtle lift.
 * Pointer effects are disabled on touch devices via CSS only.
 */
export function Card({
  children,
  className,
  spotlight = true,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 0, active: false });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        if (!spotlight || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
          active: true,
        });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, active: false }))}
      className={cn(
        "group relative isolate overflow-hidden rounded-3xl border transition-all duration-500",
        tone === "dark"
          ? "border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20"
          : "border-line bg-white hover:border-brand-200 hover:shadow-lift",
        "hover:-translate-y-1",
        className,
      )}
    >
      {spotlight && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, ${
              tone === "dark"
                ? "rgba(74,222,144,0.16)"
                : "rgba(34,197,111,0.10)"
            }, transparent 62%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
