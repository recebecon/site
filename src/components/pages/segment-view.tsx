import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { services } from "@/content/services";
import type { Segment } from "@/content/segments";
import { Container } from "@/design-system/ui/container";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export function SegmentView({ segment }: { segment: Segment }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Segmentos", path: "/segmentos" },
          { name: segment.title, path: segment.href },
        ])}
      />
      <PageHeader
        eyebrow="Segmento"
        title={segment.title}
        description={segment.description}
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Segmentos", path: "/segmentos" },
          { name: segment.title },
        ]}
      />
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              O que costuma chegar no diagnóstico
            </h2>
            <ul className="mt-6 space-y-3">
              {segment.situations.map((situation) => (
                <li key={situation} className="rounded-card border border-line px-4 py-3 leading-7">
                  {situation}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              As duas cobranças cabem aqui
            </h2>
            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="group block rounded-card bg-paper p-5">
                    <p className="font-display text-2xl font-semibold tracking-tight text-ink group-hover:text-accent">
                      {service.title}
                    </p>
                    <p className="mt-2 leading-7 text-muted">{service.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
