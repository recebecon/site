import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { ServiceGrid } from "@/components/sections/service-grid";
import { PageHeader } from "@/components/layout/page-header";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Serviços",
  description:
    "Cobrança recorrente e cobrança judicial da taxa condominial para síndicos e administradoras.",
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
        title="A taxa do mês e o débito que ficou para trás."
        description="A Recebecom separa a cobrança recorrente da cobrança judicial. As duas podem acontecer no mesmo condomínio, com status para quem administra."
        crumbs={[{ name: "Início", path: "/" }, { name: "Serviços" }]}
      />
      <ServiceGrid heading={false} />
      <CtaBand />
    </>
  );
}
