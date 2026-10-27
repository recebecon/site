---
name: motion
description: Especialista de design system e efeitos de transição da Recebecom. Use ao animar, suavizar scroll, hover, menu, faixa, feedback visual ou ao revisar prefers-reduced-motion.
---

# Transições

Leia os tokens e `src/app/globals.css` antes de acrescentar movimento.

## Scroll

`html` tem `scroll-behavior: smooth` e `scroll-padding-top: 5.5rem`. CTA para seção da mesma página usa `<a href="#id">` via `Button` quando `href` começa com `#`. Não adicione `scroll-mt` na seção: o padding do `html` já compensa o header.

## Componentes

Transição curta, 200ms, em cor, fundo e sombra. Hover de botão sobe 2px e ganha sombra; active volta. Menu móvel usa `translate` de 300ms.

Faixa fixa usa `bg-white/80`, `backdrop-blur-sm` e `supports-[backdrop-filter]:bg-white/70`. Ela não reserva altura no fluxo e não empurra o rodapé.

O header começa transparente. Com a classe `is-scrolled` (após 8px de rolagem, via `HeaderScroll`), o CSS em `globals.css` aplica fundo branco semitransparente, borda, sombra e blur.

## Redução

Dentro de `prefers-reduced-motion: reduce`, animação e transição vão a zero e o scroll fica `auto`. Classe utilitária: `motion-reduce:transition-none` e `motion-reduce:hover:translate-y-0`.

Não anime layout de texto corrido nem contraste de campo.
