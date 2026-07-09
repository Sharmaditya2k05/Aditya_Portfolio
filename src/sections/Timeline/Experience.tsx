"use client";

import { motion } from "framer-motion";
import { Box, Brain, Clock, Code2, Eye, Folder, Network, Trophy } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { EXPERIENCES } from "@/data/timeline";

const metrics = [
  { icon: Box, value: "08+", label: "AI/ML Models Built" },
  { icon: Folder, value: "12+", label: "Projects Completed" },
  { icon: Code2, value: "15K+", label: "Lines of Code Written" },
  { icon: Trophy, value: "04+", label: "Achievements & Awards" },
  { icon: Clock, value: "300+", label: "Hours of Learning & Building" },
  { icon: Network, value: "02+", label: "Research Contributions" },
];

const rowIcons = [Eye, Network, Code2];

export function ExperienceSection() {
  return (
    <section id="experience" data-page="03" className="numbered-section portfolio-grid relative overflow-hidden bg-[#060909] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto w-full sm:w-[94vw]">
        <div className="mb-8 grid items-end gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="mb-6 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#f4b64b]">
              <span className="h-px w-10 bg-[#f4b64b]" />
              Career
            </div>
            <h2 className="font-display text-[clamp(50px,6vw,84px)] font-extrabold leading-none text-white">
              Experience
            </h2>
            <p className="mt-5 max-w-md font-mono text-base leading-8 text-white/66">
              A timeline of my journey, projects, research, and real-world impact I have built so far.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="panel-frost grid grid-cols-2 rounded-[18px] p-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="border-white/10 p-4 text-center sm:border-r last:border-r-0"
                >
                  <Icon className="mx-auto mb-3 text-[#f4b64b]" size={30} strokeWidth={1.7} />
                  <p className="font-display text-4xl font-extrabold text-white">{metric.value}</p>
                  <p className="mx-auto mt-1 max-w-24 font-mono text-xs leading-5 text-white/58">{metric.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="panel-frost relative overflow-hidden rounded-[18px] px-4 py-2 sm:px-7 lg:px-9"
        >
          {EXPERIENCES.map((exp, index) => {
            const Icon = rowIcons[index] ?? Brain;
            return (
              <motion.article
                key={exp.index}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                className="group grid gap-5 border-b border-white/8 py-7 last:border-b-0 sm:grid-cols-[84px_1fr] lg:grid-cols-[92px_1fr_360px_96px]"
              >
                <div className="relative flex items-start gap-4 border-r border-[#f4b64b]/40 pr-5">
                  <span className="font-display text-3xl font-bold text-[#f4b64b]">{exp.index}</span>
                  <span className="mt-4 h-4 w-4 rounded-full bg-[#f4b64b] shadow-[0_0_22px_rgba(244,182,75,0.8)]" />
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-extrabold text-white transition group-hover:text-[#f4b64b]">
                      {exp.role}
                    </h3>
                    {exp.status && (
                      <span className="rounded-full bg-[#f4b64b]/15 px-3 py-1 font-mono text-xs font-bold uppercase text-[#f4b64b]">
                        {exp.status}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 font-mono text-sm text-white/50">
                    <span className="text-white/70">{exp.company}</span>
                    <span className="mx-3 text-[#f4b64b]">-</span>
                    {exp.period}
                  </p>
                  <p className="max-w-3xl font-mono text-sm leading-7 text-white/64">{exp.description}</p>
                </div>

                <div className="flex flex-wrap content-center gap-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/12 px-4 py-2 font-mono text-xs uppercase tracking-wide text-white/62 transition group-hover:border-[#f4b64b]/45 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="hidden items-center justify-center lg:flex">
                  <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#f4b64b] transition group-hover:border-[#f4b64b]/50 group-hover:bg-[#f4b64b]/10">
                    <Icon size={44} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
