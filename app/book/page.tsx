import Image from "next/image";

import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import { buildMetadata } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Book a Rebuild Call | Rick Broider",
  description:
    "Book a rebuild call with Rick Broider to identify the structural gap, clarify the path, and leave with a calmer next move.",
  path: "/book"
});

const whoItsFor = [
  "you have a real business, mission, offer, or serious next chapter",
  "you know something beneath the surface is off",
  "you want clarity, structure, and live guidance",
  "you are open to rebuilding what is no longer working",
  "you want the right next move, not more noise"
] as const;

const whatHappens = [
  "We identify the real bottleneck behind the stress or stall.",
  "We clarify what needs to be built, rebuilt, simplified, or re-sequenced.",
  "We map the next practical move.",
  "If there is a fit, we discuss the best way to continue the rebuild."
] as const;

const whatToBring = [
  "your current website",
  "your offer",
  "your app or MVP idea",
  "your messaging",
  "your business model",
  "the mess you cannot quite name yet"
] as const;

const whatYouLeaveWith = [
  "A clearer diagnosis",
  "A sharper direction",
  "A more coherent path",
  "Relief from circling",
  "A practical next step"
] as const;

const notFor = [
  "This is not for people looking for free consulting with no intention to act.",
  "This is not for people who want generic motivation instead of real clarity.",
  "This is not for people who are unwilling to rebuild what is no longer working."
] as const;

const bookingFaqs = [
  {
    question: "How should I prepare?",
    answer:
      "Bring the real version, not the polished version. The call works best when we are looking at the actual tension, not a cleaned-up summary of it."
  },
  {
    question: "Is this a vague discovery call?",
    answer:
      "No. This is a focused rebuild session for people who want clarity, better decisions, and real movement."
  },
  {
    question: "Will we talk about next steps if there is a fit?",
    answer:
      "Yes. If it makes sense to continue the rebuild together, Rick will help identify the most aligned next step."
  }
] as const;

const intakeQuestions = [
  "What are you building, rebuilding, or trying to clarify right now?",
  "What feels most stuck, heavy, confusing, or misaligned?",
  "What outcome would make this call feel like a win for you?",
  "What part of the business feels most in need of repair right now?",
  "If we find the right path, are you open to support implementing it?"
] as const;

export default function BookPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionLabel>Book</SectionLabel>
            <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Book Your Rebuild Call
            </h1>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              This call is for founders, visionaries, consultants, and business owners who know the mission is real, but the structure underneath it feels scattered, stalled, outdated, misaligned, or heavier than it should.
            </p>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              On this call, Rick will help you identify the real structural gap, clarify what is actually slowing momentum, and define the clearest next move so you can stop circling and start rebuilding with precision.
            </p>
            <GlassCard className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">
                This is not a vague brainstorming call.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                It is a focused rebuild session for people who want clarity, better decisions, and real movement.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="overflow-hidden">
            <Image
              src="/rick/rick-portrait-garden.jpg"
              alt="Rick Broider portrait for booking page"
              width={1200}
              height={1600}
              className="h-full w-full object-cover object-top"
            />
          </GlassCard>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">Who it&apos;s for</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">This is for you if:</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {whoItsFor.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What happens on the call</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {whatHappens.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What to bring</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Bring the real version, not the polished version.
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {whatToBring.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What you leave with</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {whatYouLeaveWith.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">This call is not for</h2>
            <div className="mt-4 space-y-3">
              {notFor.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 sm:text-base">
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 sm:p-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              If you are serious about rebuilding with intention, this is the right place to start.
            </h2>
            <div className="mt-8">
              <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external className="w-full sm:w-auto" />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">Your booking link will open in Google Booking.</p>
          </GlassCard>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <div className="mt-6 grid gap-4">
              {bookingFaqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">
              Before the call, be ready to answer:
            </h2>
            <div className="mt-4 space-y-3">
              {intakeQuestions.map((question, index) => (
                <div key={question} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 sm:text-base">
                  <span className="font-semibold text-white">Question {index + 1}:</span> {question}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
