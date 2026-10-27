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
      <Container className="py-10 sm:py-14 lg:py-20">
        <Breadcrumb items={crumbs} />
        <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-accent uppercase sm:mt-8">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-[1.9rem] font-semibold tracking-tight text-ink sm:text-4xl sm:leading-tight md:text-6xl md:leading-[1.02]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      </Container>
    </header>
  );
}
