import Link from "next/link";
import { segments } from "@/content/segments";
import { Section, SectionHeading } from "@/design-system/ui/section";
import { cx } from "@/lib/cx";

export function SegmentGrid({
  heading = true,
  tone = "default",
}: {
  heading?: boolean;
  tone?: "default" | "paper";
}) {
  return (
    <Section tone={tone} labelledBy={heading ? "segmentos-titulo" : undefined}>
      {heading ? (
        <SectionHeading
          id="segmentos-titulo"
          eyebrow="Segmentos"
          title="Cada condomínio pede um jeito de cobrar."
          description="Residencial, corporativo, galpão ou o que ficar fora dessa lista."
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
                <Title className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {segment.title}
                </Title>
                <p className="mt-1.5 text-sm leading-6 text-muted sm:mt-2">
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
