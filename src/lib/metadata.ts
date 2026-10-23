import type { Metadata } from "next";
import { shareImage, site } from "@/content/site";

const image = {
  url: shareImage.path,
  width: shareImage.width,
  height: shareImage.height,
  alt: shareImage.alt,
  type: shareImage.type,
};

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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [image],
    },
  };
}
