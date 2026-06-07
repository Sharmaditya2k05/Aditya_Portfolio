"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Grid2X2,
  Medal,
  Trophy,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const CERTS = [
  {
    orgColor: "#4285F4",
    orgShort: "GOOGLE",
    year: "2023",
    icon: "G",
    category: "Data / Analytics",
    title: "Advanced Data Analytics",
    subtitle: "Google | Coursera",
    desc: "Mastered data cleaning, analysis, visualization, statistics, and machine learning using Python and real-world datasets.",
    tags: ["Python", "Statistics", "ML", "Data Analysis"],
    href: "#",
  },
  {
    orgColor: "#4285F4",
    orgShort: "GOOGLE",
    year: "2024",
    icon: "G",
    category: "AI / ML",
    title: "AI Essentials",
    subtitle: "Google | Coursera",
    desc: "Foundational knowledge of AI concepts, prompt engineering, AI ethics, and responsible AI practices.",
    tags: ["AI Fundamentals", "Prompt Engineering", "AI Ethics"],
    href: "#",
  },
  {
    orgColor: "#22c55e",
    orgShort: "HACKERRANK",
    year: "2024",
    icon: Code2,
    category: "Programming",
    title: "Python (Basic)",
    subtitle: "HackerRank",
    desc: "Verified Python fundamentals including data types, control flow, functions, collections, and problem-solving.",
    tags: ["Python", "Problem Solving", "Data Structures"],
    href: "#",
  },
  {
    orgColor: "#22c55e",
    orgShort: "HACKERRANK",
    year: "2023",
    icon: Database,
    category: "Systems / Database",
    title: "SQL (Advanced)",
    subtitle: "HackerRank",
    desc: "Verified advanced SQL skills including complex joins, aggregations, nested queries, and analytical logic.",
    tags: ["SQL", "Advanced Queries", "Data Modeling"],
    href: "#",
  },
  {
    orgColor: "#22c55e",
    orgShort: "HACKERRANK",
    year: "2023",
    icon: Database,
    category: "Systems / Database",
    title: "SQL (Intermediate)",
    subtitle: "HackerRank",
    desc: "Verified intermediate SQL proficiency across joins, filtering, grouping, subqueries, and structured data analysis.",
    tags: ["SQL", "Joins", "Subqueries"],
    href: "#",
  },
  {
    orgColor: "#22c55e",
    orgShort: "HACKERRANK",
    year: "2023",
    icon: Code2,
    category: "Systems / Database",
    title: "SQL (Basic)",
    subtitle: "HackerRank",
    desc: "Verified core SQL fundamentals including SELECT queries, filtering, sorting, aggregation, and relational concepts.",
    tags: ["SQL", "Querying", "Databases"],
    href: "#",
  },
  {
    orgColor: "#a855f7",
    orgShort: "IIT PATNA",
    year: "2025",
    icon: Medal,
    category: "AI / ML",
    title: "Certificate of Excellence in Evaluation",
    subtitle: "IIT Patna - E & ICT Academy",
    desc: "Excellence in evaluation in the Certification Program in Artificial Intelligence and Machine Learning from Vaishnav - IHUB, IIT Patna in collaboration with Masai.",
    tags: ["ML", "Evaluation Strategies", "Excellence Award"],
    href: "#",
  },
  {
    orgColor: "#f4b64b",
    orgShort: "STATISTELLA",
    year: "2023",
    icon: BarChart3,
    category: "Data / Analytics",
    title: "Statistella BASH 8.0",
    subtitle: "Business Analytics Special Honor | IIT BHU",
    desc: "Secured Rank 1 in Round 1 and advanced as a finalist in this national-level data analytics and statistics competition.",
    tags: ["Data Analytics", "Statistics", "Competition", "Rank 1"],
    href: "#",
    highlight: true,
  },
];

const tabs = ["All", "AI / ML", "Data / Analytics", "Systems / Database", "Programming"] as const;
const tabIcons = [Grid2X2, Award, BarChart3, Database, Code2];

function GoogleLogo() {
  return (
    <span className="font-sans text-3xl font-black leading-none" aria-label="Google">
      <span style={{ color: "#4285F4" }}>G</span>
    </span>
  );
}

function HackerRankLogo({ icon: Icon }: { icon: typeof Code2 }) {
  return (
    <div className="relative flex h-8 w-8 items-center justify-center">
      <div className="absolute inset-0 rotate-45 rounded-sm border border-[#22c55e]/60" />
      <Icon size={19} className="relative z-10 text-[#22c55e]" />
    </div>
  );
}

