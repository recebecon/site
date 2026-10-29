import Link from "next/link";
import { services, type Service } from "@/content/services";
import { Section, SectionHeading } from "@/design-system/ui/section";
import { cx } from "@/lib/cx";

export function ServiceGrid({
  heading = true,
  tone = "default",
}: {
  heading?: boolean;
  tone?: "default" | "paper";
}) {
  return (
    <Section tone={tone} labelledBy={heading ? "servicos-titulo" : undefined}>
      {heading ? (
        <SectionHeading
          id="servicos-titulo"
          eyebrow="Soluções"
          title="Cobrança firme. Caixa protegido."
          description="Régua no ciclo do mês, via judicial quando couber, e garantidor opcional quando o condomínio quiser avaliar."
        />
      ) : null}
      <div
        className={cx(
          "grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3",
          heading && "mt-6 sm:mt-8",
        )}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            emphasis={service.slug === "garantidor"}
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
          "text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm",
          emphasis ? "text-paper" : "text-accent",
        )}
      >
        {service.eyebrow}
      </p>
      <Title className="mt-2.5 font-display text-lg font-semibold tracking-tight sm:mt-3 sm:text-xl lg:text-2xl">
        {service.title}
      </Title>
      <p
        className={cx(
          "mt-2.5 flex-1 text-sm leading-6 sm:mt-3",
          emphasis ? "text-inverse-muted" : "text-muted",
        )}
      >
        {service.summary}
      </p>
      <Link
        href={service.href}
        className={cx("mt-6 text-sm font-semibold", emphasis ? "text-white" : "text-accent")}
      >
        {service.linkLabel ?? `Entender a ${service.shortTitle.toLowerCase()}`}
      </Link>
    </article>
  );
}
