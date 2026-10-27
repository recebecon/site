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
        "py-12 sm:py-16 lg:py-24",
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
        <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl sm:leading-tight lg:text-5xl lg:leading-[1.05]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-muted sm:mt-4 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
