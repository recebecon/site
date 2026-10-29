export type Testimonial = {
  quote: string;
  name: string;
  /** Papel de quem fala, ex.: Síndico, Administradora, Conselho. */
  role: string;
  image: string;
  imageAlt: string;
};

/**
 * Nomes e papéis confirmados. As falas abaixo são rascunho de layout
 * até os textos reais de cada pessoa entrarem no conteúdo.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "A régua ficou clara para o conselho. Sabemos o que acontece no vencimento, no atraso e quando o acordo não fecha.",
    name: "Fabiana Lima",
    role: "Subsíndica e financeira",
    image: "/media/depoimento-1.jpg",
    imageAlt: "Retrato de Fabiana Lima.",
  },
  {
    quote:
      "Antes a cobrança vivia no improviso. Agora a administração acompanha a carteira com cadência e menos desgaste na assembleia.",
    name: "Marcio Alberici",
    role: "Síndico profissional",
    image: "/media/depoimento-2.jpg",
    imageAlt: "Retrato de Marcio Alberici.",
  },
  {
    quote:
      "O que não resolveu na via amigável seguiu para a judicial com a gente no acompanhamento. O caixa parou de depender de lembrete solto.",
    name: "Vânia Fonseca",
    role: "Síndica profissional",
    image: "/media/depoimento-3.jpg",
    imageAlt: "Retrato de Vânia Fonseca.",
  },
  {
    quote:
      "Com a carteira organizada, o financeiro enxerga o atraso cedo e consegue propor acordo antes do rombo crescer.",
    name: "Maiyra Noé de Oliveira Araujo",
    role: "Empresária · setor financeiro",
    image: "/media/depoimento-4.jpg",
    imageAlt: "Retrato de Maiyra Noé de Oliveira Araujo.",
  },
  {
    quote:
      "A cobrança deixou de ser lembrete solto. Tem ritmo no vencimento, no atraso e no próximo passo.",
    name: "Rodrigo Japur",
    role: "Síndico",
    image: "/media/depoimento-5.jpg",
    imageAlt: "Retrato de Rodrigo Japur.",
  },
];
