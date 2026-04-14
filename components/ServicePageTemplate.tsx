import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import { StructuredData } from "@/components/StructuredData";
import { ServicePageContent, servicePages } from "@/lib/content";
import { faqSchema } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/site";

type ServicePageTemplateProps = {
  service: ServicePageContent;
};

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedServices = service.related.map((slug) => servicePages[slug]).filter(Boolean);

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            serviceType: service.keyword,
            provider: {
              "@type": "Person",
              name: "Rick Broider"
            }
          },
          faqSchema(service.faqs)
        ]}
      />

      <section className="section-space">
        <div className="container-shell grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="space-y-5">
            <SectionLabel>{service.keyword}</SectionLabel>
            <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              {service.title}
            </h1>
            <p className="max-w-copy text-base leading-8 text-slate-200 sm:text-xl">{service.opening}</p>
            <div className="flex flex-wrap gap-3">
              {service.editorialLabels.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external />
              <CTAButton href="/" label="Return Home" variant="secondary" />
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${service.accent} blur-2xl`} aria-hidden="true" />
            <GlassCard className="relative overflow-hidden p-4">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[26px] border border-white/10">
                  <Image
                    src={service.visualImage}
                    alt={service.visualAlt}
                    width={1200}
                    height={1400}
                    className="h-[420px] w-full object-cover object-top"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[24px] border border-white/10 bg-black/25 p-5">
                    <Quote className="h-5 w-5 text-electric-300" aria-hidden="true" />
                    <p className="mt-4 text-base leading-8 text-slate-200">{service.pullQuote}</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">Best next move</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                      Bring the real bottleneck into the room and repair the right layer before more time gets spent on the wrong fix.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What this usually feels like</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {service.feelsLike.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What is actually happening</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{service.problem}</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {service.actuallyHappening.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">What Rick does</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {service.whatRickDoes.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">Best fit for</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {service.whoItIsFor.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="section-space border-y border-white/8 bg-white/[0.02]">
        <div className="container-shell">
          <div className="max-w-3xl space-y-5">
            <SectionLabel>What Changes</SectionLabel>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              The work becomes valuable when the path starts feeling safer and clearer.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.whatChanges.map((item) => (
              <GlassCard key={item} className="p-6">
                <p className="text-sm leading-7 text-slate-300 sm:text-base">{item}</p>
              </GlassCard>
            ))}
          </div>
          <GlassCard className="mt-8 p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">Why this is different</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Rick does not just diagnose the issue and disappear. He helps you think through the structural problem, sequence the rebuild correctly, and move into practical implementation when needed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <div className="mt-6 grid gap-4">
              {service.faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <GlassCard className="p-6">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">Related services</h2>
              <div className="mt-4 space-y-3">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.08] sm:text-base"
                  >
                    <span>{related.navTitle}</span>
                    <ArrowUpRight className="h-4 w-4 text-electric-300" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">Next step</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                If this is the layer that is breaking, the clearest next move is to bring it into a live room and repair it with sequence, clarity, and momentum.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external className="w-full" />
                <CTAButton href="/book" label="See the booking page" variant="secondary" className="w-full" />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
