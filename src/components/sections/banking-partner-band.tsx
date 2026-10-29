import Image from "next/image";
import { bankingCorrespondent } from "@/content/partners";
import { Container } from "@/design-system/ui/container";

export function BankingPartnerBand() {
  return (
    <section
      className="border-t border-line bg-paper py-12 sm:py-14 md:py-16"
      aria-labelledby="parceiro-bancario-titulo"
    >
      <Container className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:text-sm">
          {bankingCorrespondent.role}
        </p>
        <h2
          id="parceiro-bancario-titulo"
          className="mt-2.5 max-w-xl font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold tracking-tight text-ink"
        >
          Correspondência bancária com o Santander.
        </h2>
        <p className="mt-2.5 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
          O garantidor e as operações de crédito só entram com interesse,
          avaliação e aceite de quem administra.
        </p>
        <div className="mt-8 flex w-full max-w-lg items-center justify-center rounded-card border border-line bg-white px-10 py-8 shadow-[0_16px_40px_rgba(61,12,22,0.1)] sm:mt-10 sm:px-14 sm:py-11">
          <Image
            src={bankingCorrespondent.logoSrc}
            alt={bankingCorrespondent.logoAlt}
            width={bankingCorrespondent.logoWidth}
            height={bankingCorrespondent.logoHeight}
            className="h-12 w-auto sm:h-14 md:h-16"
            unoptimized
            priority={false}
          />
        </div>
      </Container>
    </section>
  );
}
