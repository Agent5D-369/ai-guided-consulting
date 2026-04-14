import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["website-development-consultant"];

export const metadata = buildMetadata({
  title: service.title,
  description: service.description,
  path: `/services/${service.slug}`
});

export default function WebsiteDevelopmentConsultantPage() {
  return <ServicePageTemplate service={service} />;
}
