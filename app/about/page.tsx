import Image from "next/image";

import CTAButton from "@/components/CTAButton";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata, personSchema } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Rick Broider | Clarity to Prosperity",
  description:
    "Learn how Rick Broider helps visionaries rebuild business architecture through live consulting, strategic diagnosis, website and app guidance, and AI-assisted implementation.",
  path: "/about"
});

const sections = [
  {
    title: "Why this work exists",
    body:
      "Some businesses do not need more advice. They need the hidden structural issue named accurately and rebuilt with care. This work exists for the moment when a strong mission keeps meeting friction because the business underneath it is no longer coherent enough to carry what it is trying to become."
  },
  {
    title: "Who Rick helps",
    body:
      "Rick works with founders, consultants, coaches, mission-led businesses, non-technical entrepreneurs, and visionaries whose ideas are real but whose systems, offers, website, or product pathway need sharper structure."
  },
  {
    title: "What makes the model different",
    body:
      "The model is build-with-you, not extractive. Instead of delivering detached recommendations and disappearing, Rick blends strategy, diagnosis, architecture, website and app guidance, and AI-assisted implementation in a way that creates movement while the conversation is still alive."
  },
  {
    title: "What clients are really buying",
    body:
      "They are buying a calmer path. They are buying accurate diagnosis, better sequencing, practical rebuilding, and the experience of being understood without being oversold. They are buying the chance to move from overload into structure that can finally support prosperity."
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: personSchema()
        }}
      />

      <section className="section-space">
        <div className="container-shell grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="space-y-6">
            <SectionLabel>About Rick Broider</SectionLabel>
            <h1 className="balanced-copy font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              A premium rebuild model for people whose vision has outgrown the old structure.
            </h1>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              Rick works live with visionaries who need more than analysis. He brings strategy, structural diagnosis, business architecture, website and app pathway guidance, and AI-assisted implementation together so the rebuild becomes real, not theoretical.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
            <GlassCard className="overflow-hidden">
              <Image
                src="/rick/rick-patio-charcoal.png"
                alt="Rick Broider portrait outdoors"
                width={1200}
                height={1600}
                className="h-full w-full object-cover object-top"
              />
            </GlassCard>
            <div className="grid gap-4">
              <GlassCard className="overflow-hidden">
                <Image
                  src="/rick/rick-car-burgundy.png"
                  alt="Rick Broider portrait in a burgundy shirt"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover object-top"
                />
              </GlassCard>
              <GlassCard className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">How clients experience the work</p>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  Calm. Direct. Intelligent. Less posturing, less tech fog, and more real movement built with you in the room.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          {sections.map((section) => (
            <GlassCard key={section.title} className="p-7">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{section.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell max-w-5xl">
          <GlassCard className="p-8 sm:p-10">
            <SectionLabel>Final CTA</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Helping visionaries get from clarity to prosperity.
            </h2>
            <p className="mt-5 max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              If the mission is strong but the business still feels harder than it should, the next move is not more circling. It is a clearer diagnosis and a live rebuild path.
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
