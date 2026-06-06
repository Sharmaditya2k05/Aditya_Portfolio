import type { MetadataRoute } from "next";
import { SITE_METADATA } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_METADATA.url;

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
