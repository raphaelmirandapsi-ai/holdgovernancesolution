# Publicação e domínio `www.holdsolution.com`

Este guia explica como colocar o site institucional da HOLD no ar usando uma hospedagem compatível com Next.js, com foco no fluxo recomendado para Vercel.

## 1. Publicar o projeto

1. Crie uma conta ou acesse sua conta na Vercel.
2. Importe este repositório como um novo projeto.
3. Confirme os comandos padrão:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output/framework: Next.js
4. Faça o primeiro deploy e valide a URL temporária gerada pela plataforma.

## 2. Adicionar o domínio na Vercel

No painel do projeto, acesse **Settings > Domains** e adicione estes dois domínios:

- `holdsolution.com`
- `www.holdsolution.com`

A recomendação prática é manter `www.holdsolution.com` como domínio principal do site e redirecionar `holdsolution.com` para `www.holdsolution.com`.

## 3. Configurar DNS no registrador do domínio

Acesse o painel onde o domínio foi comprado, como Registro.br, GoDaddy, Cloudflare, Hostinger ou similar, e ajuste os registros DNS.

### Opção recomendada para Vercel

| Tipo | Nome/Host | Valor/Destino | Uso |
| --- | --- | --- | --- |
| `A` | `@` | `76.76.21.21` | Aponta o domínio raiz `holdsolution.com` para a Vercel. |
| `CNAME` | `www` | Valor indicado pela Vercel no painel do projeto | Aponta `www.holdsolution.com` para o deploy. |

A Vercel pode exibir um CNAME específico para o projeto. Use sempre o valor mostrado em **Settings > Domains** ou no comando `vercel domains inspect holdsolution.com`.

## 4. Preservar e-mail corporativo

Não remova registros de e-mail existentes sem confirmar o provedor usado pela HOLD. Preserve especialmente:

- `MX`
- `TXT` de SPF
- `TXT` de DKIM
- `TXT` de DMARC

Alterar apenas `A` e `CNAME` costuma ser suficiente para publicar o site sem impactar e-mails, desde que os registros de e-mail sejam mantidos.

## 5. Verificar propagação

Depois de salvar os registros DNS:

1. Aguarde a propagação, que pode levar de alguns minutos até 24 horas.
2. Volte ao painel da Vercel e confira se os domínios aparecem como configurados.
3. Acesse `https://www.holdsolution.com` e confirme o certificado HTTPS.
4. Teste também `https://holdsolution.com` para validar o redirecionamento para `www`.

## 6. Checklist antes de divulgar

- [ ] Deploy de produção concluído.
- [ ] `www.holdsolution.com` adicionado como domínio principal.
- [ ] `holdsolution.com` configurado como domínio secundário/redirecionado.
- [ ] Registros `MX`, `SPF`, `DKIM` e `DMARC` preservados.
- [ ] HTTPS ativo.
- [ ] Formulário de contato conectado ao canal escolhido ou substituído por link de e-mail.
