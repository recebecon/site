# SEO e compartilhamento

- `createMetadata` em `src/lib/metadata.ts` define título `Página | Recebecom`, descrição, canônica, Open Graph e Twitter.
- Imagem de compartilhamento: `public/og.jpg`, 1200×630, JPEG, em `shareImage`.
- `src/app/sitemap.ts` lista `indexablePaths`. Página nova indexável entra em `src/content/routes.ts` e em `src/app/llms.txt/route.ts`.
- `src/app/robots.ts` é a fonte do robots. Não crie `public/robots.txt`.
- JSON-LD em `src/lib/structured-data.ts`: `WebSite` e `Organization` no mesmo `@graph`. Escape `<`.
- `metadataBase` vem de `site.url`. URL de imagem relativa resolve nesse host.
- Não use `opengraph-image.tsx` junto com `images` no metadata: a convenção troca a URL da home.

## LGPD no conteúdo público

A política em `/privacidade` declara controladora, dados, bases do art. 7º, destino, direitos do art. 18 e canal de pedido. A página `/cookies` descreve só o cookie essencial. Não invente DPO, CNPJ ou endereço.
