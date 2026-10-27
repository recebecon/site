import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { ProcessSteps } from "@/components/sections/process-steps";
import { PageHeader } from "@/components/layout/page-header";
import { faqs } from "@/content/faq";
import { Container } from "@/design-system/ui/container";
import { SectionHeading } from "@/design-system/ui/section";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Como funciona",
  description:
    "Diagnóstico, régua de cobrança recorrente, acordo e via judicial para a taxa condominial.",
  path: "/como-funciona",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Como funciona", path: "/como-funciona" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Como funciona"
        title="Primeiro a carteira. Depois a régua. O fórum, se ainda fizer falta."
        description="O caminho é o mesmo para residencial, corporativo, galpão industrial e outros condomínios. O que muda é o que a inadimplência pede."
        crumbs={[{ name: "Início", path: "/" }, { name: "Como funciona" }]}
      />
      <ProcessSteps heading={false} />
      <section className="bg-paper py-10 sm:py-12 md:py-16 lg:py-20" aria-labelledby="faq-processo">
        <Container>
          <SectionHeading
            id="faq-processo"
            eyebrow="Dúvidas"
            title="Antes de pedir o diagnóstico."
          />
          <div className="mt-10">
            <FaqList />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
