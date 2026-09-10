import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";
import { projects } from "./lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...projects.map((project) => ({
      url: `${SITE.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
