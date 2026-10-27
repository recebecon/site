import Link from "next/link";
import { segments } from "@/content/segments";
import { Section, SectionHeading } from "@/design-system/ui/section";
import { cx } from "@/lib/cx";

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
      <ul
        className={cx(
          "grid gap-3 sm:grid-cols-2 sm:gap-4",
          heading && "mt-6 sm:mt-8 lg:mt-10",
        )}
      >
        {segments.map((segment) => {
          const Title = heading ? "h3" : "h2";

          return (
            <li key={segment.slug} className="min-w-0">
              <Link
                href={segment.href}
                className="lift block h-full rounded-card border border-line bg-white p-5 sm:p-6 hover:border-accent"
              >
                <Title className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {segment.title}
                </Title>
                <p className="mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  {segment.summary}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
