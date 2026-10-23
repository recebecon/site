import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { HomeHero } from "@/components/sections/home-hero";
import { Principles } from "@/components/sections/principles";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SegmentGrid } from "@/components/sections/segment-grid";
import { ServiceGrid } from "@/components/sections/service-grid";
import { faqs } from "@/content/faq";
import { Container } from "@/design-system/ui/container";
import { SectionHeading } from "@/design-system/ui/section";
import { faqJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <HomeHero />
      <Principles />
      <ServiceGrid />
      <SegmentGrid />
      <ProcessSteps id="como-funciona" />
      <section className="bg-paper py-16 md:py-24" aria-labelledby="faq-titulo">
        <Container>
          <SectionHeading
            id="faq-titulo"
            eyebrow="Dúvidas"
            title="Perguntas de quem administra."
            description="Respostas diretas sobre o papel da Recebecom, a régua e a via judicial."
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
