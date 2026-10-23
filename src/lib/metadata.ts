import type { Metadata } from "next";
import { site } from "@/content/site";

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  const branded = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: branded,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
    },
  };
}
