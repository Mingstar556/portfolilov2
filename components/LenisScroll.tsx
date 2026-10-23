"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.1,
      touchInertiaExponent: 1.8,
      lerp: 0.1,
      touchMultiplier: 1.4,
      wheelMultiplier: 0.6,
      infinite: false,
    });

    // Link scroll-driven animations (Framer Motion scroll triggers, GSAP, etc.)
    const onScroll = (e: { scroll: number; limit: number; velocity: number }) => {
      document.documentElement.style.setProperty(
        "--scroll",
        String(e.scroll)
      );
    };
    lenis.on("scroll", onScroll);

    const update = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(update);
    };
    rafRef.current = requestAnimationFrame(update);

    // Expose for programmatic scrolling
    (window as any).__lenis = lenis;

    // Keyboard / mouse wheel still work; Lenis intercepts wheel/touch
    const onWheel = (e: WheelEvent) => {
      // Let Lenis handle it; nothing to do here
    };
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      window.removeEventListener("wheel", onWheel);
      delete (window as any).__lenis;
    };
  }, []);

  return null;
}