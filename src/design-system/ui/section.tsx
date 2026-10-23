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
        "py-16 md:py-24",
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
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-[1.05]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
