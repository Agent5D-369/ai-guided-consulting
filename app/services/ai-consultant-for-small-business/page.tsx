import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["ai-consultant-for-small-business"];

export const metadata = buildMetadata({
  title: service.title,
  description: service.description,
  path: `/services/${service.slug}`
});

export default function AiConsultantForSmallBusinessPage() {
  return <ServicePageTemplate service={service} />;
}
