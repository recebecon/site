/** Parceiros e produtos confirmados para comunicação no site. */

export const bankingCorrespondent = {
  name: "Santander",
  role: "Correspondente bancário",
  logoSrc: "/brand/santander.svg",
  logoAlt: "Logo do Banco Santander",
  logoWidth: 238,
  logoHeight: 42,
} as const;

/**
 * Garantidor: produto principal de crédito opcional.
 * Entra só sob interesse e aceite — não faz parte da régua padrão.
 */
export const optionalGuarantor = {
  eyebrow: "Produto opcional",
  title: "Garantidor. O caixa não para quando o boleto atrasa.",
  summary:
    "Crédito sob interesse e aceite do cliente. Protege a previsibilidade do condomínio sem misturar com a régua de cobrança: só entra quando houver avaliação e concordância.",
  points: [
    {
      title: "Caixa com folga",
      description: "O condomínio ganha fôlego enquanto a cobrança segue o seu ritmo.",
    },
    {
      title: "Só com aceite",
      description: "Nada é imposto. Interesse, análise e concordância abrem o caminho.",
    },
    {
      title: "Fora da régua padrão",
      description: "A cobrança continua. O garantidor é decisão à parte, quando fizer sentido.",
    },
  ],
  cta: "Quero avaliar o garantidor",
} as const;
