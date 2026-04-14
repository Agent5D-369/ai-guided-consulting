import Image from "next/image";

import ServiceCard from "@/components/ServiceCard";
import GlassCard from "@/components/GlassCard";
import SectionLabel from "@/components/SectionLabel";
import { servicePages } from "@/lib/content";
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
            <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">
              Different businesses break in different layers. Sometimes the issue is your website. Sometimes it is your offer, systems, app path, or business architecture. These services are designed to help you identify the right layer and rebuild it intelligently.
            </p>
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
        <div className="container-shell mb-10">
          <GlassCard className="p-6 sm:p-7">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Choose the path that matches the real bottleneck
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 sm:text-base">
                If the business feels scattered or structurally strained, start with Digital Transformation Consulting
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 sm:text-base">
                If the site no longer matches the business, start with Website Development Consulting
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 sm:text-base">
                If the product idea is still foggy, start with MVP Consulting
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 sm:text-base">
                If you need help using AI without drowning in noise, start with AI Consulting for Small Business
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 sm:text-base md:col-span-2">
                If you need strategic technical direction, start with Fractional CTO Guidance
              </div>
            </div>
          </GlassCard>
        </div>
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
