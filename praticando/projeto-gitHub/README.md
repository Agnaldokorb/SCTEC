# Portfolio GitHub - Agnaldo Korb

Projeto de portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro. A página apresenta uma introdução do desenvolvedor, consome a API pública do GitHub para exibir repositórios, possui menu responsivo em formato sanduíche no mobile, formulário de contato demonstrativo e visual com fundo interativo.

## Visão Geral

Este projeto foi criado como uma página estática de apresentação profissional. A interface destaca o perfil de Agnaldo Korb como desenvolvedor front-end e renderiza automaticamente projetos publicados no GitHub.

O site não usa framework, bundler ou dependências externas obrigatórias. Toda a estrutura está organizada em arquivos estáticos separados por responsabilidade.

## Funcionalidades

- Hero com avatar do GitHub, nome, área de atuação e tecnologias principais.
- Fundo visual interativo com brilho seguindo o cursor, textura e animações.
- Menu de navegação com comportamento responsivo.
- Menu sanduíche flutuante em dispositivos móveis.
- Seção de projetos alimentada pela API pública do GitHub.
- Exibição de 3 cards principais de repositórios.
- Lista de repositórios com limite configurável.
- Fallback visual para imagem dos cards quando não existir imagem local.
- Cards e itens da lista clicáveis por mouse e teclado.
- Formulário de contato demonstrativo.
- Footer responsivo com melhor leitura no mobile.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- GitHub REST API
- Flexbox
- CSS Grid
- Media queries

## Estrutura de Pastas

```txt
.
├── assets/
│   └── skillmatch-js.png
├── css/
│   ├── contact.css
│   ├── footer.css
│   ├── header.css
│   ├── home.css
│   ├── key-frames.css
│   ├── responsive.css
│   └── style.css
├── js/
│   ├── api.js
│   ├── contact.js
│   ├── home.js
│   └── menu.js
├── index.html
└── README.md
```

## Como Executar

Como o projeto é estático, não há instalação de dependências.

### Opção 1: abrir diretamente

Abra o arquivo `index.html` no navegador.

### Opção 2: usar um servidor local

Usar um servidor local é recomendado para evitar diferenças de comportamento entre navegadores ao carregar scripts do tipo `module`.

Exemplo com Python:

```bash
python -m http.server 5500
```

Depois acesse:

```txt
http://localhost:5500
```

Também é possível usar extensões como Live Server no VS Code.

## Como Funciona a Integração com GitHub

O arquivo `js/api.js` busca os repositórios do usuário configurado:

```js
const GITHUB_USER = "Agnaldokorb";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;
```

A renderização é dividida em duas partes:

- `CARD_LIMIT`: quantidade de repositórios exibidos como cards principais.
- `LIST_LIMIT`: quantidade de repositórios exibidos na lista.

Atualmente:

```js
const CARD_LIMIT = 3;
const LIST_LIMIT = 16;
```

Cada card tenta carregar uma imagem local seguindo o padrão:

```txt
assets/nome-do-repositorio.png
```

Se a imagem não existir, o projeto usa uma imagem padrão do GitHub como fallback.

## Arquivos Principais

### `index.html`

Define a estrutura principal da página:

- cabeçalho;
- menu;
- hero;
- seção de projetos;
- formulário de contato;
- footer;
- carregamento dos arquivos CSS e JS.

### `js/api.js`

Responsável por:

- buscar repositórios na API do GitHub;
- validar a resposta;
- renderizar cards;
- renderizar a lista de repositórios;
- tratar erro de carregamento;
- abrir repositórios em nova aba.

### `js/menu.js`

Controla o menu de navegação:

- efeito de menu reduzido ao rolar a página;
- abertura e fechamento do menu sanduíche no mobile;
- atualização de `aria-expanded`;
- fechamento ao clicar em links;
- fechamento com a tecla `Escape`;
- reset ao voltar para desktop.

### `js/home.js`

Controla:

- ano automático no footer;
- brilho interativo do fundo;
- pulsos visuais no movimento do mouse ou toque.

### `js/contact.js`

Implementa o comportamento demonstrativo do formulário. Atualmente o envio não comunica com um backend real; ele apenas exibe uma mensagem na tela.

## Responsividade

O layout foi pensado para desktop e mobile:

- grids adaptáveis para cards e lista de repositórios;
- menu sanduíche abaixo de `760px`;
- footer empilhado abaixo de `665px`;
- componentes com largura fluida;
- uso de `clamp`, `min` e media queries para preservar leitura em telas menores.

## Acessibilidade

O projeto inclui alguns cuidados básicos:

- uso de `alt` em imagens;
- botão do menu com `aria-label`, `aria-expanded` e `aria-controls`;
- feedback do formulário com `aria-live`;
- cards e itens de repositório acessíveis por teclado;
- suporte para abrir repositórios com `Enter` ou `Space`.

## Personalização

Para trocar o usuário do GitHub, altere em `js/api.js`:

```js
const GITHUB_USER = "Agnaldokorb";
```

Para mudar a quantidade de cards ou itens na lista:

```js
const CARD_LIMIT = 3;
const LIST_LIMIT = 16;
```

Para adicionar imagens específicas aos cards, coloque arquivos `.png` na pasta `assets` com o mesmo nome do repositório.

Exemplo:

```txt
assets/skillmatch-js.png
```

## Limitações Atuais

- O formulário de contato ainda não envia mensagens para um backend.
- A API pública do GitHub pode aplicar limite de requisições.
- O projeto não possui pipeline de build, testes automatizados ou empacotador.
- As imagens dos cards dependem do nome exato do repositório para serem encontradas localmente.

## Melhorias Futuras

- Integrar o formulário de contato com um backend ou serviço de envio de e-mail.
- Adicionar filtros ou ordenação para repositórios.
- Destacar repositórios fixos em vez de depender somente da ordem retornada pela API.
- Adicionar testes automatizados para os módulos JavaScript.
- Publicar o projeto em GitHub Pages, Netlify ou Vercel.

## Autor

Desenvolvido por Agnaldo Korb.
