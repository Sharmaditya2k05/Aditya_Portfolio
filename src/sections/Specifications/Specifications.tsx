"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Box,
  Brain,
  Code2,
  Database,
  Eye,
  Layers3,
  Asterisk,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { CAT_SKILLS, CATEGORIES, SKILLS_DATA, STATS } from "@/data/hardware";

const orbitItems = [
  { label: "AI / ML", key: "ai", icon: Brain, x: 50, y: 13 },
  { label: "Frameworks", key: "fw", icon: Code2, x: 85, y: 36 },
  { label: "Tools", key: "tools", icon: Wrench, x: 78, y: 72 },
  { label: "Data", key: "all", icon: Database, x: 50, y: 88 },
  { label: "Languages", key: "lang", icon: Code2, x: 22, y: 72 },
  { label: "Computer Vision", key: "ai", icon: Eye, x: 15, y: 36 },
];

const innerOrbitDots = [
  { x: "71", y: "50" },
  { x: "60.5", y: "68.1865" },
  { x: "39.5", y: "68.1865" },
  { x: "29", y: "50" },
  { x: "39.5", y: "31.8135" },
  { x: "60.5", y: "31.8135" },
];

function SkillWebGraph({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (key: string) => void;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="webLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f4b64b" stopOpacity="0.42" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.08" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#f4b64b" strokeOpacity="0.12" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#f4b64b" strokeDasharray="1 1.4" strokeOpacity="0.24" strokeWidth="0.55" />
        <circle cx="50" cy="50" r="19" fill="none" stroke="#f4b64b" strokeOpacity="0.28" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="12" fill="rgba(244,182,75,0.05)" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="0.7" />
        {orbitItems.map((item) => (
          <line key={`center-${item.label}`} x1="50" y1="50" x2={item.x} y2={item.y} stroke="url(#webLine)" strokeWidth="0.55" />
        ))}
        {orbitItems.map((item, index) => {
          const next = orbitItems[(index + 1) % orbitItems.length];
          return <line key={`edge-${item.label}`} x1={item.x} y1={item.y} x2={next.x} y2={next.y} stroke="#f4b64b" strokeOpacity="0.11" strokeWidth="0.55" />;
        })}
        {orbitItems.map((item) => (
          <circle key={`dot-${item.label}`} cx={item.x} cy={item.y} r="1.45" fill="#ffd27a" filter="url(#nodeGlow)" />
        ))}
        {innerOrbitDots.map((dot) => (
          <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r="0.8" fill="#f4b64b" opacity="0.85" />
        ))}
      </svg>
      <button
        type="button"
        onClick={() => setActiveTab("all")}
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f4b64b]/42 bg-[#f4b64b]/10 text-[#f4b64b] shadow-[0_0_54px_rgba(244,182,75,0.2)] transition hover:bg-[#f4b64b] hover:text-black"
      >
        <Asterisk size={34} strokeWidth={1.5} />
      </button>
      {orbitItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.key;
        return (
          <motion.button
            type="button"
            key={item.label}
            whileHover={{ scale: 1.06, y: -3 }}
            onClick={() => setActiveTab(item.key)}
            className={`panel-frost absolute flex min-h-14 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-lg px-3 text-center font-mono text-[11px] font-bold tracking-wide transition ${
              isActive ? "border-[#f4b64b]/70 text-[#f4b64b]" : "text-white hover:border-[#f4b64b]/45"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            <Icon size={20} className="text-[#f4b64b]" />
            {item.label}
          </motion.button>
        );
      })}
    </div>
  );
}

export function SkillsDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const activeSkills = useMemo(() => CAT_SKILLS[activeTab] ?? CAT_SKILLS.all, [activeTab]);

  return (
    <section id="skills" className="portfolio-grid relative overflow-hidden bg-[#050809] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="relative z-10 mx-auto w-[94vw]">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="mb-5 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#f4b64b]">
              Expertise <span className="h-px w-9 bg-[#f4b64b]" />
            </div>
            <h2 className="font-display text-[clamp(50px,6vw,84px)] font-extrabold leading-none text-white">
              Tech Stack
            </h2>
            <p className="mt-6 max-w-lg font-mono text-base leading-8 text-white/64">
              The technologies, tools, and frameworks I use to build intelligent, scalable, and impactful solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {STATS.map((stat, index) => {
              const icons = [Box, Brain, ShieldCheck, Code2];
              const Icon = icons[index] ?? Box;
              return (
                <motion.div key={stat.label} variants={fadeUp} whileHover={{ y: -6 }} className="panel-frost rounded-[18px] p-6">
                  <Icon className="mb-4 text-[#f4b64b]" size={34} strokeWidth={1.6} />
                  <p className="font-display text-4xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-2 font-mono text-sm leading-6 text-white/72">{stat.label}</p>
                  <p className="mt-4 font-mono text-xs leading-5 text-white/45">{stat.sub}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.15fr_1.05fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="panel-frost rounded-[18px] p-6">
            <div className="mb-6 flex items-start gap-3">
              <BarChart3 className="mt-1 text-[#f4b64b]" size={24} />
              <div>
                <h3 className="font-display text-xl font-bold text-white">Skill Proficiency</h3>
                <p className="font-mono text-xs text-white/45">{SKILLS_DATA.length} Skills - Current Level</p>
              </div>
            </div>
            <div className="space-y-4">
              {SKILLS_DATA.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="font-mono text-sm text-white/78">{skill.name}</span>
                    <span className="font-mono text-xs text-white/58">{skill.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full gold-gradient"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.035, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="panel-frost flex flex-col rounded-[18px] p-6">
            <div className="mb-6 flex items-start gap-3">
              <Layers3 className="mt-1 text-[#f4b64b]" size={24} />
              <div>
                <h3 className="font-display text-xl font-bold text-white">Tech Ecosystem</h3>
                <p className="font-mono text-xs text-white/45">Core domains and technologies</p>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <SkillWebGraph activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="mt-5 flex justify-between border-t border-white/8 pt-4 font-mono text-xs text-[#f4b64b]/70">
              <span>Always exploring.</span>
              <span>Build</span>
              <span>Always building.</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="panel-frost rounded-[18px] p-6">
            <div className="mb-5 flex items-start gap-3">
              <Box className="mt-1 text-[#f4b64b]" size={23} />
              <div>
                <h3 className="font-display text-xl font-bold text-white">Skills by Category</h3>
              </div>
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`min-h-10 rounded-lg border px-4 font-mono text-xs uppercase tracking-widest transition ${
                    activeTab === cat.key
                      ? "border-[#f4b64b] bg-[#f4b64b]/12 text-[#f4b64b] shadow-[0_0_22px_rgba(244,182,75,0.14)]"
                      : "border-white/10 text-white/45 hover:border-[#f4b64b]/50 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeSkills.map((cat) => (
                <motion.div
                  key={`${activeTab}-${cat.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <div className="mb-3 grid grid-cols-[1fr_auto] items-center gap-4">
                    <div>
                      <p className="font-display text-base font-bold text-white">{cat.name}</p>
                      <p className="mt-1 font-mono text-xs text-white/48">{cat.tags}</p>
                    </div>
                    <span className="font-mono text-sm text-white/68">{cat.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full gold-gradient"
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.pct}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="panel-frost mt-8 flex flex-col gap-5 rounded-[18px] p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-mono text-sm leading-7 text-white/72">
            The best technology is the one that solves real problems and creates real impact.
          </p>
          <a href="#projects" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-[#f4b64b]/50 px-5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#f4b64b] hover:text-black">
            View Projects <Code2 size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
