import { processSteps } from "@/content/process";
import { Section, SectionHeading } from "@/design-system/ui/section";

export function ProcessSteps({ heading = true }: { heading?: boolean }) {
  return (
    <Section labelledBy={heading ? "processo-titulo" : undefined}>
      {heading ? (
        <SectionHeading
          id="processo-titulo"
          eyebrow="Como funciona"
          title="Do diagnóstico à via judicial, sem pular etapa."
          description="Cada condomínio entra pelo mesmo caminho. A régua e o processo só avançam com o que a carteira mostrar."
        />
      ) : null}
      <ol className={heading ? "mt-12 grid gap-8 md:grid-cols-4" : "grid gap-8 md:grid-cols-4"}>
        {processSteps.map((step) => {
          const Title = heading ? "h3" : "h2";

          return (
            <li key={step.number}>
              <p className="font-display text-4xl font-semibold tracking-tight text-accent">
                {step.number}
              </p>
              <Title className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                {step.title}
              </Title>
              <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
