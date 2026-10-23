import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-3 max-w-xl font-display text-5xl font-semibold tracking-tight text-ink">
          Esta página não está no mapa do site.
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-8 text-muted">
          Volte para a home ou peça um diagnóstico da cobrança do condomínio.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Ir para o início</Button>
          <Button href="/contato" variant="secondary">
            Falar com a Recebecom
          </Button>
        </div>
      </Container>
    </section>
  );
}
