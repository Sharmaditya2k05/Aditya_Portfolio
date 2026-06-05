"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, Trophy, Code2, Database } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const CERTS = [
  {
    org: "Google / Coursera",
    orgColor: "#4285F4",
    orgShort: "GOOGLE",
    year: "2025",
    icon: Award,
    title: "Advanced Data Analytics",
    subtitle: "Google / Coursera",
    desc: "Mastered data cleaning, analysis, visualisation, statistics, and machine learning using Python, and real-world datasets.",
    tags: ["Python", "Statistics", "ML", "Data Analysis"],
    verified: true,
    href: "#",
  },
  {
    org: "Google / Coursera",
    orgColor: "#4285F4",
    orgShort: "GOOGLE",
    year: "2024",
    icon: Award,
    title: "AI Essentials",
    subtitle: "Google / Coursera",
    desc: "Foundational knowledge of AI concepts, prompt engineering, AI ethics, and responsible AI practices.",
    tags: ["AI Fundamentals", "Prompt Engineering", "AI Ethics"],
    verified: true,
    href: "#",
  },
  {
    org: "HackerRank",
    orgColor: "#00EA64",
    orgShort: "HACKERRANK",
    year: "2026",
    icon: Code2,
    title: "Python (Basic)",
    subtitle: "HackerRank",
    desc: "Verified Python fundamentals including data types, control flow, functions, collections, and problem-solving.",
    tags: ["Python", "Problem Solving", "Core Syntax"],
    verified: true,
    href: "#",
  },
  {
    org: "HackerRank",
    orgColor: "#00EA64",
    orgShort: "HACKERRANK",
    year: "2026",
    icon: Database,
    title: "SQL (Advanced)",
    subtitle: "HackerRank",
    desc: "Verified advanced SQL skills including complex joins, aggregations, nested queries, and analytical logic.",
    tags: ["SQL", "Advanced Queries", "Data Retrieval"],
    verified: true,
    href: "#",
  },
  {
    org: "HackerRank",
    orgColor: "#00EA64",
    orgShort: "HACKERRANK",
    year: "2026",
    icon: Database,
    title: "SQL (Intermediate)",
    subtitle: "HackerRank",
    desc: "Verified intermediate SQL proficiency across joins, filtering, grouping, subqueries, and structured data analysis.",
    tags: ["SQL", "Joins", "Subqueries"],
    verified: true,
    href: "#",
  },
  {
    org: "HackerRank",
    orgColor: "#00EA64",
    orgShort: "HACKERRANK",
    year: "2026",
    icon: Database,
    title: "SQL (Basic)",
    subtitle: "HackerRank",
    desc: "Verified core SQL fundamentals including SELECT queries, filtering, sorting, aggregation, and relational concepts.",
    tags: ["SQL", "Querying", "Databases"],
    verified: true,
    href: "#",
  },
  {
    org: "Vishlesan i-Hub × IIT Patna / Masai",
    orgColor: "#a78bfa",
    orgShort: "IIT PATNA",
    year: "2026",
    icon: Award,
    title: "Certificate of Excellence in Evaluation",
    subtitle: "AI & ML Program — IIT Patna × Masai",
    desc: "Excellence in Evaluation in the Certification Program in Artificial Intelligence and Machine Learning from Vishlesan i-Hub, IIT Patna in collaboration with Masai.",
    tags: ["AI", "Machine Learning", "Excellence Award"],
    verified: true,
    href: "#",
  },
  {
    org: "Statistella / IIT BHU",
    orgColor: "#f59e0b",
    orgShort: "STATISTELLA",
    year: "2025",
    icon: Trophy,
    title: "Statistella BASH 8.0",
    subtitle: "Business Associates Special Hours / IIT BHU",
    desc: "Secured Rank 1 in Round 1 and advanced as a finalist in this national-level data analytics and statistics competition.",
    tags: ["Data Analytics", "Statistics", "Competition", "Rank 1"],
    verified: true,
    href: "#",
    highlight: true,
  },
];

export function CertificationsSection() {
  return (
    <section id="achievements" className="bg-bg-2 px-6 py-24 md:px-12">
      <SectionLabel>Recognition</SectionLabel>

      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="mb-16 font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-ink"
        style={{ fontSize: "clamp(40px,6vw,80px)" }}>
        Certifications
        <br />&amp; Awards
      </motion.h2>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {CERTS.map((cert) => {
          const Icon = cert.icon;
          return (
            <motion.div key={cert.title} variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative flex flex-col rounded-sm border bg-surface p-5 transition-all"
              style={{
                borderColor: cert.highlight ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.08)",
                boxShadow: cert.highlight ? "0 0 30px rgba(245,158,11,0.06)" : "none",
              }}>

              {/* Org + year */}
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: cert.orgColor }}>
                  {cert.orgShort}
                </span>
                <span className="font-mono text-[10px] text-ink-3">{cert.year}</span>
              </div>

              {/* Icon + title */}
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border-2 bg-bg text-ink-3 transition-colors group-hover:border-ink-2 group-hover:text-ink-2">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-extrabold leading-tight text-ink">{cert.title}</h3>
                  <p className="font-mono text-[10px] text-ink-3">{cert.subtitle}</p>
                </div>
              </div>

              {/* Desc */}
              <p className="mb-4 font-mono text-[11px] leading-relaxed text-ink-2 flex-1">{cert.desc}</p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-1">
                {cert.tags.map((tag) => (
                  <span key={tag} className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[9px] text-ink-3">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-ink-3" style={{ background: cert.orgColor, opacity: 0.8 }} />
                  <span className="font-mono text-[9px] text-ink-3">Verified</span>
                </div>
                <a href={cert.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-[9px] text-ink-3 transition-colors hover:text-ink">
                  View <ExternalLink size={9} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
