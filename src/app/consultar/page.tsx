import { JsonLd } from "@/components/seo/json-ld";
import { ConsultaForm } from "@/components/sections/consulta-form";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/design-system/ui/container";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Verificar pendências",
  description:
    "Moradores verificam pendências da unidade na Recebecom com CPF ou CNPJ.",
  path: "/consultar",
});

export default function ConsultaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Verificar pendências", path: "/consultar" },
        ])}
      />
      <PageHeader
        eyebrow="Para moradores"
        title="Verifique pendências da unidade."
        description="A consulta mostra o que a Recebecom tem registrado para o documento de quem responde pela unidade. Síndico e administradora seguem pelo diagnóstico."
        crumbs={[{ name: "Início", path: "/" }, { name: "Verificar pendências" }]}
      />
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container className="max-w-xl">
          <ConsultaForm />
        </Container>
      </section>
    </>
  );
}
