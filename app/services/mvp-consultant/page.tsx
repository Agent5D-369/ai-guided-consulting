import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["mvp-consultant"];

export const metadata = buildMetadata({
  title: service.title,
  description: service.description,
  path: `/services/${service.slug}`
});

export default function MvpConsultantPage() {
  return <ServicePageTemplate service={service} />;
}
