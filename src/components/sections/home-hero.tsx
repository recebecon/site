import Link from "next/link";
import { contactHref, contactLabel } from "@/content/navigation";
import { ConsultaForm } from "@/components/sections/consulta-form";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export function HomeHero() {
  return (
    <section className="border-b border-line">
      <Container className="grid items-start gap-6 py-10 sm:gap-8 sm:py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-8 md:py-14 lg:gap-12 lg:py-16 xl:py-20">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            Cobrança para condomínios
          </p>
          <h1 className="mt-3 font-display text-[clamp(1.85rem,4.2vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-ink sm:mt-4 sm:leading-[1.02]">
            O caixa do condomínio em dia, da taxa mensal à{" "}
            <span className="text-accent">cobrança judicial</span>.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
            Para síndicos e administradoras. A Recebecom cobra a taxa no ciclo
            do mês e conduz a via judicial quando o acordo não fecha.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
            <Button href={contactHref} className="w-full sm:w-auto">
              {contactLabel}
            </Button>
            <Button href="#como-funciona" variant="secondary" className="w-full sm:w-auto">
              Ver como funciona
            </Button>
          </div>
        </div>
        <div className="motion-rise min-w-0 rounded-card border border-line bg-paper p-5 sm:p-6 lg:p-7">
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Para moradores
          </p>
          <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl lg:text-3xl">
            Verifique pendências da unidade.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Digite o CPF ou CNPJ de quem responde pela unidade. Se houver
            registro, a lista mostra condomínio, unidade, valor e vencimento.
          </p>
          <div className="mt-5 sm:mt-6">
            <ConsultaForm compact />
          </div>
          <p className="mt-4 text-sm text-muted">
            É síndico ou administradora?{" "}
            <Link href={contactHref} className="font-semibold text-accent">
              Peça um diagnóstico
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
