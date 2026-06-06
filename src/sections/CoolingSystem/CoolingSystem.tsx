"use client";

import { motion } from "framer-motion";
import { COOLING_SYSTEM_DATA } from "@/data/cooling";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function CoolingSystem() {
  return (
    <section id="cooling" className="relative bg-bg-2 px-6 py-24 md:px-12 overflow-hidden border-t border-border">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3DFF7A]/5 blur-[120px] pointer-events-none" />

      <SectionLabel>Telemetry</SectionLabel>
      
      <div className="mb-12">
        <h2 className="font-display font-black text-ink uppercase tracking-tight text-3xl md:text-5xl">
          Cooling System
        </h2>
        <p className="font-mono text-xs text-ink-3 mt-1 uppercase tracking-widest">
          Active Thermal Management Telemetry
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {/* Core telemetry card */}
        <div className="rounded-sm border border-border bg-surface p-6 flex flex-col justify-between">
          <div>
            <p className="font-mono text-[10px] text-ink-3 uppercase tracking-wider mb-2">Coolant Details</p>
            <h3 className="font-display text-xl font-bold text-ink mb-1">{COOLING_SYSTEM_DATA.coolantType}</h3>
            <p className="font-mono text-xs text-ink-2">Color: <span className="text-[#3DFF7A] font-semibold">{COOLING_SYSTEM_DATA.coolantColor}</span></p>
          </div>
          <div className="mt-8 pt-4 border-t border-border flex justify-between items-center">
            <span className="font-mono text-xs text-ink-3">Pump Speed</span>
            <span className="font-mono text-sm font-bold text-ink">{COOLING_SYSTEM_DATA.pumpSpeedRPM} RPM</span>
          </div>
        </div>

        {/* Temperature Gauge */}
        <div className="rounded-sm border border-border bg-surface p-6 flex flex-col items-center justify-center">
          <p className="font-mono text-[10px] text-ink-3 uppercase tracking-wider mb-4 self-start">Thermal State</p>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
              <motion.circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke="#3DFF7A" 
                strokeWidth="6"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * (COOLING_SYSTEM_DATA.tempCelsius / 100)) }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-2xl font-black text-ink">{COOLING_SYSTEM_DATA.tempCelsius}°C</span>
              <span className="font-mono text-[8px] text-ink-3 uppercase tracking-widest">Optimal Temp</span>
            </div>
          </div>
        </div>

        {/* Fan Status */}
        <div className="rounded-sm border border-border bg-surface p-6">
          <p className="font-mono text-[10px] text-ink-3 uppercase tracking-wider mb-4">Active Fans ({COOLING_SYSTEM_DATA.fans.length})</p>
          <div className="flex flex-col gap-3">
            {COOLING_SYSTEM_DATA.fans.map((fan) => (
              <div key={fan.id} className="flex justify-between items-center p-2 rounded-sm border border-border/50 bg-bg/50">
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: fan.status === "running" ? 1.5 : 3, ease: "linear" }}
                    className="w-5 h-5 border border-ink-3/40 rounded-full flex items-center justify-center font-mono text-[8px] text-[#3DFF7A]"
                  >
                    ⚙
                  </motion.div>
                  <span className="font-mono text-xs text-ink">{fan.name}</span>
                </div>
                <span className="font-mono text-[10px] text-ink-2">{fan.speedRPM} RPM</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default CoolingSystem;
