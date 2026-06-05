"use client";

import { motion } from "framer-motion";
import { ABOUT_BIO } from "@/data/config";
import { SOCIAL_LINKS } from "@/data/socials";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

export function AboutSection() {
  const { ref } = useParallax<HTMLSpanElement>({ speed: 0.12 });

  return (
    <section
      id="about"
      className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-bg px-12 py-24"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-30"
        style={{
          maskImage: "radial-gradient(ellipse at 60% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Watermark number */}
      <span
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 right-12 select-none font-display font-extrabold leading-none tracking-[-0.05em] text-border opacity-60 hidden lg:block"
        style={{ fontSize: "clamp(140px,20vw,300px)" }}
      >
        01
      </span>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>About</SectionLabel>
        </motion.div>

        <motion.p variants={fadeUp} className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Aditya Sharma
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mb-5 font-display font-extrabold leading-[0.9] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(56px,10vw,140px)" }}
        >
          AI<span className="text-accent">/</span>ML
          <br />
          Engineer
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-2 font-serif italic text-[clamp(18px,2.5vw,34px)] text-ink-2">
          B.Tech + M.Tech · JIIT Noida
        </motion.p>

        <motion.p variants={fadeUp} className="mb-12 max-w-[560px] font-mono text-sm font-light leading-[1.85] text-ink-2">
          {ABOUT_BIO}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <Button asChild variant="primary">
            <a href="#projects">
              View Projects <ArrowRight size={14} />
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={SOCIAL_LINKS.find((l) => l.icon === "github")?.href ?? "#"} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={SOCIAL_LINKS.find((l) => l.icon === "linkedin")?.href ?? "#"} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
