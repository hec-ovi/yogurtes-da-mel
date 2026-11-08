# Yogurtes da Mel

Site da Yogurtes da Mel, yogurte artesanal em Luanda. Três produtos: natural simples, maracujá e granola. Encomendas pelo WhatsApp +244 940 658 890. Entregas em Talatona, Camama e Patriota. Atendimento de segunda a sábado, na Rua do Kamorteiro, Bairro Danger.

O site é HTML, CSS e JavaScript estáticos. Não há base de dados, servidor nem pagamento no site. Os preços, em kwanzas (AOA), confirmam-se na conversa.

![Logotipo Yogurtes da Mel](logos/logo-horizontal.png)

O logotipo está em `logos/`: o horizontal para assinatura, o empilhado para rótulo e perfil, o frasco sozinho e o ícone quadrado. Cores: cacau `#2A211B`, mel `#C9892E`, creme `#F7F1E8`.

![Três yogurtes da Mel](images/capa.jpg)

## Publicar de graça

O alojamento do site pode ser 0 Kz. Não é preciso cartão. O endereço `*.pages.dev` ou `*.netlify.app` já inclui HTTPS.

Para um negócio, a escolha certa é **Cloudflare Pages**. O plano grátis serve os ficheiros estáticos sem limite de tráfego e permite site comercial. A Netlify também serve, com um tecto mensal de créditos. O Vercel Hobby é só para uso pessoal. O GitHub Pages não é o sítio para a página de um negócio.

Um domínio próprio (`.com`, `.co.ao`) paga-se à parte, na empresa onde se regista o nome. O site funciona sem isso.

### Cloudflare Pages

Conta grátis em [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up). Não pede cartão.

1. No painel, abra **Workers & Pages** e crie um projecto **Pages**.
2. Escolha **Upload assets** (envio directo, sem Git).
3. Dê o nome `yogurtes-da-mel`.
4. Envie um zip com o conteúdo desta pasta: `index.html` tem de ficar na raiz do zip, junto de `css`, `js`, `fonts` e `images`. Não comprima a pasta-mãe, senão o site abre dentro de uma subpasta.
5. O endereço fica `https://yogurtes-da-mel.pages.dev`.

Para actualizar, crie um novo deployment e envie o zip outra vez.

Limites do plano grátis, confirmados na documentação da Cloudflare: pedidos a ficheiros estáticos são grátis e ilimitados. Há 500 builds por mês, um de cada vez, ficheiros até 25 MiB. Este site não usa Functions, por isso não entra na quota diária de Workers.

### Netlify

Conta grátis em [app.netlify.com/signup](https://app.netlify.com/signup).

1. Abra [app.netlify.com/drop](https://app.netlify.com/drop) já com a sessão iniciada.
2. Arraste a pasta do site (a que contém `index.html`).
3. A Netlify devolve um endereço `https://algo.netlify.app`.

Para actualizar, abra o site, vá a **Deploys** e arraste a pasta de novo. Cada deploy de produção gasta 15 dos 300 créditos mensais do plano Free. A largura de banda gasta 20 créditos por GB. Para uma encomenda de bairro chega. Se o tráfego crescer, o Cloudflare Pages aguenta melhor sem passar a pago.

### Depois de estar no ar

No `index.html`, troque `og:image` pelo endereço completo da capa, para o WhatsApp mostrar a fotografia ao partilhar o link:

```html
<meta property="og:image" content="https://yogurtes-da-mel.pages.dev/images/capa.jpg">
```

Faça o mesmo com `og:url`, se quiser o link canónico.

## O que editar

Os textos estão em `index.html`. As fotografias estão em `images/`. O visual está em `css/styles.css`. Não há preços escritos de propósito: o preço do dia combina-se no WhatsApp.
