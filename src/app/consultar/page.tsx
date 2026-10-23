import { JsonLd } from "@/components/seo/json-ld";
import { ConsultaForm } from "@/components/sections/consulta-form";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/design-system/ui/container";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Consultar pendências",
  description:
    "Condômino consulta pendências de condomínio na Recebecom com CPF ou CNPJ.",
  path: "/consultar",
});

export default function ConsultaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Consultar pendências", path: "/consultar" },
        ])}
      />
      <PageHeader
        eyebrow="Para o condômino"
        title="Consulte pendências no CPF ou CNPJ."
        description="A consulta mostra o que a Recebecom tem registrado para o documento do responsável pela unidade. Síndico e administradora seguem pelo diagnóstico."
        crumbs={[{ name: "Início", path: "/" }, { name: "Consultar pendências" }]}
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-xl">
          <ConsultaForm />
        </Container>
      </section>
    </>
  );
}
