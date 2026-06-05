"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

import { PROJECTS, FILTERS } from "@/data/project";

export function ProjectsShowcase() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-bg px-6 py-24 md:px-12">
      <SectionLabel>Work</SectionLabel>

      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(40px,6vw,80px)" }}>
          Featured
          <br />Projects
        </motion.h2>

        {/* Filter pills */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className="rounded-sm px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-200"
              style={{
                background: filter === f ? "rgba(255,255,255,0.10)" : "transparent",
                border: filter === f ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.07)",
                color: filter === f ? "#e8e8e8" : "rgba(255,255,255,0.35)",
              }}>
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={filter}
          variants={staggerContainer} initial="hidden" animate="visible"
          className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filtered.map((project) => (
            <motion.article key={project.id} variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative flex flex-col rounded-sm border border-border bg-surface p-6 transition-colors hover:border-border-2">

              {/* Top row */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-sm border border-border-2 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink-3">
                    {project.category}
                  </span>
                  <span className="rounded-sm border border-ink-3/30 bg-ink-3/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink-2">
                    {project.badge}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-ink-3 shrink-0">{project.period}</span>
              </div>

              {/* Title */}
              <h3 className="mb-1 font-display text-xl font-extrabold text-ink transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mb-3 font-mono text-xs text-ink-3">{project.subtitle}</p>

              {/* Desc */}
              <p className="mb-5 font-mono text-xs leading-relaxed text-ink-2">{project.desc}</p>

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-sm border border-border px-2 py-0.5 font-mono text-[9px] text-ink-3">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mb-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-lg font-extrabold text-ink">{s.value}</p>
                    <p className="font-mono text-[9px] text-ink-3">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href={project.href} target="_blank" rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 rounded-sm border border-border py-2.5 font-mono text-[10px] uppercase tracking-widest text-ink-3 transition-all hover:border-ink-2 hover:text-ink">
                View on GitHub <ExternalLink size={11} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
