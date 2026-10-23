import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/design-system/ui/container";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Sobre",
  description:
    "A Recebecom cobra taxas condominiais para síndicos e administradoras, na via recorrente e na via judicial.",
  path: "/sobre",
});

const points = [
  {
    title: "O cliente é quem administra",
    description:
      "Síndico, administradora e conselho. A Recebecom não trata o condômino inadimplente como contratante.",
  },
  {
    title: "Duas frentes, um caixa",
    description:
      "A cobrança recorrente cuida da taxa no ciclo do mês. A cobrança judicial cuida do que essa via não recuperou.",
  },
  {
    title: "Condomínio é o foco",
    description:
      "Residencial, corporativo, galpão industrial e outros empreendimentos que dependem da taxa condominial.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
        ])}
      />
      <PageHeader
        eyebrow="Sobre"
        title="Cobrança condominial, do vencimento ao processo."
        description="A Recebecom existe para tirar a inadimplência do improviso. A administração continua no comando do condomínio. A cobrança passa a ter método."
        crumbs={[{ name: "Início", path: "/" }, { name: "Sobre" }]}
      />
      <section className="py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {points.map((point) => (
            <article key={point.title} className="rounded-card border border-line p-6">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {point.title}
              </h2>
              <p className="mt-3 leading-7 text-muted">{point.description}</p>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
