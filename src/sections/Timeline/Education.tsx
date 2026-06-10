"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, CalendarDays, CheckCircle2, GraduationCap } from "lucide-react";
import { EDUCATION } from "@/data/timeline";
import { staggerContainer, fadeUp } from "@/lib/animations";

function educationLogo(institution: string) {
  if (institution.includes("Jaypee")) return "/assets/certs/jiit-logo.png";
  if (institution.includes("IIT Patna")) return "/assets/certs/iitp-logo.png";
  if (institution.includes("Delhi Public School")) return "/assets/certs/dps-ghaziabad.png";
  return null;
}

export function EducationSection() {
  return (
    <section id="education" data-page="07" className="numbered-section portfolio-grid relative overflow-hidden bg-[#060909] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="relative z-10 mx-auto w-[94vw]">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="mb-5 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#f4b64b]">
              <span className="h-px w-10 bg-[#f4b64b]" />
              Background
            </div>
            <h2 className="font-display text-[clamp(50px,6vw,84px)] font-extrabold leading-[0.92] text-white">
              Education
              <br />
              Timeline
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-xl font-mono text-base leading-8 text-white/64">
            Academic milestones and learning programs that support my AI, systems, and software engineering work.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {EDUCATION.map((item, index) => (
            <motion.article key={item.degree} variants={fadeUp} whileHover={{ y: -5 }} className="panel-frost group rounded-[18px] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f4b64b]/38 bg-[#f4b64b]/10 text-[#f4b64b]">
                  {educationLogo(item.institution) ? (
                    <Image src={educationLogo(item.institution)!} alt={`${item.institution} logo`} width={38} height={38} className="max-h-10 w-auto object-contain" />
                  ) : index === 0 ? (
                    <GraduationCap size={30} />
                  ) : (
                    <BookOpen size={28} />
                  )}
                </div>
                <span className="font-display text-4xl font-extrabold text-white/12">0{index + 1}</span>
              </div>

              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/48">
                <CalendarDays size={15} className="text-[#f4b64b]" />
                {item.years}
              </div>

              <h3 className="mb-3 min-h-[4rem] font-display text-2xl font-extrabold leading-tight text-white transition group-hover:text-[#f4b64b]">
                {item.degree}
              </h3>
              <p className="min-h-14 font-mono text-sm leading-7 text-white/60">{item.institution}</p>
              {item.result && (
                <p className="mt-4 inline-flex rounded-lg border border-[#f4b64b]/34 bg-[#f4b64b]/10 px-3 py-2 font-mono text-xs font-bold uppercase tracking-widest text-[#f4b64b]">
                  {item.result}
                </p>
              )}

              <div className="mt-6 border-t border-white/8 pt-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs font-bold uppercase ${
                    item.status === "Current" ? "bg-[#f4b64b]/14 text-[#f4b64b]" : "bg-emerald-400/10 text-emerald-300"
                  }`}
                >
                  <CheckCircle2 size={14} />
                  {item.status}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