export function CertificationsSection() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const visible = useMemo(() => (active === "All" ? CERTS : CERTS.filter((cert) => cert.category === active)), [active]);

  return (
    <section id="achievements" className="portfolio-grid relative overflow-hidden bg-[#050809] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="relative z-10 mx-auto w-[94vw]">
        <div className="mb-8 grid gap-8 xl:grid-cols-[minmax(760px,0.62fr)_1fr] xl:items-end">
          <div className="grid gap-8 md:grid-cols-[minmax(420px,0.9fr)_minmax(360px,0.58fr)] md:items-end">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-5 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#f4b64b]">
                <span className="h-px w-10 bg-[#f4b64b]" />
                Recognition
              </div>
              <h2 className="font-display text-[clamp(50px,5.6vw,78px)] font-extrabold leading-[0.9] text-white">
                Certifications
                <br />
                & Awards
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[420px] font-mono text-sm leading-7 text-white/64">
              Credentials and achievements that validate my expertise and commitment to continuous learning.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-start gap-3 xl:justify-end">
            {tabs.map((tab, index) => {
              const Icon = tabIcons[index];
              return (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`inline-flex min-h-11 items-center gap-3 rounded-lg border px-4 font-mono text-xs font-bold uppercase tracking-widest transition ${
                    active === tab
                      ? "border-[#f4b64b] bg-[#f4b64b]/12 text-[#f4b64b]"
                      : "border-white/10 text-white/48 hover:border-[#f4b64b]/50 hover:text-white"
                  }`}
                >
                  <Icon size={16} /> {tab}
                </button>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {visible.map((cert) => {
            const Icon = typeof cert.icon === "string" ? null : cert.icon;
            const iconLabel = typeof cert.icon === "string" ? cert.icon : null;
            const cardStyle = {
              "--cert-color": cert.orgColor,
              borderColor: cert.highlight ? "rgba(244,182,75,0.36)" : "rgba(255,255,255,0.1)",
            } as CSSProperties;
            return (
              <motion.article
                key={cert.title}
                variants={fadeUp}
                whileHover={{
                  y: -7,
                  boxShadow: `0 24px 80px ${cert.orgColor}18, inset 0 1px 0 rgba(255,255,255,0.06)`,
                }}
                className="panel-frost cert-glow-bar group relative flex min-h-[300px] flex-col overflow-hidden rounded-xl p-6"
                style={cardStyle}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.26em]" style={{ color: cert.orgColor }}>
                    {cert.orgShort}
                  </span>
                  <span className="font-mono text-xs text-white/46">{cert.year}</span>
                </div>

                <div className="mb-5 grid grid-cols-[56px_1fr] gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-black/45 font-display text-3xl font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition group-hover:scale-105"
                    style={{ boxShadow: `0 0 28px ${cert.orgColor}18, inset 0 1px 0 rgba(255,255,255,0.05)` }}
                  >
                    {cert.orgShort === "GOOGLE" ? (
                      <GoogleLogo />
                    ) : cert.orgShort === "HACKERRANK" && Icon ? (
                      <HackerRankLogo icon={Icon} />
                    ) : Icon ? (
                      <Icon size={27} style={{ color: cert.orgColor }} />
                    ) : (
                      <span className="font-sans text-3xl font-black" style={{ color: cert.orgColor }}>
                        {iconLabel}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-extrabold leading-tight text-white">{cert.title}</h3>
                    <p className="mt-1 font-mono text-sm text-white/54">{cert.subtitle}</p>
                  </div>
                </div>

                <p className="mb-5 flex-1 font-mono text-sm leading-7 text-white/62">{cert.desc}</p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-1 font-mono text-[11px] text-white/52">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4">
                  <span className="inline-flex items-center gap-2 font-mono text-sm text-white/62">
                    <CheckCircle2 size={15} className="text-emerald-400" /> Verified
                  </span>
                  <a href={cert.href} className="inline-flex items-center gap-2 font-mono text-sm text-white/60 transition hover:text-[#f4b64b]">
                    View <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="panel-frost mx-auto mt-8 flex w-[86vw] flex-col gap-5 rounded-[18px] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Trophy className="text-[#f4b64b]" size={38} />
            <div>
              <p className="font-display text-lg font-bold text-white">Always learning. Always building.</p>
              <p className="font-mono text-sm text-white/54">Every certification is a step forward.</p>
            </div>
          </div>
          <a href="/assets/Aditya-Sharma-Resume.pdf" className="inline-flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-widest text-[#f4b64b] hover:text-white">
            View full resume <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
