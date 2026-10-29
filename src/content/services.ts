import { garantidorService } from "@/content/garantidor";

export type Service = {
  slug: "cobranca-recorrente" | "cobranca-judicial" | "garantidor";
  href: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  promise: string;
  points: { title: string; description: string }[];
  steps: string[];
  /** Texto do link no card. Default: "Entender a {shortTitle}". */
  linkLabel?: string;
};

export const services: Service[] = [
  {
    slug: "cobranca-recorrente",
    href: "/servicos/cobranca-recorrente",
    title: "Cobrança recorrente",
    shortTitle: "Recorrente",
    eyebrow: "Antes do atraso virar rombo",
    summary:
      "Régua da taxa condominial no ciclo mensal: vencimento, atraso, notificação e acordo.",
    description:
      "A cobrança recorrente acompanha a taxa enquanto ela ainda pode ser paga sem fórum. A Recebecom organiza a cadência com a administradora, para o síndico deixar de cobrar no improviso.",
    promise: "A taxa é cobrada no ritmo do condomínio, com registro de cada etapa.",
    points: [
      {
        title: "Cadência combinada",
        description:
          "Lembrete, notificação e follow-up seguem uma régua definida com quem administra, não uma sequência genérica.",
      },
      {
        title: "Acordo antes do conflito",
        description:
          "O morador em atraso recebe uma condição viável para o caixa, sem transformar a cobrança em desgaste de assembleia.",
      },
      {
        title: "Visão para a administração",
        description:
          "Síndico e administradora acompanham o que está em aberto, o que entrou em acordo e o que precisa de outro caminho.",
      },
    ],
    steps: [
      "Levantamos unidades, valores e o histórico do que já foi cobrado.",
      "Definimos a régua com a administradora e o conselho.",
      "Executamos lembretes, notificações e propostas de acordo.",
      "Devolvemos o status para decidir o que segue na via amigável.",
    ],
  },
  {
    slug: "cobranca-judicial",
    href: "/servicos/cobranca-judicial",
    title: "Cobrança judicial",
    shortTitle: "Judicial",
    eyebrow: "Quando a via amigável se esgota",
    summary:
      "Condução da cobrança judicial da taxa condominial, com acompanhamento do caso para a administração.",
    description:
      "A cobrança judicial entra nos débitos que a régua recorrente não recuperou. A Recebecom organiza o caso e acompanha a execução com profissionais habilitados, para o condomínio não carregar sozinho o custo de decidir e de esperar.",
    promise:
      "O débito antigo deixa de ficar parado em planilha e passa a ter um caminho formal.",
    points: [
      {
        title: "Critério para judicializar",
        description:
          "Nem todo atraso vira processo. A indicação considera valor, tempo em aberto e o que já foi tentado na via amigável.",
      },
      {
        title: "Caso documentado",
        description:
          "A administração recebe o status do andamento, em vez de descobrir o processo só quando alguém pergunta em assembleia.",
      },
      {
        title: "Mesmo condomínio, duas frentes",
        description:
          "A taxa do mês continua na régua recorrente. O passado que não se resolveu segue na via judicial.",
      },
    ],
    steps: [
      "Separamos a carteira que já esgotou a cobrança amigável.",
      "Reunimos os documentos que sustentam o débito condominial.",
      "Encaminhamos a cobrança judicial com profissionais habilitados.",
      "Informamos a administração sobre etapas e desfechos relevantes.",
    ],
  },
  {
    slug: "garantidor",
    href: garantidorService.href,
    title: garantidorService.title,
    shortTitle: garantidorService.shortTitle,
    eyebrow: garantidorService.eyebrow,
    summary: garantidorService.summary,
    description: garantidorService.description,
    promise: garantidorService.promise,
    points: garantidorService.differences.items.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    steps: [...garantidorService.steps],
    linkLabel: "Entender o garantidor",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
