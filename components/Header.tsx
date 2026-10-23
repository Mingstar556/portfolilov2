"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(7,7,13,0)", "rgba(7,7,13,0.85)"]
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
  );
  const blur = useTransform(scrollY, [0, 80], [0, 14]);
  const y = useTransform(scrollY, [0, 80], [-8, 0]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v: number) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      style={{
        backgroundColor: bg,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        borderBottom: border,
        y,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display font-black tracking-[0.2em] text-white"
          data-hover
        >
          LGP<span className="text-cyan">·</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-hover
              className="text-xs font-mono uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-cyan"
            >
              {n.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          data-hover
          className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-white/80 transition hover:border-cyan/60 hover:text-cyan md:inline-flex"
        >
          Let&rsquo;s talk
        </a>

        <button
          className="relative flex h-10 w-10 items-center justify-center rounded border border-white/15 text-white md:hidden"
          aria-label="Menu"
        >
          <span className="h-0.5 w-5 bg-white" />
        </button>
      </nav>
    </motion.header>
  );
}