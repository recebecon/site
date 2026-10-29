import { optionalGuarantor } from "@/content/partners";
import { Button } from "@/design-system/ui/button";
import { Section, SectionHeading } from "@/design-system/ui/section";
import { cx } from "@/lib/cx";

export function GarantidorNote({
  tone = "default",
}: {
  tone?: "default" | "paper";
}) {
  return (
    <Section tone={tone} labelledBy="garantidor-titulo">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div className="min-w-0">
          <SectionHeading
            id="garantidor-titulo"
            eyebrow={optionalGuarantor.eyebrow}
            title={optionalGuarantor.title}
            description={optionalGuarantor.summary}
          />
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button href={optionalGuarantor.href} className="w-full sm:w-auto">
              {optionalGuarantor.cta}
            </Button>
            <Button
              href={optionalGuarantor.evaluateHref}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {optionalGuarantor.evaluateCta}
            </Button>
          </div>
        </div>

        <ul
          className={cx(
            "grid gap-3 rounded-card border border-line p-5 sm:gap-4 sm:p-6 lg:p-7",
            tone === "paper" ? "bg-white" : "bg-paper",
          )}
        >
          {optionalGuarantor.points.map((point) => (
            <li
              key={point.title}
              className="min-w-0 border-b border-line pb-3 last:border-b-0 last:pb-0 sm:pb-4"
            >
              <p className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                {point.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
