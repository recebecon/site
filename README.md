# Recebecom

Site institucional da Recebecom em Next.js 16 (App Router). Cobrança recorrente e cobrança judicial para condomínios residenciais, corporativos, galpões industriais e outros empreendimentos.

## Desenvolvimento

```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local` antes de publicar.

- `NEXT_PUBLIC_SITE_URL` define canonical, Open Graph, sitemap e robots.
- `CONTACT_WEBHOOK_URL` recebe o POST do formulário de diagnóstico. Sem essa variável, o formulário valida e informa que o canal ainda não está ligado.
- `CONSULTA_API_URL` recebe o POST `{ "document": "somente digitos" }` da consulta de pendências. A resposta esperada é `{ "items": [{ "condominium", "unit", "description", "amount", "dueDate", "status" }] }`. `CONSULTA_API_TOKEN` vai no header `Authorization: Bearer`, quando existir. Sem a URL, a consulta valida o CPF ou CNPJ e informa que o canal ainda não está ligado.

## Onde cada coisa mora

- `src/design-system/tokens.css` — cores, tipo e raios. Componentes usam as utilidades (`bg-ink`, `font-display`), sem hex solto.
- `src/design-system/ui` — primitivos: botão, container, seção, logo.
- `src/components/layout` — header, footer, trilha e cabeçalho de página.
- `src/components/sections` — blocos da home e do formulário.
- `src/content` — fonte única de serviços, segmentos, FAQ, navegação e rotas indexáveis.
- `src/lib/metadata.ts` e `src/lib/structured-data.ts` — title, canonical, Open Graph e JSON-LD.
- `src/app` — rotas, `sitemap.ts`, `robots.ts`, `manifest.ts` e imagem Open Graph.

## SEO

Cada página exporta metadata com canonical. O sitemap sai de `src/content/routes.ts`. JSON-LD cobre organização, serviço, FAQ e trilha. Não há depoimento, endereço ou indicador inventado: números entram no conteúdo quando forem reais.
