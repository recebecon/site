import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Container } from "@/design-system/ui/container";

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: { name: string; path?: string }[];
}) {
  return (
    <header className="border-b border-line bg-paper">
      <Container className="py-8 sm:py-12 md:py-14 lg:py-16">
        <Breadcrumb items={crumbs} />
        <p className="mt-5 text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:mt-6 sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-2.5 max-w-4xl font-display text-[clamp(1.5rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-ink sm:mt-3">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>
      </Container>
    </header>
  );
}
