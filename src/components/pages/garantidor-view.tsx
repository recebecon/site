import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { BankingPartnerBand } from "@/components/sections/banking-partner-band";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { garantidorService } from "@/content/garantidor";
import { bankingCorrespondent } from "@/content/partners";
import { services } from "@/content/services";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export function GarantidorView() {
  const service = garantidorService;

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            title: service.title,
            description: service.description,
            href: service.href,
          }),
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

      <section className="border-b border-line py-10 sm:py-12 md:py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <p className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-ink">
              {service.promise}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {service.positioning}
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <Button href={service.cta.href} className="w-full shrink-0">
              {service.cta.label}
            </Button>
            <SantanderBadge />
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12 md:py-16 lg:py-20" aria-labelledby="beneficios-garantidor">
        <Container>
          <h2
            id="beneficios-garantidor"
            className="font-display text-[clamp(1.35rem,2.6vw,2.15rem)] font-semibold tracking-tight text-ink"
          >
            Benefícios com impacto no caixa.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            O que muda para síndico, administradora e conselho. E o que muda na
            convivência das unidades.
          </p>
          <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-6">
            <BenefitPanel
              title={service.condoBenefits.title}
              items={service.condoBenefits.items}
              emphasis
            />
            <BenefitPanel
              title={service.unitBenefits.title}
              items={service.unitBenefits.items}
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-10 sm:py-12 md:py-16 lg:py-20" aria-labelledby="diferenca-garantidor">
        <Container>
          <h2
            id="diferenca-garantidor"
            className="font-display text-[clamp(1.35rem,2.6vw,2.15rem)] font-semibold tracking-tight text-ink"
          >
            {service.differences.title}
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
            {service.differences.items.map((item) => (
              <li
                key={item.title}
                className="rounded-card border border-line bg-white p-5 sm:p-6"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.85fr)] lg:gap-12">
          <div className="min-w-0">
            <h2 className="font-display text-[clamp(1.35rem,2.6vw,2.15rem)] font-semibold tracking-tight text-ink">
              Na prática
            </h2>
            <ol className="mt-6 space-y-5 sm:mt-8">
              {service.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-lg font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-0.5 text-base leading-7 text-ink">{step}</p>
                </li>
              ))}
            </ol>
            <Button href={service.cta.href} className="mt-8 w-full sm:mt-10 sm:w-auto">
              {service.cta.label}
            </Button>
          </div>
          <aside className="h-fit rounded-card border border-line bg-paper p-6 sm:p-7">
            <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              Também na Recebecom
            </p>
            <ul className="mt-4 space-y-3">
              {services
                .filter((item) => item.slug !== "garantidor")
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={item.href}
                      className="font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.summary}</p>
                  </li>
                ))}
            </ul>
          </aside>
        </Container>
      </section>

      <BankingPartnerBand />
      <CtaBand />
    </>
  );
}

function SantanderBadge() {
  return (
    <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm leading-5 text-muted">
      <span>Correspondente bancário:</span>
      <Image
        src={bankingCorrespondent.logoSrc}
        alt={bankingCorrespondent.logoAlt}
        width={bankingCorrespondent.logoWidth}
        height={bankingCorrespondent.logoHeight}
        className="h-6 w-auto sm:h-7"
        unoptimized
      />
    </p>
  );
}

function BenefitPanel({
  title,
  items,
  emphasis = false,
}: {
  title: string;
  items: readonly string[];
  emphasis?: boolean;
}) {
  return (
    <div
      className={
        emphasis
          ? "rounded-card bg-inverse p-6 text-white sm:p-8"
          : "rounded-card border border-line bg-white p-6 sm:p-8"
      }
    >
      <h3
        className={
          emphasis
            ? "font-display text-xl font-semibold tracking-tight text-white sm:text-2xl"
            : "font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl"
        }
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3 sm:mt-6">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 sm:text-[0.9375rem] sm:leading-7">
            <span
              className={
                emphasis
                  ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                  : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              }
              aria-hidden
            />
            <span className={emphasis ? "text-white/90" : "text-muted"}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
