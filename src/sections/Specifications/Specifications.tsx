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
  { label: "AI / ML", key: "ai", icon: Brain, x: 50, y: 15, lx: 50, ly: 10, anchor: "middle" },
  { label: "Frameworks", key: "fw", icon: Code2, x: 80.31, y: 32.5, lx: 84, ly: 31, anchor: "start" },
  { label: "Tools", key: "tools", icon: Wrench, x: 80.31, y: 67.5, lx: 84, ly: 69, anchor: "start" },
  { label: "Data", key: "all", icon: Database, x: 50, y: 85, lx: 50, ly: 93, anchor: "middle" },
  { label: "Languages", key: "lang", icon: Code2, x: 19.69, y: 67.5, lx: 16, ly: 69, anchor: "end" },
  { label: "Computer Vision", key: "ai", icon: Eye, x: 19.69, y: 32.5, lx: 16, ly: 31, anchor: "end" },
] as const;

const techRadarGrid = [
  "50,42.5 56.5,46.25 56.5,53.75 50,57.5 43.5,53.75 43.5,46.25",
  "50,30 67.32,40 67.32,60 50,70 32.68,60 32.68,40",
  "50,20 75.98,35 75.98,65 50,80 24.02,65 24.02,35",
  "50,15 80.31,32.5 80.31,67.5 50,85 19.69,67.5 19.69,32.5",
];

const techRadarPolygon = "50,20 73.68,36.33 70.52,61.85 50,74 27.89,62.75 23.48,34.75";
const techRadarDots = ["50,20", "73.68,36.33", "70.52,61.85", "50,74", "27.89,62.75", "23.48,34.75"];

function SkillWebGraph({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (key: string) => void;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[390px]">
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="techRadarGlow" cx="50%" cy="50%" r="52%">
            <stop offset="0%" stopColor="#f4b64b" stopOpacity="0.28" />
            <stop offset="72%" stopColor="#f4b64b" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#f4b64b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="techRadarFill" x1="15%" x2="90%" y1="15%" y2="92%">
            <stop offset="0" stopColor="#ffe0a0" stopOpacity="0.5" />
            <stop offset="1" stopColor="#f4b64b" stopOpacity="0.16" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#techRadarGlow)" />
        {techRadarGrid.map((points, index) => (
          <polygon
            key={points}
            points={points}
            fill="none"
            stroke={index === techRadarGrid.length - 1 ? "rgba(244,182,75,0.58)" : "rgba(255,255,255,0.13)"}
            strokeWidth={index === techRadarGrid.length - 1 ? "0.7" : "0.38"}
          />
        ))}
        {orbitItems.map((item) => (
          <line key={`axis-${item.label}`} x1="50" y1="50" x2={item.x} y2={item.y} stroke="rgba(244,182,75,0.22)" strokeWidth="0.45" />
        ))}
        <polygon points={techRadarPolygon} fill="url(#techRadarFill)" stroke="#f4b64b" strokeWidth="1.25" filter="url(#nodeGlow)" />
        <polygon points={techRadarPolygon} fill="none" stroke="rgba(255,232,180,0.72)" strokeWidth="0.35" />
        {techRadarDots.map((point) => {
          const [cx, cy] = point.split(",");
          return <circle key={point} cx={cx} cy={cy} r="1.35" fill="#ffd37a" filter="url(#nodeGlow)" />;
        })}
        {orbitItems.map((item) => (
          <text
            key={`label-${item.label}`}
            x={item.lx}
            y={item.ly}
            textAnchor={item.anchor}
            dominantBaseline="middle"
            className="fill-white font-display text-[3.2px] font-extrabold"
          >
            {item.label}
          </text>
        ))}
      </svg>
      <button
        type="button"
        onClick={() => setActiveTab("all")}
        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f4b64b]/48 bg-[#f4b64b]/10 text-[#f4b64b] shadow-[0_0_54px_rgba(244,182,75,0.2)] transition hover:bg-[#f4b64b] hover:text-black"
      >
        <Asterisk size={30} strokeWidth={1.5} />
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
            className={`absolute flex min-h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/70 text-center transition backdrop-blur-sm ${
              isActive ? "border-[#f4b64b]/70 text-[#f4b64b]" : "text-white hover:border-[#f4b64b]/45"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            aria-label={`Show ${item.label} skills`}
          >
            <Icon size={18} className="text-[#f4b64b]" />
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
    <section id="skills" data-page="04" className="numbered-section portfolio-grid relative overflow-hidden bg-[#050809] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
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
