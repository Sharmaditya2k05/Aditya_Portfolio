"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "@/data/gallery";

interface MarqueeRowProps {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}

function MarqueeRow({ images, direction = "left", speed = 0.3 }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const section = row.closest("section");
    if (!section) return;

    const handleScroll = () => {
      const sTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sTop + window.innerHeight) * speed;
      const translate = direction === "left" ? offset - 200 : -(offset - 200);
      row.style.transform = `translateX(${translate}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [direction, speed]);

  // Triple the images so the row is always wide enough
  const tripled = [...images, ...images, ...images];

  return (
    <div
      ref={rowRef}
      className="flex gap-3 will-change-transform"
      style={{ transition: "transform 0.05s linear" }}
    >
      {tripled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="relative h-[270px] w-[420px] flex-shrink-0 overflow-hidden rounded-2xl bg-surface"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="420px"
            loading="lazy"
            unoptimized // GIFs from external domains
          />
        </div>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={MARQUEE_ROW_1} direction="left" speed={0.3} />
        <MarqueeRow images={MARQUEE_ROW_2} direction="right" speed={0.3} />
      </div>
    </section>
  );
}
