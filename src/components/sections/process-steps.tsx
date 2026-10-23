import { processSteps } from "@/content/process";
import { Section, SectionHeading } from "@/design-system/ui/section";

export function ProcessSteps({
  heading = true,
  id,
}: {
  heading?: boolean;
  id?: string;
}) {
  return (
    <Section id={id} labelledBy={heading ? "processo-titulo" : undefined}>
      {heading ? (
        <SectionHeading
          id="processo-titulo"
          eyebrow="Como funciona"
          title="Do diagnóstico à via judicial, sem pular etapa."
          description="Cada condomínio entra pelo mesmo caminho. A régua e o processo só avançam com o que a carteira mostrar."
        />
      ) : null}
      <ol className={heading ? "mt-12 grid gap-10 md:grid-cols-4 md:gap-6" : "grid gap-10 md:grid-cols-4 md:gap-6"}>
        {processSteps.map((step) => {
          const Title = heading ? "h3" : "h2";

          return (
            <li key={step.number}>
              <span className="flex h-14 w-14 items-center justify-center rounded-control bg-accent-soft text-accent">
                <ProcessIcon name={step.icon} />
              </span>
              <p className="mt-5 font-display text-sm font-semibold tracking-[0.16em] text-accent">
                {step.number}
              </p>
              <Title className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
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

function ProcessIcon({ name }: { name: (typeof processSteps)[number]["icon"] }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "diagnostico" ? (
        <>
          <rect x="6" y="4" width="14" height="18" rx="2" />
          <path d="M10 9h6M10 13h6M10 17h3" />
          <circle cx="21.5" cy="21.5" r="4.5" />
          <path d="M24.7 24.7 28 28" />
        </>
      ) : null}
      {name === "regua" ? (
        <>
          <rect x="3" y="11" width="26" height="10" rx="2" />
          <path d="M8 11v4M13 11v2.5M18 11v4M23 11v2.5M28 11v4" />
        </>
      ) : null}
      {name === "acordo" ? (
        <>
          <path d="M8 5h10l6 6v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
          <path d="M18 5v6h6" />
          <path d="M11 19.5 14 22.5 21 15" />
        </>
      ) : null}
      {name === "judicial" ? (
        <>
          <path d="M16 5v17" />
          <path d="M9 26h14" />
          <path d="M7 9h18" />
          <path d="M7 9 3 17h8L7 9z" />
          <path d="M25 9l-4 8h8l-4-8z" />
        </>
      ) : null}
    </svg>
  );
}
