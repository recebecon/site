---
name: design-system
description: Especialista do design system da Recebecom. Use ao criar componente, token, botão, seção, tipografia, cor, raio ou padrão visual reutilizável.
---

# Design system

Tokens em `src/design-system/tokens.css`. Primitivos em `src/design-system/ui/`: `button`, `container`, `section`, `logo`.

## Uso

- Cor, raio e fonte pelos tokens: `bg-accent`, `text-ink`, `text-muted`, `bg-paper`, `rounded-control`, `font-display`.
- Botão primário: fundo accent, texto branco, hover `bg-accent-strong`.
- Seção de página reutiliza `Section` e `Container` (`max-w-6xl`, `px-5 md:px-8`).
- Logo pelo componente `Logo`. Arquivo em `public/brand/logo.png`.

## Extensão

Token novo entra no `@theme` antes de aparecer em componente. Hex solto em componente é exceção só quando a ferramenta não lê a classe, como estilo inline do gerador de imagem.
