import { segments } from "@/content/segments";
import { services } from "@/content/services";

export type IndexablePath = {
  href: string;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

export const indexablePaths: IndexablePath[] = [
  { href: "/", changeFrequency: "monthly", priority: 1 },
  { href: "/consultar", changeFrequency: "monthly", priority: 0.9 },
  { href: "/servicos", changeFrequency: "monthly", priority: 0.8 },
  ...services.map((service) => ({
    href: service.href,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  { href: "/segmentos", changeFrequency: "monthly", priority: 0.8 },
  ...segments.map((segment) => ({
    href: segment.href,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { href: "/como-funciona", changeFrequency: "monthly", priority: 0.7 },
  { href: "/sobre", changeFrequency: "yearly", priority: 0.6 },
  { href: "/contato", changeFrequency: "yearly", priority: 0.6 },
  { href: "/privacidade", changeFrequency: "yearly", priority: 0.3 },
  { href: "/cookies", changeFrequency: "yearly", priority: 0.3 },
];
