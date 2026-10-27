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
      <div className={cx("grid gap-3 sm:gap-4 md:grid-cols-2", heading && "mt-6 sm:mt-8 lg:mt-10")}>
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
        "lift flex min-w-0 flex-col rounded-card p-5 sm:p-6 lg:p-8",
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
      <Title className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
        {service.title}
      </Title>
      <p className={cx("mt-3 flex-1 text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7", emphasis ? "text-inverse-muted" : "text-muted")}>
        {service.description}
      </p>
      <Link
        href={service.href}
        className={cx(
          "mt-6 text-sm font-semibold sm:mt-8",
          emphasis ? "text-white" : "text-accent",
        )}
      >
        Entender a {service.shortTitle.toLowerCase()}
      </Link>
    </article>
  );
}
