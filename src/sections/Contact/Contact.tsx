"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "@/data/socials";
import type { SocialLink } from "@/types";

const ICON_MAP = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  phone: Phone,
} as const;

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY: FormFields = { name: "", email: "", subject: "", message: "" };

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-2 font-mono text-xs text-red-300">
      {message}
    </motion.p>
  );
}

function SocialRow({ link }: { link: SocialLink }) {
  const Icon = ICON_MAP[link.icon];
  const text = link.href.replace("mailto:", "").replace("tel:", "");

  return (
    <a
      href={link.href}
      target={link.icon === "email" || link.icon === "phone" ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 border-b border-white/8 py-4 last:border-b-0"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4b64b]/14 text-[#f4b64b] transition group-hover:bg-[#f4b64b] group-hover:text-black">
        <Icon size={19} strokeWidth={1.7} />
      </span>
      <span>
        <span className="block font-display text-base font-bold uppercase text-white">{link.label}</span>
        <span className="block break-all font-mono text-sm text-white/52 transition group-hover:text-white/78">{text}</span>
      </span>
    </a>
  );
}

export function ContactFormSection() {
  const { status, error, submit, reset } = useContactForm();
  const [fields, setFields] = useState<FormFields>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [fieldErrors, setFieldErrors] = useState<Partial<FormFields>>({});

  const validate = (data: FormFields): Partial<FormFields> => {
    const errs: Partial<FormFields> = {};
    if (!data.name || data.name.length < 2) errs.name = "Name must be at least 2 characters";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address";
    if (!data.message || data.message.length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      const errs = validate({ ...fields, [key]: value });
      setFieldErrors((prev) => ({ ...prev, [key]: errs[key] }));
    }
  };

  const handleBlur = (key: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const errs = validate(fields);
    setFieldErrors((prev) => ({ ...prev, [key]: errs[key] }));
  };

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validate(fields);
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;
    await submit(fields);
    setFields(EMPTY);
  };

  if (status === "success") {
    return (
      <section id="contact" className="portfolio-grid bg-[#050809] px-5 py-16">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="panel-frost mx-auto flex max-w-lg flex-col items-center gap-6 rounded-[20px] p-10 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/12 text-emerald-300">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="font-display text-3xl font-bold text-white">Message sent!</h3>
          <p className="font-mono text-sm leading-7 text-white/62">Thanks for reaching out. I will get back to you within 24 hours.</p>
          <button onClick={reset} className="font-mono text-xs font-bold uppercase tracking-widest text-[#f4b64b] hover:text-white">
            Send another
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="portfolio-grid relative overflow-hidden bg-[#050809] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/45 to-transparent" />

      <div className="relative z-10 mx-auto w-[94vw]">
        <div className="mb-4 grid gap-7 lg:grid-cols-[250px_1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-10">
            <div className="mb-6 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#f4b64b]">
              Let&apos;s Connect <span className="h-px w-9 bg-[#f4b64b]" />
            </div>
            <p className="max-w-xs font-display text-2xl leading-9 text-white">
              Have an opportunity, idea, or just want to say hi? I would love to hear from you.
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pointer-events-none select-none font-display text-[clamp(92px,16vw,260px)] font-black uppercase leading-[0.78] tracking-normal text-[#f4b64b]/18"
          >
            Get In
            <span className="ml-4 font-serif font-normal italic normal-case text-[#f4b64b] drop-shadow-[0_0_30px_rgba(244,182,75,0.36)]">
              Touch
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 lg:grid-cols-[1fr_420px]"
        >
          <motion.div variants={fadeUp} className="panel-frost rounded-[18px] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-8">
            <div className="grid gap-6 sm:grid-cols-[56px_1fr_56px_1fr]">
              <div className="hidden h-14 w-14 items-center justify-center rounded-lg border border-white/10 text-[#f4b64b] sm:flex">
                <User size={24} />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-white/78">
                  Name <span className="text-[#f4b64b]">*</span>
                </label>
                <Input value={fields.name} placeholder="Aditya Sharma" onChange={(e) => handleChange("name", e.target.value)} onBlur={() => handleBlur("name")} aria-invalid={!!fieldErrors.name} />
                <FieldError message={fieldErrors.name} />
              </div>
              <div className="hidden h-14 w-14 items-center justify-center rounded-lg border border-white/10 text-[#f4b64b] sm:flex">
                <Mail size={24} />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-white/78">
                  Email <span className="text-[#f4b64b]">*</span>
                </label>
                <Input type="email" value={fields.email} placeholder="you@example.com" onChange={(e) => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")} aria-invalid={!!fieldErrors.email} />
                <FieldError message={fieldErrors.email} />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-[56px_1fr]">
              <div className="hidden h-14 w-14 items-center justify-center rounded-lg border border-white/10 text-[#f4b64b] sm:flex">
                <FileText size={24} />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-white/78">Subject</label>
                <Input value={fields.subject} placeholder="Internship opportunity, collab, ..." onChange={(e) => handleChange("subject", e.target.value)} />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-[56px_1fr]">
              <div className="hidden h-14 w-14 items-center justify-center rounded-lg border border-white/10 text-[#f4b64b] sm:flex">
                <MessageSquare size={24} />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-white/78">
                  Message <span className="text-[#f4b64b]">*</span>
                </label>
                <Textarea value={fields.message} placeholder="Hey Aditya, I'd like to..." rows={6} onChange={(e) => handleChange("message", e.target.value)} onBlur={() => handleBlur("message")} aria-invalid={!!fieldErrors.message} />
                <FieldError message={fieldErrors.message} />
              </div>
            </div>

            <AnimatePresence>
              {status === "error" && error && (
                <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-950/30 px-4 py-3">
                  <AlertCircle size={16} className="shrink-0 text-red-300" />
                  <p className="font-mono text-xs text-red-200">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="gold-gradient mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-lg px-10 font-mono text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_36px_rgba(244,182,75,0.28)] transition hover:-translate-y-1 disabled:pointer-events-none disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </motion.div>

          <motion.aside variants={fadeUp} className="space-y-5">
            <div className="panel-frost rounded-[18px] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
              <p className="mb-4 font-mono text-base font-bold uppercase tracking-widest text-[#f4b64b]">Or Reach Me Directly</p>
              {SOCIAL_LINKS.map((link) => (
                <SocialRow key={link.label} link={link} />
              ))}
            </div>

            <div className="panel-frost relative min-h-[156px] overflow-hidden rounded-[18px] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
              <div className="world-map-dots pointer-events-none absolute bottom-2 right-3 h-28 w-44 opacity-70" />
              <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-[#f4b64b]/12" />
              <div className="relative z-10 mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-display text-lg font-bold uppercase text-white">Available</span>
              </div>
              <p className="relative z-10 max-w-[260px] font-mono text-sm leading-7 text-white/62">
                Open to internships, part-time roles, and interesting project collaborations. Based in New Delhi, remote friendly.
              </p>
              <div className="relative z-10 mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#f4b64b]/80">
                <MapPin size={14} /> New Delhi
              </div>
            </div>
          </motion.aside>
        </motion.div>

        <div className="mt-8 hidden items-center gap-8 lg:flex">
          <span className="font-mono text-xs text-white/42">(c) 2026 Aditya Sharma</span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#f4b64b] via-[#f4b64b]/55 to-transparent" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/48">New Delhi - AI/ML Engineer</span>
        </div>
      </div>
    </section>
  );
}
