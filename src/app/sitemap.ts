import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://morecopysystems.in",
      lastModified: new Date("2025-01-01").toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
