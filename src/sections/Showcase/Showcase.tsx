"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Calendar,
  Car,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Github,
  Grid2X2,
  Info,
  LineChart,
  Navigation,
  ShieldPlus,
  Target,
  X,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { FILTERS, PROJECTS } from "@/data/project";
import type { ShowcaseProject } from "@/types";

const iconById: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  "dr-drive": Car,
  greenmile: Navigation,
  traffic: LineChart,
  disaster: Bot,
  healthcare: ShieldPlus,
};

const filterIcons = [Grid2X2, Car, Navigation, Bot, LineChart];

// ── Project Detail Modal ────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: ShowcaseProject;
  onClose: () => void;
}) {
  const Icon = iconById[project.id] ?? Github;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[24px] border border-white/10 bg-[#0c0f12] shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
          onClick={(e) => e.stopPropagation()}
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(244,182,75,0.3) transparent" }}
        >
          {/* Header */}
          <div
            className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-[24px] p-6 pb-5"
            style={{ background: "linear-gradient(180deg, #0c0f12 80%, rgba(12,15,18,0))" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f4b64b]/40 bg-[#f4b64b]/10 text-[#f4b64b]">
                <Icon size={30} strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="rounded-md border border-white/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white/58">
                    {project.category}
                  </span>
                  <span className="rounded-md border border-[#f4b64b]/35 bg-[#f4b64b]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#f4b64b]">
                    {project.badge}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-extrabold text-white">{project.title}</h2>
                <p className="font-mono text-sm text-[#f4b64b]">{project.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#f4b64b]/50 hover:text-[#f4b64b]"
            >
              <X size={17} />
            </button>
          </div>

          <div className="px-6 pb-8 space-y-7">
            {/* Meta row */}
            <div className="flex flex-wrap gap-4 text-white/50 font-mono text-xs">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {project.period}</span>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#f4b64b] hover:text-white transition"
              >
                <Github size={13} /> View on GitHub <ExternalLink size={11} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                  <p className="font-display text-2xl font-extrabold text-[#f4b64b]">{stat.value}</p>
                  <p className="font-mono text-[11px] text-white/48 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#f4b64b]">About this project</h3>
              <p className="font-mono text-sm leading-7 text-white/70">{project.desc}</p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#f4b64b]">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 font-mono text-sm text-white/70">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Table */}
            {project.techDetails && project.techDetails.length > 0 && (
              <div>
                <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#f4b64b]">Tech Stack</h3>
                <div className="overflow-hidden rounded-xl border border-white/8">
                  {project.techDetails.map((row, i) => (
                    <div
                      key={row.layer}
                      className={`flex gap-4 px-4 py-3 ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
                    >
                      <span className="w-28 flex-shrink-0 font-mono text-xs font-bold uppercase tracking-widest text-[#f4b64b]">
                        {row.layer}
                      </span>
                      <span className="font-mono text-sm text-white/70">{row.tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#f4b64b]">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] text-white/62"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-[#f4b64b]/40 bg-[#f4b64b]/8 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-[#f4b64b] transition hover:bg-[#f4b64b]/16 hover:text-white"
            >
              <Github size={17} /> View Full Project on GitHub <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main Showcase Section ──────────────────────────────────────────────────

export function ProjectsShowcase() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <section id="projects" data-page="05" className="numbered-section portfolio-grid relative overflow-hidden bg-[#050809] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="relative z-10 mx-auto w-[94vw]">
          <div className="mb-8 grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="mb-5 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#f4b64b]">
                  <span className="h-px w-10 bg-[#f4b64b]" />
                  Work
                </div>
                <h2 className="font-display text-[clamp(50px,6vw,84px)] font-extrabold leading-[0.92] text-white">
                  Featured
                  <br />
                  Projects
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-md font-mono text-base leading-8 text-white/64">
                A selection of my best work, solving real problems with intelligent systems and impactful technology.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-start gap-3 lg:justify-end">
              {FILTERS.map((f, index) => {
                const Icon = filterIcons[index] ?? Grid2X2;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`inline-flex min-h-11 items-center gap-3 rounded-lg border px-4 font-mono text-xs font-bold uppercase tracking-widest transition ${
                      filter === f
                        ? "border-[#f4b64b] bg-[#f4b64b]/12 text-[#f4b64b] shadow-[0_0_24px_rgba(244,182,75,0.13)]"
                        : "border-white/10 text-white/48 hover:border-[#f4b64b]/50 hover:text-white"
                    }`}
                  >
                    <Icon size={16} /> {f}
                  </button>
                );
              })}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 12 }}
              className="grid grid-cols-1 gap-6 xl:grid-cols-2"
            >
              {filtered.map((project) => {
                const Icon = iconById[project.id] ?? Github;
                return (
                  <motion.article
                    key={project.id}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="panel-frost group flex min-h-[300px] flex-col rounded-[18px] p-6 transition"
                  >
                    <div className="mb-6 grid gap-5 sm:grid-cols-[84px_1fr_auto]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[#f4b64b]/45 bg-[#f4b64b]/8 text-[#f4b64b] transition group-hover:bg-[#f4b64b]/14">
                        <Icon size={36} strokeWidth={1.6} />
                      </div>

                      <div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span className="rounded-md border border-white/12 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/58">
                            {project.category}
                          </span>
                          <span className="rounded-md border border-[#f4b64b]/35 bg-[#f4b64b]/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#f4b64b]">
                            {project.badge}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-extrabold text-white transition group-hover:text-[#f4b64b]">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-mono text-sm font-bold text-[#f4b64b]">{project.subtitle}</p>
                      </div>

                      <div className="flex items-start gap-2 font-mono text-xs text-white/52 sm:justify-end">
                        <Calendar size={15} />
                        <span>{project.period}</span>
                      </div>
                    </div>

                    <p className="mb-5 max-w-3xl font-mono text-sm leading-7 text-white/62">{project.desc}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] text-white/52">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto grid gap-4 border-y border-white/8 py-4 sm:grid-cols-3">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="flex items-center gap-3">
                          <Target className="text-[#f4b64b]" size={24} strokeWidth={1.6} />
                          <div>
                            <p className="font-display text-xl font-extrabold text-white">{stat.value}</p>
                            <p className="font-mono text-xs text-white/48">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/12 bg-white/[0.03] px-4 font-mono text-xs font-bold uppercase tracking-widest text-white/60 transition hover:border-[#f4b64b]/50 hover:bg-[#f4b64b]/8 hover:text-[#f4b64b]"
                      >
                        <Info size={14} /> About Project
                      </button>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-end gap-3 font-mono text-xs font-bold uppercase tracking-widest text-[#f4b64b] transition hover:translate-x-1 hover:text-white"
                      >
                        View on GitHub <ArrowRight size={17} />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal portal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
