# Desafio API GitHub

Este projeto é um desafio de consumo da API pública do GitHub. Ele permite adicionar nomes de usuários GitHub a uma lista, carregar informações de perfil dos usuários e exibir repositórios públicos diretamente na página.

## Funcionalidades

- Adicionar um ou mais nomes de usuário à lista de busca.
- Carregar cards com informações do usuário, incluindo avatar, nome, login, bio e número de repositórios públicos.
- Carregar cards com os repositórios mais recentes de cada usuário.
- Exibir mensagens de erro quando o usuário não for encontrado ou houver problemas com a requisição.

## Como usar

1. Abra `index.html` no navegador.
2. Digite um nome de usuário do GitHub no campo de busca.
3. Clique em `Adicionar` para incluir o usuário na lista pendente.
4. Clique em `CARREGAR USUÁRIOS` para ver os perfis.
5. Clique em `CARREGAR REPOSITÓRIOS` para ver os repositórios do GitHub.

## Estrutura de arquivos

- `index.html` - interface do desafio.
- `style.css` - estilos visuais da página.
- `script.js` - lógica JavaScript para buscar dados do GitHub e exibir resultados.
- `assets/Gravando 2026-06-23 091513.mp4` - vídeo de demonstração do desafio.

## Exemplo de uso

O projeto busca dados diretamente da API do GitHub usando os endpoints:

- `https://api.github.com/search/users`
- `https://api.github.com/users/{username}`
- `https://api.github.com/users/{username}/repos`

## Demonstração em vídeo

<video controls width="640" preload="metadata">
  <source src="assets/Gravando 2026-06-23 091513.mp4" type="video/mp4">
  Seu navegador não suporta o elemento <code>video</code>. Abra o arquivo diretamente em `assets/Gravando 2026-06-23 091513.mp4`.
</video>

## Observações

- É necessário conexão com a internet para que as requisições ao GitHub funcionem.
- A API do GitHub pode limitar requisições sem autenticação após certo número de acessos.
