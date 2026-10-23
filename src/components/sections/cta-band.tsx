import { contactHref, contactLabel } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export function CtaBand() {
  return (
    <section className="pb-16 md:pb-24" aria-labelledby="diagnostico-titulo">
      <Container>
        <div className="rounded-panel bg-inverse px-6 py-12 text-white md:px-14 md:py-16">
          <h2
            id="diagnostico-titulo"
            className="max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]"
          >
            O diagnóstico começa pela carteira, não por um pacote pronto.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-inverse-muted">
            Conte o tipo de condomínio e quem administra. A conversa seguinte
            separa o que cabe na régua e o que já pede cobrança judicial.
          </p>
          <Button href={contactHref} className="mt-8">
            {contactLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
