"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "@/data/socials";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
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
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 font-mono text-[11px] text-red-400"
    >
      {message}
    </motion.p>
  );
}

function SocialRow({ link }: { link: SocialLink }) {
  const Icon = ICON_MAP[link.icon];
  return (
    <a
      href={link.href}
      target={link.icon === "email" || link.icon === "phone" ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-3 border-b border-border py-4 transition-colors hover:border-accent last:border-0"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-border-2 text-ink-3 transition-colors group-hover:border-accent group-hover:text-accent">
        <Icon size={14} strokeWidth={1.5} />
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-ink-2 transition-colors group-hover:text-accent">
        {link.label}
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
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Enter a valid email address";
    if (!data.message || data.message.length < 10)
      errs.message = "Message must be at least 10 characters";
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
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;
    await submit(fields);
    if (status !== "error") setFields(EMPTY);
  };

  if (status === "success") {
    return (
      <section id="contact" className="bg-bg-3 px-12 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent bg-accent-dim">
            <CheckCircle2 size={28} className="text-accent" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-3xl font-bold text-ink">Message sent!</h3>
          <p className="font-mono text-sm text-ink-2">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={reset}
            className="font-mono text-xs uppercase tracking-widest text-accent underline underline-offset-4 hover:text-accent-2"
          >
            Send another
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-bg-3 px-6 py-24 md:px-12">
      <SectionLabel>Let&apos;s connect</SectionLabel>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20 font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-ink"
        style={{ fontSize: "clamp(48px,10vw,140px)" }}
      >
        Get In
        <br />
        <span className="font-serif font-normal italic text-accent">Touch</span>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_380px]"
      >
        {/* ── Form ── */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-ink-3">
                Name <span className="text-accent">*</span>
              </label>
              <Input
                placeholder="Aditya Sharma"
                value={fields.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                aria-invalid={!!fieldErrors.name}
              />
              <FieldError message={fieldErrors.name} />
            </div>
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-ink-3">
                Email <span className="text-accent">*</span>
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={fields.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={!!fieldErrors.email}
              />
              <FieldError message={fieldErrors.email} />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-ink-3">
              Subject
            </label>
            <Input
              placeholder="Internship opportunity, collab, ..."
              value={fields.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-ink-3">
              Message <span className="text-accent">*</span>
            </label>
            <Textarea
              placeholder="Hey Aditya, I'd like to..."
              rows={6}
              value={fields.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              aria-invalid={!!fieldErrors.message}
            />
            <FieldError message={fieldErrors.message} />
          </div>

          {/* Error */}
          <AnimatePresence>
            {status === "error" && error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-sm border border-red-900/50 bg-red-950/30 px-4 py-3"
              >
                <AlertCircle size={14} className="shrink-0 text-red-400" />
                <p className="font-mono text-xs text-red-400">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="self-start"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={14} />
              </>
            )}
          </Button>
        </motion.div>

        {/* ── Sidebar: social links ── */}
        <motion.div variants={fadeUp}>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
            Or reach me directly
          </p>
          <div>
            {SOCIAL_LINKS.map((link) => (
              <SocialRow key={link.label} link={link} />
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-10 rounded-sm border border-border bg-surface p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Available
              </span>
            </div>
            <p className="font-mono text-xs leading-relaxed text-ink-2">
              Open to internships, part-time roles, and interesting project
              collaborations. Based in New Delhi — remote friendly.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
