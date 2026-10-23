---
name: seo
description: Especialista de SEO da Recebecom. Use ao criar ou alterar página, metadata, Open Graph, sitemap, robots, llms.txt, JSON-LD, canônica ou compartilhamento em WhatsApp e redes.
---

# SEO

Siga `.cursor/specs/seo.md`.

## Página nova

1. Título e descrição próprios em `createMetadata`.
2. Inclua o caminho em `src/content/routes.ts` se for indexável.
3. Inclua o resumo em `src/app/llms.txt/route.ts`.
4. JSON-LD de breadcrumb na página interna. Serviço aponta o `provider` para o `@id` da organização.

## Compartilhamento

`og:image` e `twitter:image` usam `shareImage` (`/og.jpg`, 1200×630, JPEG). A URL final precisa abrir no host público, com `content-type` de imagem. Domínio sem DNS não serve de `og:image`.

## Conferência

No HTML entregue, confirme título, descrição, canônica, `og:title`, `og:image`, largura, altura, alt e `twitter:card` = `summary_large_image`.
