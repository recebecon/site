import { company, site, socialLinks } from "@/content/site";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/metadata";

const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: site.language,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        legalName: company.legalName,
        alternateName: company.tradeName,
        taxID: company.cnpjDigits,
        url: site.url,
        description: site.description,
        slogan: site.slogan,
        foundingDate: company.foundedOn,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/brand/logo.png"),
          width: 932,
          height: 196,
        },
        image: absoluteUrl("/brand/logo.png"),
        address: {
          "@type": "PostalAddress",
          addressLocality: company.city,
          addressRegion: company.state,
          addressCountry: "BR",
        },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        knowsAbout: [
          "Cobrança condominial",
          "Cobrança recorrente",
          "Cobrança judicial",
        ],
        sameAs: socialLinks.map((item) => item.href),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cobrança para condomínios",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              url: absoluteUrl(service.href),
              areaServed: "BR",
              provider: { "@id": organizationId },
            },
          })),
        },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  description: string;
  href: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: absoluteUrl(service.href),
    serviceType: "Cobrança condominial",
    areaServed: "BR",
    provider: {
      "@id": organizationId,
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}
