"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Calendar,
  Car,
  Database,
  Github,
  Grid2X2,
  LineChart,
  ShieldPlus,
  Target,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { FILTERS, PROJECTS } from "@/data/project";

const iconById = {
  "dr-drive": Car,
  traffic: LineChart,
  disaster: Bot,
  healthcare: ShieldPlus,
} as const;

const filterIcons = [Grid2X2, Bot, LineChart, Database, Github];

export function ProjectsShowcase() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="portfolio-grid relative overflow-hidden bg-[#050809] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
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
              const Icon = iconById[project.id as keyof typeof iconById] ?? Github;
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

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-10 items-center justify-end gap-3 self-end font-mono text-xs font-bold uppercase tracking-widest text-[#f4b64b] transition hover:translate-x-1 hover:text-white"
                  >
                    View on GitHub <ArrowRight size={17} />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
