# Produto

Páginas: `/`, `/consultar`, `/servicos`, `/servicos/cobranca-recorrente`, `/servicos/cobranca-judicial`, `/segmentos` e os quatro segmentos, `/como-funciona`, `/sobre`, `/contato`, `/privacidade`, `/cookies`.

## Diagnóstico

`POST` para `CONTACT_WEBHOOK_URL` com nome, e-mail, telefone, papel, segmento e mensagem. Honeypot `company_website`. Sem a URL, valide e diga que o envio ainda não está disponível. Não cite o nome da variável ao usuário.

## Consulta

`POST` para `CONSULTA_API_URL` com `{ document }` normalizado, sem pontuação; CNPJ alfanumérico em maiúsculas. Token opcional em `Authorization: Bearer`. Resposta `{ items: [...] }` ou array. 404 ou vazio significa sem pendências. Outro erro pede para tentar de novo. Sem a URL, valide e diga que o canal ainda não está ligado.

## Consentimento

O botão Aceitar grava `recebecom_consent=accepted` por 180 dias. Navegar não grava o aceite. O cookie é essencial. Não há cookie de anúncio.

## Hospedagem

Next.js na Vercel, região `gru1`. `site.url` usa `VERCEL_PROJECT_PRODUCTION_URL`, depois `NEXT_PUBLIC_SITE_URL`, depois `https://recebecom.com.br`.
