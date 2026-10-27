import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { consentCookie } from "@/lib/consent";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { Container } from "@/design-system/ui/container";

export const metadata = createMetadata({
  title: "Cookies",
  description:
    "A Recebecom grava um cookie essencial para lembrar o aviso da LGPD. Não há cookie de anúncio.",
  path: "/cookies",
});

const months = Math.round(consentCookie.maxAge / (60 * 60 * 24 * 30));

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Cookies", path: "/cookies" },
        ])}
      />
      <PageHeader
        eyebrow="Cookies"
        title="O que este site guarda no navegador."
        description="O botão Aceitar grava um cookie essencial com a sua concordância. Cookie de anúncio exigiria outro consentimento. Este site não usa."
        crumbs={[{ name: "Início", path: "/" }, { name: "Cookies" }]}
      />
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container className="max-w-3xl space-y-10 text-base leading-8 text-ink">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Essencial
            </h2>
            <dl className="mt-4 space-y-3 text-muted">
              <div>
                <dt className="font-semibold text-ink">Nome</dt>
                <dd>{consentCookie.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Finalidade</dt>
                <dd>Registrar que você aceitou a Política de Privacidade e este aviso.</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Duração</dt>
                <dd>Cerca de {months} meses.</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Base</dt>
                <dd>
                  O registro nasce no botão Aceitar. Navegar pelo site não grava
                  a concordância.
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              O que não usamos
            </h2>
            <p className="mt-3 text-muted">
              Não há cookie de publicidade, medição de audiência ou pixel de rede
              social. O diagnóstico e a consulta não gravam o que você digitou em
              cookie. O CPF ou CNPJ não fica no navegador.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Como apagar
            </h2>
            <p className="mt-3 text-muted">
              Apague os cookies deste site nas configurações do navegador. O site
              continua utilizável, e o aviso volta na visita seguinte. O tratamento
              dos formulários está na{" "}
              <Link href="/privacidade" className="text-accent underline-offset-4 hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
