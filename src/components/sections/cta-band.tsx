import { contactHref, contactLabel } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export function CtaBand() {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-24" aria-labelledby="diagnostico-titulo">
      <Container>
        <div className="rounded-panel bg-inverse px-5 py-10 text-white sm:px-8 sm:py-12 md:px-14 md:py-16">
          <h2
            id="diagnostico-titulo"
            className="max-w-2xl font-display text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]"
          >
            O diagnóstico começa pela carteira, não por um pacote pronto.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-inverse-muted sm:text-lg sm:leading-8">
            Conte o tipo de condomínio e quem administra. A conversa seguinte
            separa o que cabe na régua e o que já pede cobrança judicial.
          </p>
          <Button href={contactHref} className="mt-7 w-full sm:mt-8 sm:w-auto">
            {contactLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
