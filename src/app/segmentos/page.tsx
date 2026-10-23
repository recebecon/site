import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { SegmentGrid } from "@/components/sections/segment-grid";
import { PageHeader } from "@/components/layout/page-header";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Segmentos",
  description:
    "Cobrança para condomínios residenciais, corporativos, galpões industriais e outros empreendimentos.",
  path: "/segmentos",
});

export default function SegmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Segmentos", path: "/segmentos" },
        ])}
      />
      <PageHeader
        eyebrow="Segmentos"
        title="O tipo de condomínio muda a cobrança."
        description="Residencial, corporativo, galpão industrial ou outro empreendimento: a taxa é a mesma natureza de receita, com carteiras diferentes."
        crumbs={[{ name: "Início", path: "/" }, { name: "Segmentos" }]}
      />
      <SegmentGrid heading={false} />
      <CtaBand />
    </>
  );
}
