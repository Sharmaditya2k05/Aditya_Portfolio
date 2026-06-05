"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/data/timeline";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  return (
    <section id="education" className="bg-bg px-12 py-24">
      <SectionLabel>Background</SectionLabel>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 font-display text-[clamp(40px,6vw,80px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink"
      >
        Education
        <br />
        Timeline
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="relative pl-8"
      >
        {/* Timeline line */}
        <div className="absolute bottom-0 left-0 top-2 w-px bg-border" />

        {EDUCATION.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />

            <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-ink-3">
              {item.years}
            </p>
            <h3 className="mb-0.5 font-display text-xl font-bold text-ink">
              {item.degree}
            </h3>
            <p className="mb-3 font-mono text-sm text-ink-2">{item.institution}</p>
            <Badge variant={item.status === "Current" ? "current" : "completed"}>
              {item.status}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
