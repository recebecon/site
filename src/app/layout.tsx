import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { CookieBanner } from "@/components/consent/cookie-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { shareImage, site } from "@/content/site";
import { siteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
  adjustFontFallback: true,
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Recebecom | Cobrança recorrente e judicial para condomínios",
    template: "%s | Recebecom",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: "Recebecom | Cobrança recorrente e judicial para condomínios",
    description: site.description,
    url: site.url,
    images: [
      {
        url: shareImage.path,
        width: shareImage.width,
        height: shareImage.height,
        alt: shareImage.alt,
        type: shareImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recebecom | Cobrança recorrente e judicial para condomínios",
    description: site.description,
    images: [
      {
        url: shareImage.path,
        width: shareImage.width,
        height: shareImage.height,
        alt: shareImage.alt,
        type: shareImage.type,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EFEA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.language}
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-ink">
        <JsonLd data={siteJsonLd()} />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-white focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
