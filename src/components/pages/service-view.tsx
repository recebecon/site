import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { services, type Service } from "@/content/services";
import { Container } from "@/design-system/ui/container";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export function ServiceView({ service }: { service: Service }) {
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Serviços", path: "/servicos" },
            { name: service.title, path: service.href },
          ]),
        ]}
      />
      <PageHeader
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
          { name: service.title },
        ]}
      />
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {service.promise}
            </p>
            <ul className="mt-10 space-y-6">
              {service.points.map((point) => (
                <li key={point.title}>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {point.title}
                  </h2>
                  <p className="mt-2 leading-7 text-muted">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-card bg-paper p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Na prática
            </h2>
            <ol className="mt-5 space-y-4">
              {service.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-ink">
                  <span className="font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </section>
      {others.length > 0 ? (
        <section className="border-t border-line py-12">
          <Container>
            <p className="text-muted">
              Veja também{" "}
              {others.map((item, index) => (
                <span key={item.slug}>
                  {index > 0 ? (index === others.length - 1 ? " e " : ", ") : null}
                  <Link href={item.href} className="font-semibold text-accent">
                    {item.title.toLowerCase()}
                  </Link>
                </span>
              ))}
              .
            </p>
          </Container>
        </section>
      ) : null}
      <CtaBand />
    </>
  );
}
