import Image from "next/image";
import { contactHref, contactLabel } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export function CtaBand() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20" aria-labelledby="diagnostico-titulo">
      <Container>
        <div className="overflow-hidden rounded-panel bg-inverse text-white md:grid md:grid-cols-2">
          <div className="relative min-h-56 sm:min-h-64 md:min-h-full">
            <Image
              src="/media/home-cta.jpg"
              alt="Síndico e administradora conversando sobre a cobrança do condomínio."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
            <p className="text-xs font-semibold tracking-[0.14em] text-inverse-muted uppercase sm:text-sm">
              Diagnóstico
            </p>
            <h2
              id="diagnostico-titulo"
              className="mt-2 max-w-md font-display text-[clamp(1.35rem,2.5vw,2rem)] font-semibold leading-tight tracking-tight"
            >
              Vamos olhar a carteira juntos?
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-inverse-muted sm:mt-2.5 sm:text-base sm:leading-7">
              Conte o condomínio e quem administra. A gente separa o que cabe na
              régua e o que já pede via judicial.
            </p>
            <Button href={contactHref} className="mt-5 w-full sm:mt-6 sm:w-auto">
              {contactLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
