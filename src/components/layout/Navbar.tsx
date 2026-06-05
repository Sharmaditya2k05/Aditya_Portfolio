"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/config";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav
          className="pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2"
          style={{
            background: "rgba(10,10,10,0.82)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Logo — asterisk + ADI */}
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-200 hover:bg-white/10 select-none mr-1"
            aria-label="Home"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              ✳
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              ADI
            </span>
          </a>

          {/* Divider */}
          <div className="h-4 w-px bg-white/10 mx-1" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block h-4 w-px bg-white/10 mx-1" />

          {/* Contact pill button */}
          <a
            href="#contact"
            className="hidden md:flex items-center rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center justify-center h-8 w-8 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`h-px w-4 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px w-4 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
      </motion.div>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden"
            style={{
              background: "rgba(8,8,8,0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-2xl font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.4 }}
              className="mt-4 font-mono text-xl font-semibold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
