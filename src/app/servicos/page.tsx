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
    "Cobrança recorrente, cobrança judicial e garantidor opcional para o caixa do condomínio. Para síndicos e administradoras.",
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
        title="Cobrança, judicial e garantidor."
        description="A régua cuida da taxa do mês. A judicial entra quando a via amigável se esgota. O garantidor é crédito opcional: só sob interesse, avaliação e aceite."
        crumbs={[{ name: "Início", path: "/" }, { name: "Serviços" }]}
      />
      <ServiceGrid heading={false} />
      <GarantidorNote tone="paper" />
      <CtaBand />
    </>
  );
}
