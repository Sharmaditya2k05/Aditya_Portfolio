"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Clock,
  Code2,
  Folder,
  Github,
  Linkedin,
  Trophy,
  Users,
} from "lucide-react";
import { ABOUT_BIO } from "@/data/config";
import { SOCIAL_LINKS } from "@/data/socials";
import { fadeUp, staggerContainer } from "@/lib/animations";

const heroStats = [
  { icon: Brain, value: "08+", label: "AI/ML Models Built" },
  { icon: Folder, value: "12+", label: "Projects Completed" },
  { icon: Code2, value: "15K+", label: "Lines of Code Written" },
  { icon: Users, value: "02+", label: "Research Contributions" },
  { icon: Trophy, value: "04+", label: "Achievements & Awards" },
  { icon: Clock, value: "300+", label: "Hours of Learning & Building" },
];

const floatOffsets = [
  { x: [0, -10, 8, 0], y: [0, -12, -4, 0] },
  { x: [0, 12, -7, 0], y: [0, -10, -2, 0] },
  { x: [0, -14, 4, 0], y: [0, 8, -8, 0] },
  { x: [0, 10, -10, 0], y: [0, 7, -7, 0] },
  { x: [0, -8, 12, 0], y: [0, 10, -5, 0] },
  { x: [0, 14, -6, 0], y: [0, 9, -7, 0] },
];

function StatBubble({ stat, index }: { stat: (typeof heroStats)[number]; index: number }) {
  const Icon = stat.icon;

  return (
    <motion.div
      variants={fadeUp}
      animate={floatOffsets[index]}
      transition={{ duration: 4 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{
        y: -18,
        scale: 1.06,
        boxShadow: "0 24px 90px rgba(244,182,75,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      className={`panel-frost gold-glow absolute hidden w-40 rounded-xl p-4 xl:block ${
        index === 0
          ? "left-[5%] top-[2%]"
          : index === 1
            ? "right-[2%] top-[4%]"
            : index === 2
              ? "left-[0%] top-[40%]"
              : index === 3
                ? "right-[-2%] top-[44%]"
                : index === 4
                  ? "bottom-[4%] left-[7%]"
                  : "bottom-[4%] right-[5%]"
      }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <Icon className="text-[#f4b64b]" size={28} strokeWidth={1.7} />
        <span className="font-display text-3xl font-extrabold text-white">{stat.value}</span>
      </div>
      <p className="font-mono text-xs leading-relaxed text-white/60">{stat.label}</p>
    </motion.div>
  );
}

export function AboutSection() {
  const github = SOCIAL_LINKS.find((l) => l.icon === "github")?.href ?? "#";
  const linkedin = SOCIAL_LINKS.find((l) => l.icon === "linkedin")?.href ?? "#";

  return (
    <section
      id="about"
      className="portfolio-grid relative overflow-hidden bg-[#060909] px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-50" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-black/55 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto grid w-[94vw] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#f4b64b]">
            <span className="h-px w-10 bg-[#f4b64b]" />
            About Me
          </motion.div>

          <motion.p variants={fadeUp} className="mb-6 font-mono text-sm uppercase tracking-[0.45em] text-white/70">
            Aditya Sharma
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-5 font-display text-[clamp(58px,8.2vw,128px)] font-extrabold leading-[0.86] text-white"
          >
            AI<span className="bg-gradient-to-b from-[#ffe0a0] to-[#c98524] bg-clip-text text-transparent">/</span>ML
            <br />
            Engineer
          </motion.h2>

          <motion.p variants={fadeUp} className="mb-5 font-serif text-[clamp(24px,3vw,40px)] italic text-white/55">
            B.Tech + M.Tech - JIIT Noida
          </motion.p>

          <motion.p variants={fadeUp} className="mb-8 max-w-2xl font-mono text-sm leading-[1.9] text-white/64">
            {ABOUT_BIO}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="gold-gradient inline-flex min-h-12 items-center gap-3 rounded-lg px-6 font-mono text-xs font-bold uppercase tracking-[0.15em] text-black shadow-[0_0_28px_rgba(244,182,75,0.24)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(244,182,75,0.38)]"
            >
              View Projects <ArrowRight size={17} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/14 px-6 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/78 transition hover:-translate-y-1 hover:border-[#f4b64b] hover:text-[#f4b64b]"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/14 px-6 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/78 transition hover:-translate-y-1 hover:border-[#f4b64b] hover:text-[#f4b64b]"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative min-h-[500px]">
          <div className="panel-frost gold-glow relative mx-auto flex max-w-[560px] flex-col overflow-hidden rounded-[18px] p-4 lg:mt-8">
            <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-black">
              <Image
                src="/assets/aditya-portrait.png"
                alt="Aditya Sharma"
                width={900}
                height={900}
                priority={false}
                className="h-[340px] w-full object-cover object-[50%_20%] sm:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-4xl font-extrabold leading-none text-white">ADITYA</p>
                <p className="font-display text-4xl font-extrabold leading-none text-white">SHARMA</p>
                <p className="mt-2 font-mono text-sm font-bold text-[#f4b64b]">AI/ML Engineer</p>
              </div>
            </div>
          </div>

          {heroStats.map((stat, index) => (
            <StatBubble key={stat.label} stat={stat} index={index} />
          ))}

          <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="panel-frost rounded-xl p-4">
                  <Icon className="mb-2 text-[#f4b64b]" size={22} />
                  <p className="font-display text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="font-mono text-[11px] leading-relaxed text-white/58">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
