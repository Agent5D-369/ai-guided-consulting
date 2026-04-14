import Image from "next/image";

import CTAButton from "@/components/CTAButton";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import { bookingPageSections } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Book a Rebuild Call | Rick Broider",
  description:
    "Book a rebuild call with Rick Broider to identify the structural gap, clarify the path, and leave with a calmer next move.",
  path: "/book"
});

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
              This is a clean booking page for people who are ready for clarity. If the business feels heavier than it should, the call is where we slow the noise down, name the real pattern, and make the next move obvious.
            </p>
            <GlassCard className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">Come as you are</p>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Bring the mess, the fog, the half-built version, or the thing you cannot quite name yet. That is exactly what this call is for.
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
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">Who it is for</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {bookingPageSections.whoItsFor.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What happens on the call</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {bookingPageSections.whatHappens.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What to bring</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {bookingPageSections.whatToBring.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What you leave with</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {bookingPageSections.whatYouLeaveWith.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell max-w-4xl">
          <GlassCard className="p-8 text-center sm:p-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Book when you want clarity to become movement.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              The booking link opens Google Booking so you can choose a time that works and move straight into the next step.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external />
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
