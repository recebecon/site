import Image from "next/image";
import { testimonials } from "@/content/testimonials";
import { Section, SectionHeading } from "@/design-system/ui/section";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section labelledBy="depoimentos-titulo">
      <SectionHeading
        id="depoimentos-titulo"
        eyebrow="Depoimentos"
        title="Quem administra fala da cobrança."
        description="Relatos de síndicos e administradoras sobre a régua e a via judicial."
      />
      <ul className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3">
        {testimonials.map((item) => (
          <li key={`${item.name}-${item.role}`} className="min-w-0">
            <figure className="flex h-full flex-col rounded-card border border-line bg-white p-5 sm:p-6">
              <blockquote className="flex-1">
                <p className="font-display text-base leading-7 font-medium tracking-tight text-ink sm:text-lg sm:leading-8">
                  “{item.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
