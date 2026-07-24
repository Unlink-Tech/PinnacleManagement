"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  vx: number; // current velocity
  vy: number;
  bvx: number; // base drift it relaxes back to
  bvy: number;
  r: number;
  z: number; // depth 0..1 — drives size, speed, parallax and opacity
  a: number;
};

/**
 * Canvas dot field. Particles drift slowly on their own; moving the cursor
 * pushes nearby dots along the direction of travel, and the whole field
 * parallaxes toward the pointer. Pauses when offscreen or the tab is hidden,
 * and renders a single static frame under `prefers-reduced-motion`.
 */
export function ParticleField({
  className,
  density = 0.00012,
  maxCount = 260,
  color = "22, 160, 88",
  interactive = true,
}: {
  className?: string;
  /** particles per px² of canvas area */
  density?: number;
  maxCount?: number;
  /** rgb triplet string */
  color?: string;
  interactive?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let particles: Particle[] = [];

    const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, seen: false };
    let parX = 0;
    let parY = 0;
    let targetX = 0;
    let targetY = 0;

    const spawn = (): Particle => {
      const z = 0.32 + Math.random() * 0.68;
      const bvx = (Math.random() - 0.5) * 0.16 * z + 0.04 * z;
      const bvy = (Math.random() - 0.5) * 0.16 * z - 0.03 * z;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: bvx,
        vy: bvy,
        bvx,
        bvy,
        r: 0.6 + z * 1.15,
        z,
        a: 0.16 + z * 0.34,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      if (w === 0 || h === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(
        Math.min(Math.max(w * h * density, 45), maxCount),
      );
      particles = Array.from({ length: count }, spawn);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // ease the field toward the pointer for depth
      parX += (targetX - parX) * 0.045;
      parY += (targetY - parY) * 0.045;

      // pointer velocity decays so the push is a gesture, not a constant force
      pointer.vx *= 0.88;
      pointer.vy *= 0.88;

      const R = 190;
      const R2 = R * R;

      for (const p of particles) {
        if (interactive && pointer.seen) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const falloff = 1 - Math.sqrt(d2) / R;
            const f = falloff * falloff * 0.075 * p.z;
            // push along the direction the cursor is travelling
            p.vx += pointer.vx * f;
            p.vy += pointer.vy * f;
          }
        }

        // relax back to the particle's own drift
        p.vx += (p.bvx - p.vx) * 0.035;
        p.vy += (p.bvy - p.vy) * 0.035;

        p.x += p.vx;
        p.y += p.vy;

        // wrap with a margin so dots never pop at the edges
        const m = 12;
        if (p.x < -m) p.x = w + m;
        else if (p.x > w + m) p.x = -m;
        if (p.y < -m) p.y = h + m;
        else if (p.y > h + m) p.y = -m;

        const px = p.x + parX * 30 * p.z;
        const py = p.y + parY * 20 * p.z;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${p.a})`;
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = () => {
      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (pointer.seen) {
        pointer.vx = x - pointer.x;
        pointer.vy = y - pointer.y;
      }
      pointer.x = x;
      pointer.y = y;
      pointer.seen = true;

      targetX = x / w - 0.5;
      targetY = y / h - 0.5;
    };

    const onPointerLeave = () => {
      pointer.seen = false;
      targetX = 0;
      targetY = 0;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    if (reduced) {
      draw(); // one static frame
    } else {
      start();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    if (interactive && !reduced) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
    }
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density, maxCount, color, interactive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
