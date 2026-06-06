"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/config";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav className="pointer-events-auto flex w-full max-w-[1540px] items-center justify-between rounded-full border border-white/10 bg-black/72 px-3 py-3 shadow-[0_16px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-5">
          <a href="#" className="rounded-full px-3 py-1 transition hover:bg-[#f4b64b]/10" aria-label="Home">
            <span className="font-mono text-xl font-black uppercase tracking-[0.22em] text-[#f4b64b]">ADI</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-white/68 transition hover:text-[#f4b64b]"
              >
                {link.label}
              </a>
            ))}
            <a className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-white/68 transition hover:text-[#f4b64b]" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-3 rounded-full border border-[#f4b64b]/45 px-5 font-mono text-xs font-bold uppercase tracking-widest text-[#f4b64b] transition hover:bg-[#f4b64b] hover:text-black md:flex"
          >
            Let&apos;s Connect <ArrowUpRight size={17} />
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#f4b64b]/50 hover:text-[#f4b64b] md:hidden"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-2xl font-bold uppercase tracking-[0.2em] text-white/78 transition hover:text-[#f4b64b]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
