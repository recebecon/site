import { garantidorService } from "@/content/garantidor";

/** Parceiros confirmados para comunicação no site. */

export const bankingCorrespondent = {
  name: "Santander",
  role: "Correspondente bancário",
  logoSrc: "/brand/santander.svg",
  logoAlt: "Logo do Banco Santander",
  logoWidth: 238,
  logoHeight: 42,
} as const;

/** Resumo do Garantidor para a home — página completa em /servicos/garantidor. */
export const optionalGuarantor = {
  eyebrow: garantidorService.eyebrow,
  title: garantidorService.promise,
  summary: garantidorService.summary,
  points: garantidorService.differences.items,
  cta: "Conhecer o garantidor",
  href: garantidorService.href,
  evaluateCta: garantidorService.cta.label,
  evaluateHref: garantidorService.cta.href,
} as const;
