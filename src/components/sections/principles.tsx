import { Section, SectionHeading } from "@/design-system/ui/section";

const principles = [
  {
    title: "Cadência no automático",
    description: "Vencimento, atraso e acordo seguem a régua — sem lembrete solto no dia a dia.",
  },
  {
    title: "Acordo com critério",
    description: "Condição viável para o morador pagar e o caixa prever a entrada.",
  },
  {
    title: "Judicial quando cabe",
    description: "Só depois da via amigável, com a administração no acompanhamento.",
  },
] as const;

export function Principles() {
  return (
    <Section tone="paper" labelledBy="principios-titulo">
      <SectionHeading
        id="principios-titulo"
        eyebrow="O que muda"
        title="Simples no dia a dia. Firme no caixa."
        description="A cobrança deixa de depender de improviso. Tem ritmo, acordo e caminho formal quando a conversa não fecha."
      />
      <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
        {principles.map((item) => (
          <li key={item.title} className="lift min-w-0 rounded-card border border-line bg-white p-5">
            <h3 className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
