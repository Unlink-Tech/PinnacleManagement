"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * An image inside a fixed frame whose contents drift vertically as the frame
 * moves through the viewport, producing a subtle depth / parallax effect.
 * The inner image is over-sized so the drift never exposes an edge.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  /** Vertical travel in pixels across the full scroll range. */
  strength = 60,
  overlay = true,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  strength?: number;
  overlay?: boolean;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-strength, strength],
  );
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden bg-brand-50",
        className,
      )}
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>

      {overlay && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-brand-950/45 via-brand-900/5 to-transparent"
        />
      )}

      {children}
    </div>
  );
}
