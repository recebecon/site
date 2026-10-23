import type { MetadataRoute } from "next";
import { indexablePaths } from "@/content/routes";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: absoluteUrl(path.href),
    changeFrequency: path.changeFrequency,
    priority: path.priority,
  }));
}
