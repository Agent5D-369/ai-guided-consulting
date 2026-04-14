import Image from "next/image";

import ServiceCard from "@/components/ServiceCard";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import { serviceIndexIntro, servicePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Consulting Services | Rick Broider",
  description:
    "Explore Rick Broider's consulting services for digital transformation, website rebuilding, MVP planning, AI adoption, and fractional CTO guidance.",
  path: "/services"
});

export default function ServicesPage() {
  const services = Object.values(servicePages);

  return (
    <>
      <section className="section-space">
        <div className="container-shell grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="space-y-5">
            <SectionLabel>Services</SectionLabel>
            <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              How Rick helps rebuild the structure beneath the mission
            </h1>
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">{serviceIndexIntro}</p>
            <GlassCard className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">Editorial view</p>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Each service is a different entry point into the same deeper work: accurate diagnosis, cleaner sequencing, and rebuilding the layer that is quietly limiting growth.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="overflow-hidden p-4">
            <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
              <div className="overflow-hidden rounded-[26px] border border-white/10">
                <Image
                  src="/rick/rick-city-blue.png"
                  alt="Rick Broider portrait for services page"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-black/25 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">What people are really buying</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    Relief from circling. Better judgment. A path that feels more honest, more practical, and far less expensive than another wrong turn.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">Built for</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    Founders, consultants, coaches, mission-led businesses, and non-technical operators who need more than disconnected advice.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.navTitle}
              copy={service.description}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
