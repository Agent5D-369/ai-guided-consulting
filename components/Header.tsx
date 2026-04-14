"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import CTAButton from "@/components/CTAButton";
import { BOOKING_URL, NAV_ITEMS } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <div className="border-b border-white/10 bg-black/30 px-4 py-3 text-center text-sm text-slate-300 backdrop-blur">
        Helping visionaries get from clarity to prosperity.
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
        <div className="container-shell">
          <div className="flex min-h-20 items-center justify-between gap-4">
            <Link href="/" className="min-w-0">
              <div className="font-heading text-lg font-semibold tracking-tight text-white sm:text-xl">
                Rick Broider
              </div>
              <div className="truncate text-xs text-slate-400 sm:text-sm">
                Digital Transformation Consultant • Live Regenerative Business Rebuilds
              </div>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external />
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, height: "auto" }}
              exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <nav className="container-shell flex flex-col gap-4 py-5" aria-label="Mobile">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base text-slate-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external className="w-full" />
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
