import type { MetadataRoute } from "next";

import { servicePages } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/about",
    "/book",
    "/services",
    "/the-7-structural-gaps-behind-project-collapse",
    ...Object.values(servicePages).map((service) => `/services/${service.slug}`)
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
