"use client";

import { useEffect, useRef } from "react";

interface UseParallaxOptions {
  speed?: number;
}

export function useParallax<T extends HTMLElement = HTMLElement>(
  options: UseParallaxOptions = {}
) {
  const { speed = 0.12 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      element.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref };
}
