import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/design-system/ui/container";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Privacidade",
  description:
    "Quem trata os dados neste site, para que servem, em qual base da LGPD e como pedir acesso, correção ou exclusão.",
  path: "/privacidade",
});

const rights = [
  "Confirmação de que tratamos dados seus e acesso a eles.",
  "Correção de dado incompleto, inexato ou desatualizado.",
  "Anonimização, bloqueio ou exclusão de dado desnecessário ou tratado fora destas finalidades.",
  "Informação sobre com quem um dado foi compartilhado.",
  "Revogação do envio do diagnóstico e eliminação do pedido, quando a lei permitir.",
];

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
        title="Como a Recebecom trata dados pessoais neste site."
        description="A Lei Geral de Proteção de Dados vale para o diagnóstico de quem administra o condomínio e para a consulta de pendências do condômino. Esta página não substitui o contrato com o condomínio."
        crumbs={[{ name: "Início", path: "/" }, { name: "Privacidade" }]}
      />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-10 text-base leading-8 text-ink">
          <Block title="Quem trata">
            <p>
              A Recebecom é a controladora dos dados enviados no formulário de
              diagnóstico: nome, e-mail, telefone, papel, tipo de condomínio e
              mensagem. Ela decide esse tratamento para responder quem administra
              o condomínio.
            </p>
            <p>
              Na consulta de pendências, a Recebecom trata o CPF ou CNPJ para
              localizar registros da cobrança da taxa. O condomínio e a
              administradora seguem responsáveis pela gestão do condomínio e pela
              origem da dívida.
            </p>
          </Block>
          <Block title="Quais dados">
            <p>
              No diagnóstico: nome, e-mail, telefone, papel de quem pede o contato
              (síndico, administradora, conselho ou outro), tipo de condomínio e a
              mensagem sobre a carteira.
            </p>
            <p>
              Na consulta: o CPF ou CNPJ que a própria pessoa informa. Se houver
              registro, a resposta mostra condomínio, unidade, descrição, valor,
              vencimento e status.
            </p>
            <p>
              O CPF é dado pessoal. Este site não pede dado sensível, como saúde,
              biometria ou convicção.
            </p>
          </Block>
          <Block title="Para que, e com qual base">
            <p>
              O diagnóstico existe para a equipe avaliar a cobrança e retornar o
              contato. A base é o pedido de quem administra, como procedimento
              preliminar a um contrato, no art. 7º, inciso V, da Lei nº 13.709/2018.
            </p>
            <p>
              A consulta existe para a pessoa ver pendências já registradas naquele
              documento. A base é o legítimo interesse de informar a cobrança da
              taxa e o do titular de conhecer o próprio registro, no art. 7º,
              inciso IX. Sem o documento, a consulta não acontece.
            </p>
            <p>
              Sem nome e um meio de contato, o diagnóstico não tem como ser
              respondido. Os dados não são usados para anúncio e não são vendidos.
            </p>
          </Block>
          <Block title="Para onde vão">
            <p>
              O pedido de diagnóstico segue para o atendimento da Recebecom quando
              esse canal está ligado. Até lá, o formulário só valida os campos e
              avisa que o envio ainda não está disponível.
            </p>
            <p>
              A consulta pergunta ao registro de pendências e devolve o resultado
              na tela. O CPF ou CNPJ não entra no endereço da página, não fica em
              cookie e não é gravado neste site. Não há cadastro próprio aqui.
            </p>
          </Block>
          <Block title="Cookies">
            <p>
              O botão Aceitar, no fim da tela, grava um cookie essencial com a
              concordância desta política. Não há cookie de publicidade, medição de audiência ou
              pixel de rede social. O detalhe está na{" "}
              <Link href="/cookies" className="text-accent underline-offset-4 hover:underline">
                Política de Cookies
              </Link>
              .
            </p>
          </Block>
          <Block title="Seus direitos">
            <p>
              A LGPD, no art. 18, assegura estes pedidos sobre os dados tratados
              neste site:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              {rights.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
            <p>
              Envie o pedido pelo{" "}
              <Link href="/contato" className="text-accent underline-offset-4 hover:underline">
                formulário de contato
              </Link>
              , com o que deseja na mensagem. A Recebecom responde pelo e-mail ou
              telefone informados. A Autoridade Nacional de Proteção de Dados
              também recebe petições em{" "}
              <a
                href="https://www.gov.br/anpd/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                gov.br/anpd
              </a>
              .
            </p>
          </Block>
          <Block title="Crianças e segurança">
            <p>
              O site fala com quem administra o condomínio e com o responsável pela
              unidade. Não é dirigido a criança.
            </p>
            <p>
              O acesso ao site ocorre por conexão protegida. Os campos são
              conferidos antes do envio. O documento da consulta permanece fora do
              endereço da página e fora dos cookies.
            </p>
          </Block>
        </Container>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-3 text-muted">{children}</div>
    </div>
  );
}
