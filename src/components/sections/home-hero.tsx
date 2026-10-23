import Link from "next/link";
import { contactHref, contactLabel } from "@/content/navigation";
import { ConsultaForm } from "@/components/sections/consulta-form";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export function HomeHero() {
  return (
    <section className="border-b border-line">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            Cobrança para condomínios
          </p>
          <h1 className="mt-4 font-display text-[2.7rem] leading-[0.98] font-semibold tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
            O caixa do condomínio em dia, da taxa mensal à{" "}
            <span className="text-accent">cobrança judicial</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted md:text-xl">
            Para síndicos e administradoras. A Recebecom cobra a taxa no ciclo
            do mês e conduz a via judicial quando o acordo não fecha.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contactHref} className="w-full sm:w-auto">
              {contactLabel}
            </Button>
            <Button href="#como-funciona" variant="secondary" className="w-full sm:w-auto">
              Ver como funciona
            </Button>
          </div>
        </div>
        <div className="motion-rise rounded-card border border-line bg-paper p-6 md:p-8">
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Para o condômino
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
            Consulte pendências no CPF ou CNPJ.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Digite o documento de quem responde pela unidade. Se houver registro, a lista mostra
            condomínio, unidade, valor e vencimento.
          </p>
          <div className="mt-6">
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
