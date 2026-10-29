import { contactHref } from "@/content/navigation";
import { reguaCopy, reguaSteps } from "@/content/regua";
import { Button } from "@/design-system/ui/button";
import { Section, SectionHeading } from "@/design-system/ui/section";
import { cx } from "@/lib/cx";

export function ReguaSpotlight() {
  return (
    <Section labelledBy="regua-titulo">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0 lg:sticky lg:top-28">
          <SectionHeading
            id="regua-titulo"
            eyebrow={reguaCopy.eyebrow}
            title={reguaCopy.title}
            description={reguaCopy.description}
          />
          <p className="mt-4 max-w-md text-sm font-medium leading-6 text-ink sm:text-base sm:leading-7">
            {reguaCopy.support}
          </p>
          <Button href={contactHref} className="mt-6 w-full sm:mt-8 sm:w-auto">
            {reguaCopy.cta}
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-card border border-line bg-paper p-5 sm:p-6 lg:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-8 left-[2.05rem] w-px bg-line sm:left-[2.3rem] sm:inset-y-10"
          />
          <ol aria-label="Passos da régua de comunicação" className="relative">
            {reguaSteps.map((step, index) => {
              const last = index === reguaSteps.length - 1;
              return (
                <li
                  key={step.title}
                  className={cx("relative flex gap-4 sm:gap-5", !last && "pb-6 sm:pb-7")}
                >
                  <span
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-white shadow-[0_8px_20px_rgba(107,17,38,0.28)] sm:h-11 sm:w-11 sm:text-base"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 pt-1.5 sm:pt-2">
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                      {step.moment}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted sm:text-[0.9375rem] sm:leading-7">
                      {step.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
