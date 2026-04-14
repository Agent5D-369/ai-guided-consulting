import Image from "next/image";
import Link from "next/link";

import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import SharePrompt from "@/components/SharePrompt";
import ServiceCard from "@/components/ServiceCard";
import { StructuredData } from "@/components/StructuredData";
import {
  buyerDrivers,
  homepageFaqs,
  homepageServiceCards,
  painStatements,
  sharePrompt
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

const proofItems = [
  "Live strategy + implementation, not passive advice",
  "Built for non-technical founders and mission-led businesses",
  "Websites, offers, systems, app paths, and business structure",
  "Clarity first. Rebuild second. Momentum next."
] as const;

const bestFit = [
  "You have a real business, mission, offer, or serious next chapter.",
  "You know something beneath the surface is off.",
  "You want clarity, structure, and live guidance.",
  "You are willing to make decisions and rebuild intentionally."
] as const;

const notFit = [
  "You want generic motivation.",
  "You want free consulting with no intention to act.",
  "You want someone to magically fix everything without your involvement."
] as const;

const offerPath = [
  {
    title: "See the pattern",
    body:
      "Start with The 7 Structural Gaps Behind Project Collapse and identify what is actually breaking trust, momentum, or coherence inside the business."
  },
  {
    title: "Get clarity",
    body:
      "Book a Rebuild Call and identify the real bottleneck, the real priority, and the clearest next move."
  },
  {
    title: "Rebuild the right layer",
    body:
      "Step into a Clarity to Prosperity Session and work through the actual rebuild live, whether that is your offer, website, systems, messaging, app path, or overall business architecture."
  },
  {
    title: "Accelerate the transformation",
    body:
      "Use a Live Rebuild Intensive when you need serious progress, cleaner decisions, and real movement now."
  },
  {
    title: "Build long-term strength",
    body:
      "Apply for a Regenerative Growth Partnership if you want an ongoing rebuild partner as the business evolves."
  }
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
        <div className="container-shell grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="space-y-7">
            <SectionLabel>Clarity to Prosperity</SectionLabel>
            <div className="space-y-6">
              <h1 className="max-w-[12ch] font-heading text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[0.94]">
                Your vision is not broken.
                <br />
                Your business architecture is.
              </h1>
              <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
                Rick Broider helps founders, visionaries, consultants, and small business owners rebuild the structure beneath the mission, live, with you, so your business can finally support the clarity, clients, systems, website, and prosperity it was meant to carry.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">
              Live guidance. Clear diagnosis. Rebuild support. Real movement.
            </p>
          </div>

          <GlassCard className="overflow-hidden p-3 sm:p-4">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
              <Image
                src="/images/quicklaunch-hero.png"
                alt="QuickLaunch regenerative systems hero graphic showing purpose, validation, and execution paths"
                width={1024}
                height={1536}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-4">
                <SectionLabel>Why serious builders hire Rick</SectionLabel>
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Why this lands with the right people
                </h2>
                <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
                  Because it names the problem more accurately than they have been able to name it themselves. And once the pattern is visible, the next move becomes easier to trust.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {proofItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-200 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            <SectionLabel>Fit</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              This is for people carrying something real.
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              You are a fit for this work if the vision is strong, but the structure underneath it feels scattered, stalled, outdated, misaligned, or heavier than it should.
            </p>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              You know there is real value in what you are building. You are just tired of trying to force it through a business model, website, offer, system, or pathway that no longer matches the future you are trying to create.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <GlassCard className="p-6">
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">Best fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                {bestFit.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">Not a fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                {notFit.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
        <div className="container-shell mt-10">
          <div className="mb-8 max-w-copy space-y-4">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              If any of this feels familiar, you are exactly who this is for.
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
            <SectionLabel>Offer Path</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Start with diagnosis. Then rebuild what matters.
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              The goal is not to drown you in options. The goal is to help you take the right next step in the right order.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {offerPath.map((step, index) => (
              <GlassCard key={step.title} className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">
                  Path {index + 1}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{step.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-3xl space-y-5">
            <SectionLabel>Services</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              You do not need five disconnected experts.
              <br />
              You need the right diagnosis, the right sequence, and the right rebuild.
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              Rick helps you identify the structural issue and rebuild the right layer, offer, website, app path, systems, or business architecture, in a way that actually moves the business forward.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homepageServiceCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div className="space-y-5">
            <SectionLabel>Diagnostic</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              The 7 Structural Gaps Behind Project Collapse
            </h2>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              Most businesses do not break because people stop caring. They break because the structure underneath the mission starts failing in ways nobody can clearly name.
            </p>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              This framework gives language to the unspoken pattern so the right person can finally say, &ldquo;That is exactly what has been happening.&rdquo;
            </p>

            <SharePrompt prompt={sharePrompt} />
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href="/the-7-structural-gaps-behind-project-collapse"
                label="See the 7 Structural Gaps"
                variant="secondary"
              />
              <CTAButton href={BOOKING_URL} label="Book the Repair Call" external />
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
                  Why this lands so hard with the right people
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-300">
                  Because it names the problem more accurately than they have been able to name it themselves. And once the pattern is visible, the next move becomes easier to trust.
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

      <section className="section-space">
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

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
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

      <section className="section-space">
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

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
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

      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-3xl space-y-5">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              The questions people need answered before they move.
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
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">
                  Start with diagnosis
                </p>
                <div className="mt-4 space-y-4">
                  {offerPath.slice(0, 4).map((step) => (
                    <div key={step.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="font-medium text-white">{step.title}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{step.body}</p>
                    </div>
                  ))}
                  <Link href="/book" className="inline-flex text-sm font-semibold text-electric-300 transition hover:text-electric-200">
                    Book Your Rebuild Call
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
