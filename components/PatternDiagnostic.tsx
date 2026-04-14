"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import CTAButton from "@/components/CTAButton";
import GlassCard from "@/components/GlassCard";
import SharePrompt from "@/components/SharePrompt";
import { sharePrompt, structuralGaps } from "@/lib/content";
import { BOOKING_URL } from "@/lib/site";

export default function PatternDiagnostic() {
  const [activeId, setActiveId] = useState(structuralGaps[0].id);
  const activePattern = structuralGaps.find((pattern) => pattern.id === activeId) ?? structuralGaps[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <GlassCard className="overflow-hidden p-5 sm:p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric-300">Live Diagnostic</p>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">
            The business is usually hurting in a pattern.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {structuralGaps.map((pattern) => (
            <button
              key={pattern.id}
              type="button"
              onClick={() => setActiveId(pattern.id)}
              className={`rounded-2xl border px-4 py-3 text-left transition ${
                pattern.id === activeId
                  ? "border-electric-300/40 bg-electric-400/10 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/[0.07]"
              }`}
              aria-pressed={pattern.id === activeId}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-300">{pattern.id}</div>
              <div className="mt-1 font-medium">{pattern.title}</div>
            </button>
          ))}
        </div>

        <div className="rounded-[24px] border border-white/10 bg-black/25 p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full border border-electric-300/30 bg-electric-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-electric-300">
              {activePattern.id}
            </span>
            <h3 className="font-heading text-xl font-semibold text-white">{activePattern.title}</h3>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePattern.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-sm leading-7 text-slate-200 sm:text-base">{activePattern.short}</p>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">What it feels like</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{activePattern.pain}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">What changes</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{activePattern.shift}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-4">
          <SharePrompt prompt={sharePrompt} />
          <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external className="w-full" />
        </div>
      </div>
    </GlassCard>
  );
}
