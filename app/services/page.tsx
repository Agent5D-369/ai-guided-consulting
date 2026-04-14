import ServiceCard from "@/components/ServiceCard";
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
        <div className="container-shell max-w-5xl space-y-5">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            How Rick helps rebuild the structure beneath the mission
          </h1>
          <p className="max-w-copy text-base leading-8 text-slate-300 sm:text-lg">{serviceIndexIntro}</p>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
