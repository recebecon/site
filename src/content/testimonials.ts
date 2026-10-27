export type Testimonial = {
  quote: string;
  name: string;
  /** Papel de quem fala, ex.: Síndico, Administradora, Conselho. */
  role: string;
  image: string;
  imageAlt: string;
};

/**
 * Placeholders fictícios para layout. Trocar por depoimentos reais
 * confirmados antes de publicar como prova social.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "A régua ficou clara para o conselho. Sabemos o que acontece no vencimento, no atraso e quando o acordo não fecha.",
    name: "Carla Mendes",
    role: "Síndica · condomínio residencial",
    image: "/media/depoimento-1.jpg",
    imageAlt: "Retrato fictício de Carla Mendes.",
  },
  {
    quote:
      "Antes a cobrança vivia no improviso. Agora a administradora acompanha a carteira com cadência e menos desgaste na assembleia.",
    name: "Roberto Almeida",
    role: "Administrador de condomínios",
    image: "/media/depoimento-2.jpg",
    imageAlt: "Retrato fictício de Roberto Almeida.",
  },
  {
    quote:
      "O que não resolveu na via amigável seguiu para a judicial com a gente no acompanhamento. O caixa parou de depender de lembrete solto.",
    name: "Fernanda Costa",
    role: "Conselheira · condomínio corporativo",
    image: "/media/depoimento-3.jpg",
    imageAlt: "Retrato fictício de Fernanda Costa.",
  },
];
