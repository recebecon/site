import Link from "next/link";
import { segments } from "@/content/segments";
import { Section, SectionHeading } from "@/design-system/ui/section";

export function SegmentGrid({ heading = true }: { heading?: boolean }) {
  return (
    <Section tone="paper" labelledBy={heading ? "segmentos-titulo" : undefined}>
      {heading ? (
        <SectionHeading
          id="segmentos-titulo"
          eyebrow="Segmentos"
          title="Residencial, corporativo, galpão e o que ficar de fora dessa lista."
          description="A taxa condominial muda de valor e de convivência. O método de cobrança parte do tipo de empreendimento."
        />
      ) : null}
      <ul className={heading ? "mt-12 grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
        {segments.map((segment) => {
          const Title = heading ? "h3" : "h2";

          return (
            <li key={segment.slug}>
              <Link
                href={segment.href}
                className="lift block h-full rounded-card border border-line bg-white p-6 hover:border-accent"
              >
                <Title className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {segment.title}
                </Title>
                <p className="mt-2 leading-7 text-muted">{segment.summary}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
