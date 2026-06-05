"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Badge } from "@/components/ui/badge";

import { EXPERIENCES } from "@/data/timeline";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-bg px-12 py-24">
      <SectionLabel>Career</SectionLabel>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-ink"
        style={{ fontSize: "clamp(40px,6vw,80px)" }}
      >
        Experience
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {EXPERIENCES.map((exp) => (
          <motion.article
            key={exp.index}
            variants={fadeUp}
            className="group grid grid-cols-[48px_1fr] items-start gap-6 border-b border-border py-10 last:border-b-0 transition-colors duration-300 hover:bg-surface/30 px-4 -mx-4 rounded-sm"
          >
            <span className="font-mono text-sm font-light text-ink-3 pt-1">
              {exp.index}
            </span>

            <div>
              {/* Role + status */}
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent">
                  {exp.role}
                </h3>
                {exp.status && (
                  <Badge variant="current">{exp.status}</Badge>
                )}
              </div>

              {/* Company + period */}
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <span className="font-mono text-sm text-ink-2">{exp.company}</span>
                <span className="font-mono text-xs text-ink-3">{exp.period}</span>
              </div>

              {/* Description */}
              <p className="mb-5 max-w-2xl font-mono text-sm font-light leading-relaxed text-ink-2">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Badge key={tag} variant="tech">{tag}</Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
