export type Segment = {
  slug: "residencial" | "corporativo" | "galpoes-industriais" | "outros";
  href: string;
  title: string;
  summary: string;
  description: string;
  situations: string[];
};

export const segments: Segment[] = [
  {
    slug: "residencial",
    href: "/segmentos/residencial",
    title: "Residencial",
    summary:
      "Casas e apartamentos em que a taxa sustenta portaria, manutenção e contas comuns.",
    description:
      "No condomínio residencial, um atraso de poucos vizinhos recai sobre todos. A cobrança precisa ser firme com o débito e cuidadosa com a convivência.",
    situations: [
      "Taxa mensal esquecida ou parcelada sem critério",
      "Unidades com meses em aberto e síndico no meio do conflito",
      "Assembleia cobrando previsibilidade do caixa",
    ],
  },
  {
    slug: "corporativo",
    href: "/segmentos/corporativo",
    title: "Corporativo",
    summary:
      "Salas, lajes e centros empresariais em que a inadimplência trava a operação do condomínio.",
    description:
      "No condomínio corporativo, a taxa financia operação, segurança e áreas comuns de quem trabalha no prédio. O atraso de uma sala pesa no caixa de todo o empreendimento.",
    situations: [
      "Ocupantes e proprietários com responsabilidades diferentes",
      "Valores altos por unidade e pouca tolerância a atraso",
      "Administradora com várias torres e pouca visão única da carteira",
    ],
  },
  {
    slug: "galpoes-industriais",
    href: "/segmentos/galpoes-industriais",
    title: "Galpões industriais",
    summary:
      "Condomínios logísticos e industriais, com taxas elevadas e contratos mais complexos.",
    description:
      "Galpão e condomínio logístico concentram poucas unidades e valores altos. Um inadimplente muda o caixa do mês. A cobrança precisa de régua e, quando couber, de via judicial sem espera infinita.",
    situations: [
      "Poucas unidades com impacto grande no caixa",
      "Contratos de locação e taxa condominial se misturando na conversa",
      "Débitos antigos que a cobrança informal não move",
    ],
  },
  {
    slug: "outros",
    href: "/segmentos/outros",
    title: "Outros empreendimentos",
    summary:
      "Mistos, flats, clubes e demais condomínios que também vivem da taxa.",
    description:
      "Nem todo condomínio cabe numa categoria só. Empreendimentos mistos, flats e clubes também dependem da taxa e sofrem quando a cobrança fica espalhada.",
    situations: [
      "Uso misto, com perfis de ocupante diferentes na mesma carteira",
      "Taxa com regras próprias aprovadas em convenção",
      "Histórico de cobrança irregular entre gestões",
    ],
  },
];

export function getSegment(slug: string) {
  return segments.find((segment) => segment.slug === slug);
}
