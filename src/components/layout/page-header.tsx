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
      <Container className="py-14 md:py-20">
        <Breadcrumb items={crumbs} />
        <p className="mt-8 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl md:leading-[1.02]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{description}</p>
      </Container>
    </header>
  );
}
