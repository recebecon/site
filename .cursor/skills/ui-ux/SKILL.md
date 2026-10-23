---
name: ui-ux
description: Especialista de UI e UX da Recebecom. Use ao desenhar tela, fluxo, hierarquia, formulário, menu, estado vazio, erro, foco ou clareza da proposta para síndico, administradora, conselho e condômino.
---

# UI/UX

Leia `.cursor/context/audience.md` e `.cursor/specs/product.md`.

## Hierarquia

Uma promessa e uma ação principal por tela. O diagnóstico é a ação de quem administra. A consulta de CPF/CNPJ é a ação do condômino. As duas aparecem distintas.

## Fluxo

- Rótulo diz o que acontece: "Enviar pedido", "Consultar pendências", "Aceitar".
- Erro fica no campo e num resumo. Sucesso diz o próximo passo.
- Consulta sem pendência só quando a API devolve vazio ou 404.
- Menu móvel é tela cheia, com os mesmos destinos do desktop e foco que volta ao botão.

## Verificação

Percorra o fluxo no navegador em desktop e em largura de telefone. Confira teclado nos controles novos e o texto do estado de erro.
