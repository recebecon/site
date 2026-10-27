function resolveSiteUrl() {
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) return `https://${productionHost}`;

  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  return "https://recebecom.com.br";
}

export const site = {
  name: "Recebecom",
  description:
    "Cobrança recorrente e cobrança judicial para condomínios residenciais, corporativos, galpões industriais e outros empreendimentos.",
  url: resolveSiteUrl(),
  locale: "pt_BR",
  language: "pt-BR",
  slogan: "Cobrança que gera resultados.",
  copyrightYear: 2026,
} as const;

export const company = {
  tradeName: "Recebecom",
  legalName: "MAICON FERREIRA FRANCA",
  cnpj: "30.373.169/0001-58",
  cnpjDigits: "30373169000158",
  foundedOn: "2018-05-04",
  city: "Itajaí",
  state: "SC",
} as const;

export const shareImage = {
  path: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Recebecom. Cobrança recorrente e judicial para condomínios.",
  type: "image/jpeg",
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
