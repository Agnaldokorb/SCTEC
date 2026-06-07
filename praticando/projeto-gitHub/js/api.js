const cardsContainer = document.querySelector("#cards");
const listContainer = document.querySelector("#listas");

const GITHUB_USER = "Agnaldokorb";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;
const CARD_LIMIT = 4;
const LIST_LIMIT = 16;
const FALLBACK_IMAGE =
  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

class GithubRepositoriesRenderer {
  constructor(cardsElement, listElement) {
    this.cardsElement = cardsElement;
    this.listElement = listElement;
  }

  async init() {
    if (!this.cardsElement || !this.listElement) return;

    this.setLoading();

    try {
      const repositories = await this.fetchRepositories();
      this.render(repositories);
    } catch (error) {
      console.error(error);
      this.renderError();
    }
  }

  async fetchRepositories() {
    const response = await fetch(GITHUB_REPOS_URL);

    if (!response.ok) {
      throw new Error(`Erro ao buscar repositórios: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Resposta inesperada da API do GitHub.");
    }

    return data;
  }

  setLoading() {
    this.cardsElement.textContent = "Carregando projetos...";
    this.listElement.textContent = "Carregando lista de repositórios...";
  }

  render(repositories) {
    const cardRepositories = repositories.slice(0, CARD_LIMIT);
    const listRepositories = repositories.slice(0, LIST_LIMIT);

    this.cardsElement.replaceChildren(
      ...cardRepositories.map((repository) => this.createCard(repository)),
    );

    this.listElement.replaceChildren(
      ...listRepositories.map((repository) =>
        this.createListItem(repository),
      ),
    );
  }

  renderError() {
    this.cardsElement.textContent =
      "Não foi possível carregar os projetos agora.";
    this.listElement.textContent =
      "Não foi possível carregar a lista de repositórios.";
  }

  createCard(repository) {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Abrir repositório ${repository.name}`);

    const image = document.createElement("img");
    image.className = "card-img";
    image.src = `assets/${repository.name}.png`;
    image.alt = `Imagem do repositório ${repository.name}`;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      image.src = FALLBACK_IMAGE;
    });

    const title = document.createElement("h2");
    title.textContent = repository.name;

    const description = document.createElement("p");
    description.textContent = repository.description ?? "Sem descrição.";

    card.append(image, title, description);
    this.addRepositoryLinkEvents(card, repository.html_url);

    return card;
  }

  createListItem(repository) {
    const item = document.createElement("li");
    item.className = "list";
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `Abrir repositório ${repository.name}`);

    const title = document.createElement("h2");
    title.textContent = repository.name;

    const language = document.createElement("p");
    language.textContent = "Linguagem: ";

    const languageName = document.createElement("strong");
    languageName.textContent = repository.language ?? "Markdown";

    language.append(languageName);
    item.append(title, language);
    this.addRepositoryLinkEvents(item, repository.html_url);

    return item;
  }

  addRepositoryLinkEvents(element, url) {
    element.addEventListener("click", () => {
      window.open(url, "_blank", "noopener,noreferrer");
    });

    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      }
    });
  }
}

const repositoriesRenderer = new GithubRepositoriesRenderer(
  cardsContainer,
  listContainer,
);

repositoriesRenderer.init();
