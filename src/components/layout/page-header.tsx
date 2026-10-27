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
        <p className="mt-5 text-sm font-semibold tracking-[0.14em] text-accent uppercase sm:mt-7">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(1.75rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      </Container>
    </header>
  );
}
