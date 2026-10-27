import { contactHref, contactLabel } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export function CtaBand() {
  return (
    <section className="pb-10 sm:pb-12 md:pb-16 lg:pb-20" aria-labelledby="diagnostico-titulo">
      <Container>
        <div className="rounded-panel bg-inverse px-5 py-9 text-white sm:px-8 sm:py-11 md:px-12 md:py-14 lg:px-14">
          <h2
            id="diagnostico-titulo"
            className="max-w-2xl font-display text-[clamp(1.6rem,3.2vw,2.75rem)] font-semibold leading-tight tracking-tight"
          >
            O diagnóstico começa pela carteira, não por um pacote pronto.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-inverse-muted sm:text-lg sm:leading-8">
            Conte o tipo de condomínio e quem administra. A conversa seguinte
            separa o que cabe na régua e o que já pede cobrança judicial.
          </p>
          <Button href={contactHref} className="mt-6 w-full sm:mt-7 sm:w-auto">
            {contactLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
