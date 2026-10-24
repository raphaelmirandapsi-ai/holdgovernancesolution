# Identidade visual da HOLD

A marca combina o nome minúsculo `hold`, um cérebro de perfil com contorno turquesa e cauda de balão, e a base branca que compõe a letra `o`. O significado acompanha a assinatura: **Humanizar, Organizar, Liderar e Desenvolver**.

## Cores

| Uso                     | Cor       |
| ----------------------- | --------- |
| Fundo principal         | `#081315` |
| Superfícies em petróleo | `#0D2023` |
| Destaques turquesa      | `#79DED6` |
| Símbolo da marca        | `#68DED5` |
| Texto principal         | `#EDF9F8` |
| Texto secundário        | `#A6BDBD` |

## Arquivos para uso

- `public/brand/hold-logo.svg`: logo vetorial com fundo transparente, letras claras e assinatura em quatro linhas. Use preferencialmente sobre fundos escuros.
- `public/brand/hold-simbolo.svg`: símbolo vetorial separado.
- `public/brand/hold-logo-charcoal.png`: arte da logo em 2163 × 727 px, com fundo escuro opaco.
- `public/brand/hold-background-reunioes.png`: fundo de reuniões em 1672 × 941 px, formato aproximado 16:9, com área central livre e marca no canto superior esquerdo.

No aplicativo de videoconferência, selecione o PNG em **Plano de fundo virtual → Adicionar imagem**. A prévia local pode aparecer espelhada dependendo das configurações da câmera; confira a visualização dos participantes antes de criar uma segunda versão invertida.

## Componentes e manutenção

`BrandLogo.jsx` desenha a marca com vetores e suporta uma versão compacta. `BrainMark.jsx` mantém o cérebro e a base consistentes no cabeçalho, na apresentação, no símbolo de aba e nos detalhes do site. `HeroVisual.jsx` usa a mesma linguagem de redes e ondas do fundo de reuniões.

Os SVGs de download podem ser atualizados com `node scripts/export-brand.mjs` enquanto o servidor de desenvolvimento está em execução. A exportação usa os componentes renderizados e não contém credenciais.

Os PNGs são refinamentos das imagens fornecidas, produzidos com a ferramenta de imagem. O SVG é uma reconstrução vetorial da marca para a interface, não uma conversão automática do raster original. Os arquivos originais e os resultados intermediários foram preservados fora do checkout.

## Publicação

A instalação e a validação do site continuam documentadas no README. A publicação no domínio depende de o projeto Vercel estar conectado ao repositório atualizado. Confirme em **Settings → Git**; não presuma que enviar ao repositório original atualiza um projeto que foi criado a partir de uma cópia.
