"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/config";
import { cn } from "@/lib/utils";

export function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100vh
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-40 flex items-center justify-between border-b border-border bg-bg-2/90 px-12 py-5 backdrop-blur-sm transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      {/* Logo/identifier */}
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-2">
        adi.dev
      </span>

      {/* Section links */}
      <nav aria-label="Section navigation">
        <ul className="flex list-none gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Status indicator */}
      <div className="flex items-center gap-2 font-mono text-[11px] text-ink-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        Open to opportunities
      </div>
    </div>
  );
}
