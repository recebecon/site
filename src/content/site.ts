export const site = {
  name: "Recebecom",
  description:
    "Cobrança recorrente e cobrança judicial para condomínios residenciais, corporativos, galpões industriais e outros empreendimentos.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://recebecom.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  slogan: "Cobrança que gera resultados.",
  copyrightYear: 2026,
} as const;

export const shareImage = {
  path: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Recebecom. Cobrança recorrente e judicial para condomínios.",
  type: "image/png",
} as const;

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/recebecom",
    label: "Instagram da Recebecom",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/recebecom",
    label: "LinkedIn da Recebecom",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/recebecom",
    label: "Facebook da Recebecom",
  },
] as const;

export const advisor = {
  name: "Grupo Ferreira França",
  alternateName: "Ferreira França Advocacia e Assessoria Empresarial",
  description: "Advocacia e Assessoria Empresarial",
  url: "https://grupoferreirafranca.com.br/",
  logo: "/brand/ferreira-franca.png",
  logoWidth: 640,
  logoHeight: 89,
} as const;
