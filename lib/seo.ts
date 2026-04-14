import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const getAbsoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({ title, description, path = "/", image = DEFAULT_OG_IMAGE }: MetaInput): Metadata {
  const url = getAbsoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : getAbsoluteUrl(image);

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} open graph image`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: "Digital Transformation Consultant",
    email: "mailto:[email protected]",
    knowsAbout: [
      "Digital transformation consulting",
      "Small business consulting",
      "Website development consulting",
      "MVP consulting",
      "Fractional CTO guidance",
      "AI consulting for small businesses"
    ]
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} Consulting`,
    url: SITE_URL,
    description:
      "Digital transformation consulting, website rebuilding, MVP guidance, AI consulting, and fractional CTO guidance for founders and small businesses.",
    founder: {
      "@type": "Person",
      name: SITE_NAME
    },
    serviceType: [
      "Digital transformation consulting",
      "Small business consulting",
      "Website development consulting",
      "MVP consulting",
      "Fractional CTO guidance",
      "AI consulting for small businesses"
    ],
    areaServed: "Worldwide"
  };
}

export function faqSchema(faqs: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
