import Image from "next/image";
import Link from "next/link";

import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import GlassCard from "@/components/GlassCard";
import PatternDiagnostic from "@/components/PatternDiagnostic";
import SectionLabel from "@/components/SectionLabel";
import SharePrompt from "@/components/SharePrompt";
import ServiceCard from "@/components/ServiceCard";
import { StructuredData } from "@/components/StructuredData";
import {
  buyerDrivers,
  homepageFaqs,
  homepageServiceCards,
  painStatements,
  sharePrompt,
  structuralGaps
} from "@/lib/content";
import { buildMetadata, faqSchema, personSchema, professionalServiceSchema } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Digital Transformation Consultant for Founders | Rick Broider",
  description:
    "Rick Broider helps founders and small business owners rebuild broken business systems, websites, offers, and app pathways live. Get clarity, structure, and a practical path to prosperity.",
  path: "/"
});

const supportChips = [
  "Digital transformation consulting",
  "Website rebuilds and conversion pathways",
  "MVP and app direction for non-technical founders",
  "AI-guided, human-centered implementation"
] as const;

const outcomeCards = [
  "A sharper direction your business can actually organize around",
  "A rebuilt website, app path, or offer that supports the next chapter",
  "Clearer decisions, ownership, and less hidden friction",
  "A business model that gives back energy instead of constantly draining it",
  "Real momentum without technical overwhelm",
  "A structure that can finally carry prosperity, not just survival"
] as const;

