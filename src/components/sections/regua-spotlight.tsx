import Image from "next/image";
import { contactHref } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Section, SectionHeading } from "@/design-system/ui/section";

const beats = [
  "Lembrete no vencimento",
  "Aviso no atraso",
  "Proposta de acordo",
  "Judicial, se precisar",
] as const;

export function ReguaSpotlight() {
  return (
    <Section labelledBy="regua-titulo">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative min-h-72 overflow-hidden rounded-card sm:min-h-80 lg:min-h-[26rem] lg:order-2">
          <Image
            src="/media/home-regua.jpg"
            alt="Profissional revisando a carteira de taxas do condomínio."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="min-w-0 lg:order-1">
          <SectionHeading
            id="regua-titulo"
            eyebrow="Régua de cobrança"
            title="A cobrança que acompanha o mês."
            description="Cadência combinada com a administração: quem avisa, quando avisa e o próximo passo."
          />
          <ul className="mt-5 flex flex-wrap gap-2">
            {beats.map((item) => (
              <li
                key={item}
                className="rounded-control border border-line bg-paper px-3 py-2 text-sm font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button href={contactHref} className="mt-6 w-full sm:mt-7 sm:w-auto">
            Quero organizar a régua
          </Button>
        </div>
      </div>
    </Section>
  );
}
