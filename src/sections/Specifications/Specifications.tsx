"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

import { STATS, SKILLS_DATA, CATEGORIES, CAT_SKILLS } from "@/data/hardware";

// Simple hexagon radar using SVG
function RadarChart() {
  const axes = ["Python", "ML", "Vision", "C++", "Data", "APIs"];
  const values = [0.88, 0.82, 0.78, 0.80, 0.80, 0.68];
  const cx = 110, cy = 110, r = 80;
  const N = axes.length;

  const point = (i: number, scale: number) => {
    const angle = (Math.PI * 2 * i) / N - Math.PI / 2;
    return { x: cx + r * scale * Math.cos(angle), y: cy + r * scale * Math.sin(angle) };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];
  const polyPoints = values.map((v, i) => { const p = point(i, v); return `${p.x},${p.y}`; }).join(" ");

  return (
    <svg viewBox="0 0 220 220" className="w-full max-w-[220px]">
      {/* Grid rings */}
      {gridLevels.map((lvl) => (
        <polygon key={lvl}
          points={Array.from({ length: N }, (_, i) => { const p = point(i, lvl); return `${p.x},${p.y}`; }).join(" ")}
          fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      ))}
      {/* Axis lines */}
      {axes.map((_, i) => {
        const p = point(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />;
      })}
      {/* Data polygon */}
      <polygon points={polyPoints} fill="rgba(200,200,200,0.12)" stroke="rgba(220,220,220,0.6)" strokeWidth="1.5" />
      {/* Dots */}
      {values.map((v, i) => {
        const p = point(i, v);
        return <circle key={i} cx={p.x} cy={p.y} r="3" fill="#e8e8e8" />;
      })}
      {/* Labels */}
      {axes.map((label, i) => {
        const p = point(i, 1.22);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
          fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="monospace">{label}</text>;
      })}
    </svg>
  );
}

export function SkillsDashboard() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="skills" className="bg-bg-2 px-6 py-24 md:px-12">
      <SectionLabel>Expertise</SectionLabel>

      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="mb-16 font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-ink"
        style={{ fontSize: "clamp(40px,6vw,80px)" }}>
        Tech Stack
      </motion.h2>

      {/* Stat cards */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((s) => (
          <motion.div key={s.label} variants={fadeUp}
            className="group rounded-sm border border-border bg-surface p-5 transition-colors hover:border-border-2">
            <span className="mb-3 block text-xl text-ink-3">{s.icon}</span>
            <p className="mb-0.5 font-display text-3xl font-extrabold text-ink">{s.value}</p>
            <p className="font-mono text-xs font-medium text-ink-2">{s.label}</p>
            <p className="mt-1 font-mono text-[10px] text-ink-3">{s.sub}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Skill proficiency bars */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-sm border border-border bg-surface p-6 lg:col-span-1">
          <p className="mb-1 font-display text-sm font-bold text-ink">Skill Proficiency</p>
          <p className="mb-5 font-mono text-[10px] text-ink-3">{SKILLS_DATA.length} Skills · Current Level</p>
          <div className="flex flex-col gap-3 max-h-[340px] overflow-y-auto pr-1">
            {SKILLS_DATA.map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-1 flex justify-between">
                  <span className="font-mono text-[11px] text-ink-2">{skill.name}</span>
                  <span className="font-mono text-[11px] text-ink-3">{skill.pct}%</span>
                </div>
                <div className="h-[3px] w-full rounded-full bg-border">
                  <motion.div className="h-full rounded-full bg-ink-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Radar */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded-sm border border-border bg-surface p-6">
          <p className="mb-1 font-display text-sm font-bold text-ink">Skills Radar</p>
          <p className="mb-6 font-mono text-[10px] text-ink-3">Strength across key domains</p>
          <RadarChart />
        </motion.div>

        {/* Categories */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-sm border border-border bg-surface p-6">
          <p className="mb-1 font-display text-sm font-bold text-ink">Skills by Category</p>
          {/* Tabs */}
          <div className="mb-5 mt-3 flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button key={cat.key} onClick={() => setActiveTab(cat.key)}
                className="rounded-sm px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-all"
                style={{
                  background: activeTab === cat.key ? "rgba(255,255,255,0.12)" : "transparent",
                  border: activeTab === cat.key ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.07)",
                  color: activeTab === cat.key ? "#e8e8e8" : "rgba(255,255,255,0.35)",
                }}>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {CAT_SKILLS[activeTab].map((cat) => (
              <div key={cat.name} className="rounded-sm border border-border p-3">
                <div className="mb-1.5 flex justify-between">
                  <span className="font-mono text-xs font-medium text-ink">{cat.name}</span>
                  <span className="font-mono text-xs text-ink-3">{cat.pct}%</span>
                </div>
                <div className="mb-2 h-[3px] w-full rounded-full bg-border">
                  <motion.div className="h-full rounded-full bg-ink-2"
                    key={`${activeTab}-${cat.name}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.pct}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }} />
                </div>
                <p className="font-mono text-[10px] text-ink-3">{cat.tags}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
