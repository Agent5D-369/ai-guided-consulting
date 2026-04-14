import Image from "next/image";

import CTAButton from "@/components/CTAButton";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import { StructuredData } from "@/components/StructuredData";
import { structuralGaps } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { BOOKING_URL, SITE_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "The 7 Structural Gaps Behind Project Collapse | Rick Broider",
  description:
    "A shareable diagnostic article for founders and business owners who need language for the structural patterns causing projects and businesses to stall.",
  path: "/the-7-structural-gaps-behind-project-collapse"
});

export default function StructuralGapsArticlePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The 7 Structural Gaps Behind Project Collapse",
          description:
            "A diagnostic article about the structural patterns that cause projects and businesses to stall or collapse.",
          author: {
            "@type": "Person",
            name: "Rick Broider"
          },
          publisher: {
            "@type": "Person",
            name: "Rick Broider"
          },
          mainEntityOfPage: `${SITE_URL}/the-7-structural-gaps-behind-project-collapse`
        }}
      />

      <section className="section-space">
        <div className="container-shell max-w-5xl space-y-6">
          <SectionLabel>Diagnostic Article</SectionLabel>
          <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            The 7 Structural Gaps Behind Project Collapse
          </h1>
          <p className="max-w-copy text-base leading-8 text-slate-200 sm:text-xl">
            Projects and businesses usually collapse structurally, not just tactically. The surface problem may look like execution, conflict, technology, leadership, money, or morale. Underneath that, there is often a deeper pattern the system has not named yet.
          </p>
          <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
            Once the pattern is seen clearly, the emotional charge drops, the fog begins to lift, and the repair path gets more honest. This page is built to help founders, partners, and teams recognize the hidden architecture behind the stall.
          </p>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <GlassCard className="overflow-hidden">
            <Image
              src="/images/stc-top-7-003.png"
              alt="Diagnostic illustration for the 7 structural gaps article"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </GlassCard>
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">Why this frame matters</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Tactics can help, but they often fail when the business is trying to solve the wrong layer. Naming the structural gap changes the conversation from blame, panic, or drift into diagnosis, sequence, and repair.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell max-w-6xl space-y-6">
          {structuralGaps.map((gap) => (
            <GlassCard key={gap.id} className="p-7 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-300">{gap.id}</p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white">{gap.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-300">{gap.short}</p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-heading text-xl font-semibold text-white">What it feels like</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{gap.pain}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-heading text-xl font-semibold text-white">What it is really signaling</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{gap.signal}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-heading text-xl font-semibold text-white">What usually gets mistaken for the problem</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{gap.mistaken}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-heading text-xl font-semibold text-white">What changes when it is seen clearly</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{gap.shift}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-5xl">
          <GlassCard className="p-8 sm:p-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Forward and compare
            </h2>
            <p className="mt-5 max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              This pattern becomes easier to repair when more than one person can see it. Forward this page to the other person carrying the same system and ask: &ldquo;Which pattern do you think is most active right now?&rdquo;
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell max-w-5xl">
          <GlassCard className="p-8 sm:p-10">
            <SectionLabel>CTA</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Once the pattern is named, the rebuild gets easier.
            </h2>
            <p className="mt-5 max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              Book a live rebuild call with Rick and turn recognition into repair.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external />
              <CTAButton href="/services" label="Explore Services" variant="secondary" />
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
