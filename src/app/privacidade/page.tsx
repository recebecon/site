import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/design-system/ui/container";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Privacidade",
  description:
    "Como a Recebecom trata os dados enviados no pedido de diagnóstico da cobrança condominial.",
  path: "/privacidade",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Privacidade", path: "/privacidade" },
        ])}
      />
      <PageHeader
        eyebrow="Privacidade"
        title="O que fazemos com os dados que você envia."
        description="O diagnóstico da administração e a consulta de pendências do condômino tratam dados diferentes. Esta página não substitui um contrato com o condomínio."
        crumbs={[{ name: "Início", path: "/" }, { name: "Privacidade" }]}
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-8 text-base leading-8 text-ink">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Quais dados</h2>
            <p className="mt-3 text-muted">
              No diagnóstico: nome, e-mail, telefone, papel de quem pede o contato,
              tipo de condomínio e a mensagem sobre a carteira. Na consulta de
              pendências: o CPF ou CNPJ informado pelo próprio titular.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Para que</h2>
            <p className="mt-3 text-muted">
              O diagnóstico serve para a equipe responder quem administra o condomínio.
              A consulta serve para o titular ver pendências registradas na Recebecom
              naquele CPF ou CNPJ. Os dados não são usados para anúncio e não são vendidos.
              O site não instala cookie de publicidade.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Para onde vão</h2>
            <p className="mt-3 text-muted">
              O envio só acontece quando a Recebecom liga o canal correspondente. Até
              lá, os formulários validam os campos e informam que o canal ainda não
              está ligado. Não há banco de dados neste site. O CPF ou CNPJ da consulta
              não fica gravado aqui.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Seus direitos</h2>
            <p className="mt-3 text-muted">
              Você pode pedir acesso, correção ou exclusão pelo mesmo formulário de
              contato, descrevendo o pedido na mensagem. O atendimento segue a Lei Geral
              de Proteção de Dados.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
