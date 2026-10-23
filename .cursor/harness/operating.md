# Harness

Ordem de leitura antes de implementar:

1. `AGENTS.md` e o guia correspondente em `node_modules/next/dist/docs/`.
2. `.cursor/context/` para marca, público e limites.
3. `.cursor/specs/` da área que a tarefa altera.
4. A skill em `.cursor/skills/` cujo domínio a tarefa pede.

## Ciclo

1. Confirme o que já existe no código antes de criar outro caminho.
2. Altere só o que a tarefa pede.
3. Em UI, layout, rota, estado ou dado renderizado, exercite o fluxo no navegador.
4. Se achar regressão, corrija e verifique de novo.

## Limites

- Não invente depoimento, telefone, endereço, CNPJ, estatística ou perfil oficial de rede social.
- Não diga que a Recebecom é escritório de advocacia.
- Não grave CPF ou CNPJ em URL, cookie ou log.
- Não faça commit nem deploy sem pedido explícito.
- Mantenha o bloco do Next em `AGENTS.md`. O `next dev` recria se ele sumir.
