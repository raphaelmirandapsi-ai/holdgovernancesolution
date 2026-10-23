# Publicação da HOLD na Vercel

O código usa React e Vite. O arquivo `vercel.json` define instalação com `npm ci`, build com `npm run build` e saída estática em `dist/`.

## Projeto

1. Na conta Vercel que deverá possuir o site, importe o repositório GitHub `raphaelmirandapsi-ai/holdgovernancesolution`.
2. Use a raiz do repositório como Root Directory (sem subdiretório) e `main` como branch de produção.
3. Confirme que o build terminou com status Ready e que a página abre no endereço fornecido pela Vercel.
4. Os contatos comerciais já estão definidos em `src/config.js`. Não é necessário fornecer variáveis ou segredos para o site funcionar.

A integração GitHub da Vercel pode publicar automaticamente as atualizações da branch de produção. Não crie um segundo projeto se o repositório já estiver conectado a um projeto existente.

## Domínio e DNS

1. Em Settings → Domains do projeto correto, adicione `holdsolution.com.br` e `www.holdsolution.com.br`.
2. Copie os registros apresentados pela Vercel para esse projeto. Não use IPs ou CNAMEs de exemplos: os valores podem variar.
3. Identifique o provedor autoritativo consultando os registros NS. Se for o Registro.br, edite a zona DNS por lá; se for outro provedor, edite a zona nele.
4. Antes de alterar qualquer registro, preserve os registros existentes e altere apenas o que for necessário ao site. Mantenha MX/TXT e registros usados por e-mail.
5. Depois de salvar, verifique as respostas DNS e aguarde a validação do domínio e do HTTPS na Vercel. Teste os dois endereços e o redirecionamento escolhido para o domínio principal.

Criar um deployment na Vercel não modifica o DNS do Registro.br. Não declare o domínio conectado sem conferir os registros públicos e a resposta HTTPS.

## Acesso pelo ambiente em nuvem

O proxy Git existente atende as operações Git no repositório. Uma variável GitHub presente, isoladamente, não prova acesso à API GitHub.

Para operar a Vercel por API é necessária uma autenticação Vercel válida, cadastrada de forma segura nas configurações do ambiente e autorizada para `api.vercel.com`. Nunca coloque tokens no repositório, em URLs, no histórico do terminal ou no chat.

O ambiente precisa permitir `api.vercel.com` para a API, `api.github.com` para verificar integrações/status, `dns.google` para consultar DNS público, e os hosts `holdsolution.com.br` e `www.holdsolution.com.br` para validar o site. Salvar essas permissões em um rascunho não as aplica à máquina atual.
