# HOLD — Governança & Soluções Empresariais

Site institucional em português, criado com React e Vite. Inclui apresentação da empresa, soluções navegáveis, metodologia, perguntas frequentes e briefing comercial compartilhável por WhatsApp ou e-mail.

## Desenvolvimento

Requisitos: Node.js 24 LTS (mínimo 22.12) e npm.

```bash
cd /workspace/holdgovernancesolution
npm ci --cache /workspace/.cache/npm --no-audit --no-fund
npm run dev
```

O servidor de desenvolvimento usa a porta 5173. A configuração escuta em `0.0.0.0`, apropriado para o ambiente de desenvolvimento em nuvem.

Cada tarefa já tem um ambiente isolado: use o checkout existente, sem criar um Git worktree.

## Verificação

```bash
npm run build
# Com o servidor de desenvolvimento iniciado em outro terminal:
npm run test:smoke
npm run test:a11y
```

Os testes funcionais usam Playwright e o Chromium instalado em `/usr/bin/chromium`. Em outra máquina, defina `CHROMIUM_PATH` para seu executável ou instale o navegador compatível com `npx playwright install chromium`. `BASE_URL` permite testar um servidor em outra porta. Os testes não enviam mensagens comerciais.

A auditoria de acessibilidade usa axe em cinco estados de desktop e celular, incluindo o formulário e o menu. Ela verifica as regras automatizadas WCAG A/AA disponíveis e não substitui uma avaliação manual completa.

Para validar os arquivos de produção, execute `npm run preview` após o build, e use `BASE_URL=http://127.0.0.1:4173 npm run test:smoke`.

## Contato e privacidade

Os canais comerciais públicos confirmados estão em `src/config.js`: `raphael@holdsolution.com` e WhatsApp `+55 22 99288-6582`. Eles podem ser substituídos antes do build com `VITE_CONTACT_EMAIL` e `VITE_CONTACT_WHATSAPP`; veja `.env.example`. Variáveis `VITE_` são públicas e nunca devem conter segredos.

O formulário prepara um briefing no navegador. O visitante escolhe abrir o WhatsApp ou seu cliente de e-mail com a mensagem preenchida e confirma o envio no próprio aplicativo. Também pode copiar ou baixar o texto. O site não afirma que uma mensagem foi entregue, não mantém uma base de leads e não usa analytics, cookies de rastreamento ou serviços de fontes externos.

O conteúdo institucional é uma primeira versão editorial, sem depoimentos, clientes ou resultados numéricos inventados. Revise a apresentação dos serviços antes do lançamento.

## Publicação

`npm run build` gera os arquivos estáticos em `dist/`. Eles podem ser publicados em uma hospedagem estática. A publicação e os registros DNS de `holdsolution.com.br` ainda precisam ser configurados na hospedagem escolhida. O registro de um domínio não realiza essa publicação automaticamente.

A configuração reutilizável do ambiente em nuvem é salva separadamente para revisão nas configurações do ambiente. Salvar um rascunho não publica o site nem configura DNS.
