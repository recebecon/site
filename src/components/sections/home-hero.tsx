import Image from "next/image";
import { contactHref, contactLabel } from "@/content/navigation";
import { ConsultaForm } from "@/components/sections/consulta-form";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_70%,var(--color-accent-soft)_0%,transparent_52%),linear-gradient(180deg,#fff_0%,var(--color-paper)_100%)]"
      />
      <Container className="relative grid items-stretch gap-8 pt-10 sm:pt-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 lg:pt-16">
        <div className="flex min-w-0 flex-col">
          <div className="motion-rise px-0 pb-6 md:pb-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase sm:text-sm">
              Cobrança para condomínios
            </p>
            <h1 className="mt-2.5 max-w-xl font-display text-[clamp(1.7rem,3.4vw,2.75rem)] leading-[1.08] font-semibold tracking-tight text-ink sm:mt-3">
              Caixa em dia, sem cobrança no improviso.
            </h1>
          </div>

          <div className="relative mt-auto w-full max-w-md self-center md:max-w-none md:self-stretch">
            <div
              aria-hidden
              className="pointer-events-none absolute top-[12%] left-[6%] h-[70%] w-[70%] rounded-full bg-accent-soft/70 blur-3xl"
            />
            <Image
              src="/media/woman-recebecom.png"
              alt="Colaboradora da Recebecom com o celular na mão."
              width={1151}
              height={1366}
              priority
              sizes="(max-width: 768px) 90vw, 42vw"
              className="relative z-0 mx-auto block h-auto w-[min(100%,20rem)] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(61,12,22,0.12)] sm:w-[min(100%,24rem)] md:mx-0 md:w-full md:max-w-[28rem] lg:max-w-[32rem]"
            />
          </div>
        </div>

        <div className="motion-rise flex min-w-0 flex-col justify-center gap-8 pb-10 sm:pb-12 md:gap-9 md:py-14 lg:py-16">
          <div className="rounded-card border-2 border-ink/10 bg-white p-5 shadow-[0_22px_48px_rgba(61,12,22,0.12)] sm:p-7 lg:p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:text-sm">
              Para moradores
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.25rem,2.2vw,1.65rem)] font-semibold tracking-tight text-ink">
              Verifique pendências da unidade
            </h2>
            <p className="mt-2.5 text-sm leading-6 text-muted sm:mt-3">
              Informe o CPF ou CNPJ do responsável. A consulta mostra o que está
              em aberto na unidade.
            </p>
            <div className="mt-6">
              <ConsultaForm compact />
            </div>
          </div>

          <div>
            <p className="max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Para síndicos e administradoras. Organizamos a taxa do mês e
              seguimos na via judicial quando o acordo não fecha.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={contactHref} className="w-full sm:w-auto">
                {contactLabel}
              </Button>
              <Button href="#como-funciona" variant="secondary" className="w-full sm:w-auto">
                Ver como funciona
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
