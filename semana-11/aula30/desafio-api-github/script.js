let usernameInput = document.getElementById("username");
let searchForm = document.getElementById("search-form");
let loadUsersButton = document.getElementById("load-users");
let loadReposButton = document.getElementById("load-repos");
let resultsSection = document.getElementById("results");
let pendingListSpan = document.getElementById("pending-list");

let pendingUsernames = [];

function updatePendingList() {
  if (pendingUsernames.length === 0) {
    pendingListSpan.textContent = "Nenhum usuário.";
    return;
  }

  pendingListSpan.textContent = pendingUsernames.join(", ");
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = usernameInput.value.trim();

  if (!username) {
    return;
  }

  if (!pendingUsernames.includes(username)) {
    pendingUsernames.push(username);
    updatePendingList();
  }

  usernameInput.value = "";
});

function createUserCard(user) {
  let card = document.createElement("article");
  card.className = "card";

  let profileUrl = user.html_url;

  card.innerHTML = `
    <div class="card-header">
      <img class="avatar" src="${user.avatar_url}" alt="Avatar de ${user.login}" />
      <div>
        <h3 class="card-title"><a href="${profileUrl}" target="_blank" rel="noopener noreferrer">${user.name || user.login}</a></h3>
        <p class="card-text">Login: ${user.login}</p>
      </div>
    </div>
    <p class="card-text">Bio: ${user.bio || "Não disponível"}</p>
    <p class="card-text">Repositórios públicos: ${user.public_repos}</p>
    <div class="card-footer">
      <a href="${profileUrl}" target="_blank" rel="noopener noreferrer">Ver perfil no GitHub</a>
    </div>
  `;

  return card;
}

function createRepoCard(user, repos) {
  let card = document.createElement("article");
  card.className = "card";

  let profileUrl = user.html_url;

  let repoListItems = repos
    .slice(0, 10)
    .map(
      (repo) => `
      <li><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></li>
    `,
    )
    .join("");

  card.innerHTML = `
    <div class="card-header">
      <img class="avatar" src="${user.avatar_url}" alt="Avatar de ${user.login}" />
      <div>
        <h3 class="card-title"><a href="${profileUrl}" target="_blank" rel="noopener noreferrer">${user.name || user.login}</a></h3>
        <p class="card-text">Login: ${user.login}</p>
      </div>
    </div>
    <p class="card-text">Repositórios públicos: ${user.public_repos}</p>
    <div class="card-footer">
      <strong>Repositórios:</strong>
      <ul class="repo-list">
        ${repoListItems}
      </ul>
    </div>
  `;

  return card;
}

function showMessage(message) {
  resultsSection.innerHTML = `<p class="message">${message}</p>`;
}

async function searchMatchingUsers(query) {
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}+in:login+in:fullname&per_page=6`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    return {
      error: `Erro na busca de "${query}": ${data.message || response.statusText}`,
    };
  }

  if (!data.items || data.items.length === 0) {
    return { error: `Nenhum usuário encontrado para "${query}".` };
  }

  return { users: data.items };
}

async function fetchUserDetails(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (!response.ok) {
    return {
      error: `Erro ao obter usuário ${username}: ${data.message || response.statusText}`,
    };
  }

  return { user: data };
}

async function fetchUserRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`,
  );
  const data = await response.json();

  if (!response.ok) {
    return {
      error: `Erro ao obter repositórios de ${username}: ${data.message || response.statusText}`,
    };
  }

  return { repos: data };
}

async function loadUsers() {
  if (pendingUsernames.length === 0) {
    showMessage("Adicione usuários primeiro antes de carregar.");
    return;
  }

  resultsSection.innerHTML = "";
  let cardsGrid = document.createElement("div");
  cardsGrid.className = "cards-grid";
  let hasCard = false;

  for (const query of pendingUsernames) {
    const searchResult = await searchMatchingUsers(query);

    if (searchResult.error) {
      let errorCard = document.createElement("article");
      errorCard.className = "card";
      errorCard.innerHTML = `<p class="card-text">${searchResult.error}</p>`;
      cardsGrid.appendChild(errorCard);
      continue;
    }

    for (const userItem of searchResult.users) {
      const userDetails = await fetchUserDetails(userItem.login);
      if (userDetails.error) {
        let errorCard = document.createElement("article");
        errorCard.className = "card";
        errorCard.innerHTML = `<p class="card-text">${userDetails.error}</p>`;
        cardsGrid.appendChild(errorCard);
        continue;
      }

      cardsGrid.appendChild(createUserCard(userDetails.user));
      hasCard = true;
    }
  }

  if (!hasCard) {
    showMessage("Nenhum resultado válido foi encontrado.");
  } else {
    resultsSection.appendChild(cardsGrid);
  }
}

async function loadRepos() {
  if (pendingUsernames.length === 0) {
    showMessage("Adicione usuários primeiro antes de carregar.");
    return;
  }

  resultsSection.innerHTML = "";
  let cardsGrid = document.createElement("div");
  cardsGrid.className = "cards-grid";
  let hasCard = false;

  for (const query of pendingUsernames) {
    const searchResult = await searchMatchingUsers(query);

    if (searchResult.error) {
      let errorCard = document.createElement("article");
      errorCard.className = "card";
      errorCard.innerHTML = `<p class="card-text">${searchResult.error}</p>`;
      cardsGrid.appendChild(errorCard);
      continue;
    }

    for (const userItem of searchResult.users) {
      const [userDetails, reposResult] = await Promise.all([
        fetchUserDetails(userItem.login),
        fetchUserRepos(userItem.login),
      ]);

      if (userDetails.error) {
        let errorCard = document.createElement("article");
        errorCard.className = "card";
        errorCard.innerHTML = `<p class="card-text">${userDetails.error}</p>`;
        cardsGrid.appendChild(errorCard);
        continue;
      }

      if (reposResult.error) {
        let errorCard = document.createElement("article");
        errorCard.className = "card";
        errorCard.innerHTML = `<p class="card-text">${reposResult.error}</p>`;
        cardsGrid.appendChild(errorCard);
        continue;
      }

      cardsGrid.appendChild(
        createRepoCard(userDetails.user, reposResult.repos),
      );
      hasCard = true;
    }
  }

  if (!hasCard) {
    showMessage("Nenhum resultado válido foi encontrado.");
  } else {
    resultsSection.appendChild(cardsGrid);
  }
}

loadUsersButton.addEventListener("click", loadUsers);
loadReposButton.addEventListener("click", loadRepos);
