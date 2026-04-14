import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["fractional-cto-for-non-technical-founders"];

export const metadata = buildMetadata({
  title: service.title,
  description: service.description,
  path: `/services/${service.slug}`
});

export default function FractionalCtoForNonTechnicalFoundersPage() {
  return <ServicePageTemplate service={service} />;
}
