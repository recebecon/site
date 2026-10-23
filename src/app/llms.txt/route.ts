import { segments } from "@/content/segments";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/metadata";

const pages: { href: string; title: string; summary: string }[] = [
  {
    href: "/",
    title: "Início",
    summary:
      "Cobrança recorrente e judicial para condomínios, com consulta de pendências para o condômino.",
  },
  {
    href: "/consultar",
    title: "Consultar pendências",
    summary:
      "Condômino consulta pendências de condomínio na Recebecom com CPF ou CNPJ.",
  },
  {
    href: "/servicos",
    title: "Serviços",
    summary:
      "Cobrança recorrente e cobrança judicial da taxa condominial para síndicos e administradoras.",
  },
  ...services.map((service) => ({
    href: service.href,
    title: service.title,
    summary: service.summary,
  })),
  {
    href: "/segmentos",
    title: "Segmentos",
    summary:
      "Cobrança para condomínios residenciais, corporativos, galpões industriais e outros empreendimentos.",
  },
  ...segments.map((segment) => ({
    href: segment.href,
    title: segment.title,
    summary: segment.summary,
  })),
  {
    href: "/como-funciona",
    title: "Como funciona",
    summary:
      "Diagnóstico, régua de cobrança recorrente, acordo e via judicial para a taxa condominial.",
  },
  {
    href: "/sobre",
    title: "Sobre",
    summary:
      "A Recebecom cobra taxas condominiais para síndicos e administradoras, na via recorrente e na via judicial.",
  },
  {
    href: "/contato",
    title: "Contato",
    summary:
      "Peça um diagnóstico da cobrança do condomínio. A Recebecom atende síndicos, administradoras e conselhos.",
  },
  {
    href: "/privacidade",
    title: "Privacidade",
    summary:
      "Como a Recebecom trata os dados enviados no pedido de diagnóstico da cobrança condominial.",
  },
];

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description} ${site.slogan}`,
    "",
    "Público: síndico, administradora e conselho. O condômino com débito usa a consulta de pendências.",
    "",
    "## Páginas",
    "",
    ...pages.map(
      (page) => `- [${page.title}](${absoluteUrl(page.href)}): ${page.summary}`,
    ),
    "",
    "## Descoberta",
    "",
    `- [Sitemap](${absoluteUrl("/sitemap.xml")})`,
    `- [Robots](${absoluteUrl("/robots.txt")})`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
