---
name: frontend
description: Especialista de frontend da Recebecom. Use ao implementar componente React, formulário, validação, menu, acessibilidade, estado de cliente ou integração visual com server action.
---

# Frontend

Combine as skills `design-system` e `ui-ux` quando a mudança for visível.

## Formulário

Validação em `src/lib/fields.ts` e `src/lib/documents.ts`. Telefone, CPF e CNPJ mostram erro no campo. `aria-invalid` marca o campo. Mensagem fica ligada por `aria-describedby`.

Server action com `useActionState`. Ao receber estado novo, copie para o estado local durante o render, quando a identidade mudar.

## Acessibilidade

Botão tem nome. Link com ícone tem `aria-label`. Região de aviso tem `aria-label`. Alvo de toque com pelo menos 44px. Foco visível no controle que recebe teclado.

## Menu

`MobileNav` é portal no `body`, `z-50`. O header fica em `z-30`. Faixa de aceite fica em `z-40`, abaixo do menu aberto.
