import { cx } from "@/lib/cx";
import { Container } from "@/design-system/ui/container";

export function Section({
  id,
  children,
  tone = "default",
  className,
  labelledBy,
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "default" | "paper";
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(
        "py-10 sm:py-12 md:py-16 lg:py-20",
        tone === "paper" && "bg-paper",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-2.5 font-display text-[clamp(1.35rem,2.6vw,2.15rem)] font-semibold leading-tight tracking-tight text-ink sm:mt-3"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 max-w-2xl text-sm leading-6 text-muted sm:mt-3 sm:text-base sm:leading-7">
          {description}
        </p>
      ) : null}
    </div>
  );
}
