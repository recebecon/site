import Link from "next/link";
import { services, type Service } from "@/content/services";
import { Section, SectionHeading } from "@/design-system/ui/section";
import { cx } from "@/lib/cx";

export function ServiceGrid({
  heading = true,
}: {
  heading?: boolean;
}) {
  return (
    <Section labelledBy={heading ? "servicos-titulo" : undefined}>
      {heading ? (
        <SectionHeading
          id="servicos-titulo"
          eyebrow="Serviços"
          title="Duas cobranças. O mesmo condomínio."
          description="A taxa deste mês e o débito que já envelheceu não se resolvem do mesmo jeito. A Recebecom separa as frentes e mantém as duas visíveis para a administração."
        />
      ) : null}
      <div className={cx("grid gap-3 sm:gap-4 md:grid-cols-2", heading && "mt-8 sm:mt-10 lg:mt-12")}>
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            emphasis={index === 1}
            titleTag={heading ? "h3" : "h2"}
          />
        ))}
      </div>
    </Section>
  );
}

function ServiceCard({
  service,
  emphasis,
  titleTag,
}: {
  service: Service;
  emphasis: boolean;
  titleTag: "h2" | "h3";
}) {
  const Title = titleTag;

  return (
    <article
      className={cx(
        "lift flex min-w-0 flex-col rounded-card p-5 sm:p-7 md:p-9",
        emphasis ? "bg-inverse text-white" : "border border-line bg-white",
      )}
    >
      <p
        className={cx(
          "text-sm font-semibold tracking-[0.12em] uppercase",
          emphasis ? "text-paper" : "text-accent",
        )}
      >
        {service.eyebrow}
      </p>
      <Title className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {service.title}
      </Title>
      <p className={cx("mt-4 flex-1 leading-7", emphasis ? "text-inverse-muted" : "text-muted")}>
        {service.description}
      </p>
      <Link
        href={service.href}
        className={cx(
          "mt-8 text-sm font-semibold",
          emphasis ? "text-white" : "text-accent",
        )}
      >
        Entender a {service.shortTitle.toLowerCase()}
      </Link>
    </article>
  );
}
