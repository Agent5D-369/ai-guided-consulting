import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["website-development-consultant"];

export const metadata = buildMetadata({
  title: "Website Development Consultant for Businesses That Need More Than a Redesign | Rick Broider",
  description:
    "Rick Broider helps founders and business owners rebuild outdated, unclear, or underperforming websites into conversion-ready assets that support trust, clarity, and growth.",
  path: `/services/${service.slug}`
});

export default function WebsiteDevelopmentConsultantPage() {
  return <ServicePageTemplate service={service} />;
}
