import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { GarantidorNote } from "@/components/sections/garantidor-note";
import { ServiceGrid } from "@/components/sections/service-grid";
import { PageHeader } from "@/components/layout/page-header";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Serviços",
  description:
    "Cobrança recorrente, cobrança judicial e Garantidor opcional para o caixa do condomínio. Para síndicos e administradoras.",
  path: "/servicos",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
        ])}
      />
      <PageHeader
        eyebrow="Serviços"
        title="Cobrança firme. Caixa protegido."
        description="Régua no ciclo do mês, via judicial quando couber e Garantidor sob interesse e aceite. Três frentes para quem administra o condomínio."
        crumbs={[{ name: "Início", path: "/" }, { name: "Serviços" }]}
      />
      <ServiceGrid heading={false} />
      <GarantidorNote tone="paper" />
      <CtaBand />
    </>
  );
}
