"use client";

import { useEffect, useRef } from "react";

// Vanilla-JS cursor — no React render loop. One pointer + a trailing dot.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarse =
      window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    if (prefersReduced || isCoarse) return;

    const dotEl = dot.current!;
    const trailEl = trail.current!;
    let px = window.innerWidth / 2;
    let py = window.innerHeight / 2;
    let tx = px;
    let ty = py;

    let hovered: HTMLElement | null = null;

    const setPos = (el: HTMLDivElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
      setPos(dotEl, px, py);
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovered = t.closest("[data-hover]") as HTMLElement | null;
      if (hovered) {
        dotEl.classList.add("cursor-grow");
        dotEl.style.background = "transparent";
      } else {
        dotEl.classList.remove("cursor-grow");
        dotEl.style.background = "var(--cyan, #00f0ff)";
      }
    };

    const loop = () => {
      tx += (px - tx) * 0.18;
      ty += (py - ty) * 0.18;
      setPos(trailEl, tx, ty);
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", () => {
      hovered = null;
      dotEl.classList.remove("cursor-grow");
      dotEl.style.background = "var(--cyan, #00f0ff)";
    });
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={trail} className="cursor-trail" />
    </>
  );
}