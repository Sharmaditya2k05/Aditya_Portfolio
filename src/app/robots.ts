import type { MetadataRoute } from "next";
import { SITE_METADATA } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_METADATA.url}/sitemap.xml`,
  };
}
