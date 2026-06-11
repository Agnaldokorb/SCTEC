# Curso Front-End - SCTEC, LAB365 e SENAI/SC

Repositório de estudos criado para armazenar os exercícios, exemplos, desafios e projetos desenvolvidos durante o curso de **Desenvolvimento Front-End [React]**, promovido pela **SCTEC** em parceria com o **LAB365** e o **SENAI/SC**.

O conteúdo atual acompanha a etapa de fundamentos da formação, com atividades práticas de **HTML5**, **CSS3** e **JavaScript**, avançando de conceitos básicos da linguagem até manipulação do DOM, programação orientada a objetos, assincronismo e consumo de APIs.

**Professor:** [@eduardoworrel](https://github.com/eduardoworrel)

## Sumário

- [Sobre o repositório](#sobre-o-repositório)
- [Objetivos de aprendizagem](#objetivos-de-aprendizagem)
- [Conteúdos por semana](#conteúdos-por-semana)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Projeto em destaque](#projeto-em-destaque)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como executar os exercícios](#como-executar-os-exercícios)
- [Observações importantes](#observações-importantes)
- [Autor](#autor)

## Sobre o repositório

Este repositório registra a evolução das aulas e serve como ambiente de prática. Os arquivos estão organizados por semana, aula e tipo de atividade.

Aqui podem ser encontrados:

- exemplos apresentados durante as aulas;
- exercícios de fixação;
- desafios individuais;
- práticas extras realizadas fora das aulas;
- páginas estáticas com HTML e CSS;
- algoritmos e exercícios de lógica com JavaScript;
- manipulação de elementos e eventos do navegador;
- consumo de APIs públicas;
- um projeto de portfólio integrado à API do GitHub.

Nesta etapa do curso, os exemplos não utilizam React, Node.js, gerenciadores de pacotes ou ferramentas de build. A execução acontece diretamente no navegador.

## Objetivos de aprendizagem

- Compreender a estrutura semântica de uma página HTML.
- Criar estilos com CSS, Flexbox, Grid e layouts responsivos.
- Desenvolver lógica de programação com JavaScript.
- Trabalhar com variáveis, condicionais, repetições, funções, arrays e objetos.
- Aplicar métodos como `filter`, `reduce` e callbacks.
- Utilizar classes e conceitos introdutórios de programação orientada a objetos.
- Manipular o DOM e responder a eventos do usuário.
- Criar e validar interações com formulários.
- Entender Promises, `async/await` e tratamento de erros.
- Consumir dados de APIs externas com `fetch`.
- Organizar projetos separando HTML, CSS, JavaScript e recursos estáticos.
- Praticar responsividade e cuidados básicos de acessibilidade.

## Conteúdos por semana

| Período | Conteúdos praticados |
| --- | --- |
| `semana-01` | Introdução a HTML, JavaScript no navegador, seleção e criação de elementos do DOM e eventos de clique. |
| `semana-02` | Alteração dinâmica de estilos, controle de estado e interação com botões. |
| `semana-03` | Objetos, propriedades aninhadas, estruturas de repetição e exercícios com JavaScript. |
| `semana-04` | Funções, strings, arrays, contadores, algoritmos e resolução de desafios de lógica. |
| `semana-05` | Classes, objetos, módulos, programação orientada a objetos e problemas como `Two Sum`. |
| `semana-06` | Callbacks, métodos de arrays, tratamento de erros, Promises, `async/await`, `fetch` e APIs. |
| `semana-07` | Estruturação de páginas, estilização, Flexbox, Grid, alinhamento e composição de layouts. |
| `semana-08` | Eventos de mouse e teclado, manipulação do DOM, formulários dinâmicos e consumo da API do TabNews. |
| `semana-09` | Inputs, formulários, prevenção do envio padrão e atualização visual da página a partir dos dados informados. |
| `sabado` | Aulas e exercícios complementares sobre repetição, lógica, HTML, JavaScript e eventos. |
| `praticando` | Estudos independentes de algoritmos, arrays, objetos, classes, Promises e projetos completos. |

> Os conteúdos refletem os arquivos atualmente presentes no repositório. Novas aulas e exercícios podem ser adicionados durante a continuidade do curso.

## Estrutura de pastas

```text
aulas-front/
├── praticando/
│   ├── projeto-gitHub/
│   │   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── index.html
│   │   └── README.md
│   └── exercícios independentes
├── sabado/
│   ├── sabado22-05/
│   ├── sabado30-05/
│   └── sabado06-06/
├── semana-01/
├── semana-02/
├── semana-03/
├── semana-04/
├── semana-05/
├── semana-06/
├── semana-07/
├── semana-08/
├── semana-09/
└── README.md
```

Cada pasta semanal contém uma ou mais pastas de aula. Dentro delas, os exercícios são mantidos principalmente nos formatos:

- `.html`: estrutura das páginas e exemplos executáveis no navegador;
- `.css`: estilos, layouts e responsividade;
- `.js`: lógica, algoritmos, eventos, DOM e integrações com APIs;
- `.png`: imagens utilizadas nos projetos;
- `.excalidraw`: material visual e diagramas de apoio.

## Projeto em destaque

### Portfólio GitHub

Localizado em [`praticando/projeto-gitHub`](./praticando/projeto-gitHub), este é o projeto mais completo do repositório.

O portfólio foi desenvolvido com HTML, CSS e JavaScript puro e possui:

- apresentação profissional com avatar do GitHub;
- layout responsivo;
- menu adaptado para dispositivos móveis;
- efeitos visuais e fundo interativo;
- cards de projetos;
- consumo da API pública do GitHub;
- listagem dinâmica de repositórios;
- estados de carregamento e erro;
- navegação por mouse e teclado;
- formulário de contato demonstrativo;
- organização de estilos e scripts por responsabilidade.

As instruções específicas, limitações e opções de personalização estão disponíveis no [README do projeto](./praticando/projeto-gitHub/README.md).

## Tecnologias utilizadas

- **HTML5** para estrutura e semântica.
- **CSS3** para estilos, animações e responsividade.
- **JavaScript (ES6+)** para lógica e interatividade.
- **DOM API** para leitura e atualização da página.
- **Fetch API** para requisições HTTP.
- **GitHub REST API** para carregar repositórios no portfólio.
- **TabNews API** e outras APIs públicas em exercícios de aula.
- **Git e GitHub** para versionamento e armazenamento do código.
- **Visual Studio Code** como ambiente de desenvolvimento.

## Como executar os exercícios

Não é necessário instalar dependências.

### Opção 1: abrir o arquivo HTML

1. Abra este repositório no explorador de arquivos.
2. Entre na pasta da semana e da aula desejada.
3. Localize o arquivo `.html`, como `index.html` ou `desafio.html`.
4. Abra o arquivo no navegador.

Essa opção funciona para a maior parte dos exercícios simples.

### Opção 2: usar o Live Server

Para exercícios que utilizam módulos JavaScript ou fazem requisições para APIs, é recomendado executar os arquivos por meio de um servidor local.

No Visual Studio Code:

1. Instale a extensão **Live Server**.
2. Abra a pasta do repositório.
3. Clique com o botão direito sobre o arquivo HTML desejado.
4. Selecione **Open with Live Server**.

O navegador será aberto em um endereço semelhante a:

```text
http://127.0.0.1:5500/
```

### Opção 3: testar JavaScript no console

Alguns arquivos `.js` de lógica podem ser testados no console do navegador:

1. Abra uma página no navegador.
2. Pressione `F12`.
3. Acesse a aba **Console**.
4. Cole o código desejado e pressione `Enter`.

Arquivos que acessam elementos HTML com `document.querySelector`, `getElementById` ou APIs semelhantes devem ser executados junto da página HTML correspondente.

## Observações importantes

- Este é um repositório educacional e está em evolução contínua.
- Alguns arquivos registram experimentos feitos durante as aulas e podem conter trechos comentados ou soluções alternativas.
- Exercícios que consomem APIs precisam de conexão com a internet.
- APIs públicas podem limitar requisições ou ficar temporariamente indisponíveis.
- O formulário do portfólio é demonstrativo e ainda não envia dados para um backend.
- O repositório ainda não possui testes automatizados ou processo de build.
- As pastas preservam os nomes utilizados durante as aulas para manter o histórico dos estudos.

## Autor

Desenvolvido por **Agnaldo Korb** durante o curso de Front-End da **SCTEC**, em parceria com o **LAB365** e o **SENAI/SC**.
