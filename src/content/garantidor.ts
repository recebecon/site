import { contactHref } from "@/content/navigation";

/**
 * Garantidor: crédito opcional amarrado à cobrança.
 * Sem percentual, taxa, SPC ou benefício inventado. Só o que a operação confirma.
 */
export const garantidorService = {
  slug: "garantidor",
  href: "/servicos/garantidor",
  title: "Garantidor",
  shortTitle: "Garantidor",
  eyebrow: "Crédito opcional",
  summary:
    "Previsibilidade de caixa com interesse e aceite. A régua e a via judicial seguem no mesmo time, com correspondência bancária Santander.",
  description:
    "O Garantidor protege o caixa quando a taxa atrasa. Não é garantia genérica. Combina com a régua e com a via judicial, e só entra com interesse, avaliação e aceite de quem administra.",
  promise: "Caixa previsível. Cobrança no ritmo. Crédito só com aceite.",
  positioning:
    "Enquanto outros vendem antecipação sozinha, a Recebecom junta crédito, régua e judicial no mesmo time. Correspondente bancário Santander. Decisão explícita do condomínio.",
  cta: {
    href: contactHref,
    label: "Avaliar o garantidor",
  },
  condoBenefits: {
    title: "Para o condomínio e quem administra",
    items: [
      "Previsibilidade do caixa quando a taxa do mês atrasa",
      "Proposta sob análise, sem surpresa no meio do contrato",
      "Régua de cobrança e via judicial no mesmo time",
      "Status claro para síndico, administradora e conselho",
      "Correspondência bancária Santander na operação de crédito",
      "Não substitui a cobrança: a régua continua rodando",
      "Entra só com interesse, avaliação e aceite formal",
      "Menos pressão de assembleia por boleto que não entrou",
      "Decisão documentada. O conselho sabe o que foi aceito e por quê",
    ],
  },
  unitBenefits: {
    title: "Para as unidades e a convivência",
    items: [
      "Cobrança organizada, sem improviso no dia a dia do prédio",
      "Acordo e via amigável seguem no fluxo da Recebecom",
      "O Garantidor não entra sem concordância de quem contrata",
      "Consulta de pendências da unidade para o responsável",
      "Menos desgaste entre vizinhos por cobrança solta",
      "Um canal só para falar da taxa em aberto",
      "A convivência deixa de depender de cobrança no WhatsApp do síndico",
    ],
  },
  differences: {
    title: "Por que a Recebecom",
    items: [
      {
        title: "Cobrança e crédito no mesmo time",
        description:
          "A régua, o acordo, a judicial e o Garantidor conversam. O condomínio não espalha a carteira em três fornecedores.",
      },
      {
        title: "Aceite explícito",
        description:
          "Crédito opcional. Interesse e concordância abrem o caminho. Nada imposto na régua padrão.",
      },
      {
        title: "Operação com lastro bancário",
        description:
          "Correspondente bancário Santander. Crédito com rastreio para quem administra o caixa.",
      },
    ],
  },
  steps: [
    "Diagnóstico da carteira e do interesse no Garantidor",
    "Proposta sob análise, com condições claras para o condomínio",
    "Aceite formal de quem administra",
    "Operação alinhada à régua de cobrança e ao status do caixa",
  ],
} as const;
