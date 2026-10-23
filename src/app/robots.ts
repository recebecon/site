import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const allowAll = { allow: "/" } as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: new URL(site.url).host,
  };
}
