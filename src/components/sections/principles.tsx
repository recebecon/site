import Link from "next/link";
import { services } from "@/content/services";
import { Section, SectionHeading } from "@/design-system/ui/section";

const principles = [
  {
    title: "Régua, não improviso",
    description: "A taxa do mês segue uma cadência combinada com a administração.",
  },
  {
    title: "Acordo com critério",
    description: "A condição de pagamento existe para o caixa voltar a prever a entrada.",
  },
  {
    title: "Judicial quando cabe",
    description: "O processo não é o primeiro aviso. Entra depois da via amigável.",
  },
  {
    title: "Quem administra enxerga",
    description: "Síndico e administradora acompanham etapa, status e próximo passo.",
  },
] as const;

export function Principles() {
  return (
    <Section tone="paper" labelledBy="principios-titulo">
      <SectionHeading
        id="principios-titulo"
        eyebrow="O que a cobrança entrega"
        title="Clareza para quem responde pelo caixa."
        description="Cadência, acordo e via judicial. Cada condomínio acompanha a própria carteira, sem promessa genérica de resultado."
      />
      <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-4">
        {principles.map((item) => (
          <li key={item.title} className="lift rounded-card border border-line bg-white p-4 sm:p-5">
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        As duas frentes estão em{" "}
        <Link href={services[0].href} className="font-semibold text-accent">
          {services[0].title.toLowerCase()}
        </Link>{" "}
        e{" "}
        <Link href={services[1].href} className="font-semibold text-accent">
          {services[1].title.toLowerCase()}
        </Link>
        .
      </p>
    </Section>
  );
}
