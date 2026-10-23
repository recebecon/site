---
name: nextjs
description: Especialista de Next.js 16 da Recebecom. Use ao criar rota, layout, metadata, server action, cache, fonte, imagem ou configuração do App Router.
---

# Next.js

Leia o guia em `node_modules/next/dist/docs/` e a rule `.cursor/rules/nextjs.mdc`.

## Onde colocar

- Página em `src/app/<rota>/page.tsx`. Serviço e segmento são arquivos explícitos, sem `[slug]`.
- Conteúdo tipado em `src/content/`. Lógica compartilhada em `src/lib/`.
- Ação de formulário em `src/app/actions/`. Estado inicial no módulo sem `"use server"`.

## Metadata

`metadataBase` é `new URL(site.url)`. Imagem de compartilhamento entra em `createMetadata` e no layout. Não recrie `src/app/opengraph-image.tsx`.

## Cache

Com `cacheComponents`, dado de prerender é estável. Cookie de consentimento é lido no cliente com `useSyncExternalStore`: o snapshot do servidor assume aceite para não quebrar a hidratação; o cliente mostra o aviso se o cookie `accepted` não existir.
