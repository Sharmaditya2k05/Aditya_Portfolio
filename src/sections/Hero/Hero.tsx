"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HERO_TAGLINE, HERO_ROLES } from "@/data/config";
import { heroHeadingVariants, fadeUp } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";

function RoleTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { displayed, done } = useTypewriter(HERO_ROLES[roleIndex], {
    speed: 45,
    startDelay: 800,
  });

  useEffect(() => {
    if (done) {
      const timeout = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % HERO_ROLES.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [done]);

  return (
    <span>
      {displayed}
      <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-0.5 bg-accent align-middle" />
    </span>
  );
}

// ─── Frame sequence hero — 20 PNGs, mouse-scrubbed with lerp ─────────────────

const TOTAL_FRAMES = 20;

// Preload all frames into Image objects once
function preloadFrames(): HTMLImageElement[] {
  return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
    const img = new window.Image();
    img.src = `/images/frames/frame_${String(i).padStart(2, "0")}.png`;
    return img;
  });
}

function BackgroundVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const targetRef = useRef(0);     // target frame index (float)
  const currentRef = useRef(0);   // smoothed frame index (float)
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load frames
    framesRef.current = preloadFrames();

    // Resize canvas to match display size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    // Draw a specific (float) frame — no blending, just nearest frame
    const drawFrame = (idx: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, idx));
      const frame = framesRef.current[Math.round(clamped)];
      if (!frame?.complete || !frame.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;

      // Cover fit — right-anchored so robot sits on the right half
      const scale = Math.max((cw * 0.6) / frame.naturalWidth, ch / frame.naturalHeight);
      const dw = frame.naturalWidth * scale;
      const dh = frame.naturalHeight * scale;
      const dx = cw - dw; // right edge
      const dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(frame, dx, dy, dw, dh);

      // Paint bottom fade — covers sparkle and smooths into next section
      const bottomGrad = ctx.createLinearGradient(0, ch * 0.65, 0, ch);
      bottomGrad.addColorStop(0, "rgba(12,12,12,0)");
      bottomGrad.addColorStop(0.55, "rgba(12,12,12,0.6)");
      bottomGrad.addColorStop(1, "rgba(12,12,12,1)");
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, 0, cw, ch);

      // Paint right-edge fade (softens hard right edge on smaller screens)
      const rightGrad = ctx.createLinearGradient(cw * 0.82, 0, cw, 0);
      rightGrad.addColorStop(0, "rgba(12,12,12,0)");
      rightGrad.addColorStop(1, "rgba(12,12,12,0.55)");
      ctx.fillStyle = rightGrad;
      ctx.fillRect(0, 0, cw, ch);
    };

    // RAF loop — lerp currentRef toward targetRef
    const tick = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.07;
      drawFrame(currentRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    // Wait for first frame then start loop
    framesRef.current[0].onload = () => {
      drawFrame(0);
      rafRef.current = requestAnimationFrame(tick);
    };
    if (framesRef.current[0].complete) {
      drawFrame(0);
      rafRef.current = requestAnimationFrame(tick);
    }

    // Mouse → map X across viewport to frame index
    const onMouseMove = (e: MouseEvent) => {
      const norm = e.clientX / window.innerWidth; // 0..1
      targetRef.current = norm * (TOTAL_FRAMES - 1);
    };

    // Touch support for mobile
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const norm = t.clientX / window.innerWidth;
      targetRef.current = norm * (TOTAL_FRAMES - 1);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ display: "block", transform: "translateY(-6%)" }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#0C0C0C]"
    >
      <BackgroundVideo />

      {/* Gradient overlay — full width, strong left fade */}
      <div className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to right, #0C0C0C 0%, #0C0C0C 32%, rgba(12,12,12,0.85) 45%, rgba(12,12,12,0.4) 58%, rgba(12,12,12,0.05) 72%, transparent 85%)" }} />
      {/* Bottom fade — smooths hero into next section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-[2] h-48"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(12,12,12,0.62) 50%, #0C0C0C 100%)" }} />
      <div className="pointer-events-none absolute bottom-8 left-10 z-[3] hidden h-px w-40 bg-gradient-to-r from-[#f4b64b] to-transparent opacity-70 md:block" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Spacer for fixed navbar */}
        <div className="h-20" />

        {/* Sub-tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="px-10 pt-6 font-mono text-xs uppercase tracking-widest text-ink-2"
        >
          AI/ML engineer and computer science student based in New Delhi.
        </motion.p>

        {/* Big heading */}
        <div className="overflow-hidden px-5 mt-0">
          <motion.h1
            variants={heroHeadingVariants}
            initial="hidden"
            animate="visible"
            className="select-none font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(12vw,15.5vw,17.5vw)]"
            style={{
              background: "linear-gradient(180deg, #f2d28c 0%, #BBCCD7 24%, #8e98a0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ADITYA
            <br />
            SHARMA
          </motion.h1>
        </div>

        {/* Role typewriter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="px-10 mt-4 font-display text-xl font-medium text-ink md:text-2xl"
        >
          <RoleTypewriter />
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-auto flex items-end justify-between px-10 pb-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="max-w-[240px] font-mono text-[clamp(0.7rem,1.2vw,0.85rem)] uppercase leading-relaxed tracking-[0.06em] text-ink-2"
          >
            {HERO_TAGLINE}
          </motion.p>

          <motion.a
            href="/assets/Aditya-Sharma-Resume.pdf"
            download="Aditya-Sharma-Resume.pdf"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2.5 rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#f4b64b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4b64b] hover:text-black"
            style={{
              background: "rgba(244,182,75,0.09)",
              border: "1px solid rgba(244,182,75,0.42)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 28px rgba(244,182,75,0.12)",
            }}
          >
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 1v8M3 6l3.5 3.5L10 6M1 13h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
