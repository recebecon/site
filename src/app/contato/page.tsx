import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/design-system/ui/container";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Contato",
  description:
    "Peça um diagnóstico da cobrança do condomínio. A Recebecom atende síndicos, administradoras e conselhos.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />
      <PageHeader
        eyebrow="Contato"
        title="Conte a carteira. O diagnóstico vem em seguida."
        description="Síndico, administradora ou conselho: diga o tipo de condomínio e o que está em aberto. Sem telefone insistente nesta página."
        crumbs={[{ name: "Início", path: "/" }, { name: "Contato" }]}
      />
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container className="max-w-3xl">
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