const processSteps = [
  {
    number: "01",
    title: "Diagnose the real bottleneck",
    body:
      "We identify the structural gap behind the stress, not just the symptom that happens to be loudest right now."
  },
  {
    number: "02",
    title: "Clarify the pathway",
    body:
      "We sharpen the direction, the offer, the architecture, and the priorities so the business has a coherent future to build toward."
  },
  {
    number: "03",
    title: "Build or rebuild live",
    body:
      "When strategy alone is not enough, we repair the messaging, website, workflow, app pathway, or business structure together in real time."
  },
  {
    number: "04",
    title: "Move from clarity to prosperity",
    body:
      "You leave with relief, progress, structure, and a regenerative path that can actually support growth and impact."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <StructuredData data={[personSchema(), professionalServiceSchema(), faqSchema(homepageFaqs)]} />

      <section className="section-space overflow-hidden">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-8">
            <SectionLabel>Clarity to Prosperity</SectionLabel>
            <div className="space-y-6">
              <h1 className="balanced-copy font-heading text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Your vision is not broken.
                <br />
                Your business architecture is.
              </h1>
              <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
                Rick Broider is a digital transformation consultant for dreamers, builders, and business owners who need more than advice. He helps you build, rebuild, or regenerate the structure beneath the mission live with you so the business can finally carry the clarity, clients, systems, website, and prosperity you know it is meant for.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external />
              <CTAButton
                href="/the-7-structural-gaps-behind-project-collapse"
                label="See the 7 Structural Gaps"
                variant="secondary"
              />
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {supportChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-card"
                >
                  {chip}
                </li>
              ))}
            </ul>

            <GlassCard className="p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/rick/rick-portrait-garden.jpg"
                    alt="Rick Broider portrait"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">Live with you</p>
                  <p className="mt-1 text-sm leading-7 text-slate-300 sm:text-base">
                    Strategic diagnosis, human-centered tech guidance, and practical rebuilding with Rick in the room.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <PatternDiagnostic />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="mb-8 max-w-copy space-y-4">
            <SectionLabel>The Weight You Feel</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              The business can look functional and still be structurally misaligned.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {painStatements.map((statement) => (
              <GlassCard key={statement} className="p-6">
                <p className="text-base leading-8 text-slate-200">{statement}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell">
          <div className="max-w-3xl space-y-5">
            <SectionLabel>Services</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Strategic clarity, website rebuilds, app direction, and live implementation in one system.
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              This is where consulting becomes useful. Instead of hiring one person for strategy, another for tech, and another to explain what went wrong, Rick helps you diagnose the structural issue and rebuild the right layer live, with the right sequence, for the right stage of business.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homepageServiceCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div className="space-y-5">
            <SectionLabel>Diagnostic</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              The 7 Structural Gaps Behind Project Collapse
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              This is the idea that stops the dream target in their tracks. It does not feel like content marketing. It feels like recognition. It gives language to the unspoken pattern so the reader can finally say, &ldquo;That is exactly what has been happening.&rdquo;
            </p>

            <SharePrompt prompt={sharePrompt} />
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href="/the-7-structural-gaps-behind-project-collapse"
                label="See the 7 Structural Gaps"
                variant="secondary"
              />
              <CTAButton href={BOOKING_URL} label="Book the repair call" external />
            </div>
          </div>

          <GlassCard className="p-6">
            <div className="space-y-5">
              <div className="overflow-hidden rounded-[24px] border border-white/10">
                <Image
                  src="/images/stc-top-7-001.png"
                  alt="Preview illustration for the 7 Structural Gaps diagnostic"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">
                  Why this becomes viral among the right people
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-300">
                  Diagnostics spread because they make people look perceptive, reduce confusion, and start conversations that need to happen. One person sees the pattern. The next move is to forward it to the co-founder, operator, partner, or team member carrying the same tension.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-slate-200 sm:text-base">
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Names what has been hard to explain</li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Turns vague stress into a specific diagnosis</li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Creates a natural forward-and-compare action</li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Makes the booking call feel like the obvious next step</li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="space-y-5">
            <SectionLabel>Transformation</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              From circling and carrying to clarity and prosperity.
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              Dream clients buy when the path feels safer, simpler, more aligned, and more likely to create the result they deeply want. This offer is built around that reality.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomeCards.map((card) => (
                <GlassCard key={card} className="p-5">
                  <p className="text-sm leading-7 text-slate-200 sm:text-base">{card}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {buyerDrivers.map((driver) => (
              <GlassCard key={driver.title} className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">{driver.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{driver.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-5">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Live rebuild work, not passive consulting.
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              The point is not to impress you with theory. The point is to diagnose the pattern, clarify the direction, rebuild the layer that is breaking, and create real movement while you are still in the room.
            </p>

            <GlassCard className="p-6">
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">What this feels like in practice</h3>
              <p className="mt-3 text-base leading-8 text-slate-300">
                A smart room with a real guide. Less fog. Fewer wrong turns. Better sequencing. Clearer decisions. Practical implementation. More relief.
              </p>
            </GlassCard>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step) => (
              <GlassCard key={step.number} className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-400/10 font-heading text-lg font-semibold text-electric-300">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{step.body}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          <GlassCard className="p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">If nothing changes</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white">
              You keep building on the same leaking frame.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              More effort. More complexity. More invisible stress. More half-finished assets. More money and time spent without the business ever feeling truly coherent.
            </p>
          </GlassCard>
          <GlassCard className="p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">When the rebuild locks in</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white">
              The business starts giving back energy.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Direction clarifies. Decisions speed up. The right structure appears. The website and digital layers support conversion. Growth feels like capacity instead of collapse.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
          <div className="space-y-5">
            <SectionLabel>About Rick</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              A rebuild partner for people carrying real vision.
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              Rick Broider helps visionaries, founders, and small business owners stop circling the same breakdowns and start rebuilding with clarity. His work blends live consulting, structural diagnosis, business architecture, website and app pathway guidance, and AI-assisted implementation so clients do not just leave with advice. They leave with movement.
            </p>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              This is especially powerful for people whose business has outgrown its old shape, whose mission is stronger than their systems, or whose website, offer, or digital pathway no longer matches the future they are trying to create.
            </p>
          </div>

          <div className="space-y-4">
            <GlassCard className="overflow-hidden">
              <Image
                src="/rick/rick-city-blue.png"
                alt="Rick Broider in an urban setting"
                width={1200}
                height={800}
                className="h-72 w-full object-cover object-top"
              />
            </GlassCard>
            <div className="grid gap-4">
              <GlassCard className="p-5">
                <h3 className="font-heading text-xl font-semibold text-white">Who hires Rick</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  Founders, coaches, consultants, mission-led businesses, non-technical entrepreneurs, and visionary operators who need the structure beneath the mission repaired.
                </p>
              </GlassCard>
              <GlassCard className="p-5">
                <h3 className="font-heading text-xl font-semibold text-white">What changes</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  More clarity. Better sequencing. Cleaner structure. Stronger offers. A healthier relationship to growth. Less confusion. More prosperity.
                </p>
              </GlassCard>
              <GlassCard className="p-5">
                <h3 className="font-heading text-xl font-semibold text-white">Why the model resonates</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  People do not want to be extracted from. They want to be seen, guided, and helped through the rebuild with a real human beside them. This is what makes the work premium, trusted, and hard to substitute.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell">
          <div className="max-w-3xl space-y-5">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Questions people ask before the rebuild starts.
            </h2>
          </div>
          <div className="mt-10 grid gap-4">
            {homepageFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <GlassCard className="overflow-hidden p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-5">
                <SectionLabel>Next Step</SectionLabel>
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Stop trying to force the vision through a broken structure.
                </h2>
                <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
                  Book a live call with Rick Broider to diagnose the structural gap, clarify the path, and rebuild the business into something that can actually hold your next level.
                </p>
                <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external />
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="space-y-4">
                  {structuralGaps.slice(0, 4).map((gap) => (
                    <div key={gap.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">
                          {gap.id}
                        </span>
                        <p className="font-medium text-white">{gap.title}</p>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{gap.short}</p>
                    </div>
                  ))}
                  <Link
                    href="/the-7-structural-gaps-behind-project-collapse"
                    className="inline-flex text-sm font-semibold text-electric-300 transition hover:text-electric-200"
                  >
                    See all 7 structural gaps
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
