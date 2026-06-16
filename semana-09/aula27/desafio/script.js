const API_URL = "https://brapi.dev/api/quote/list";
const ITEMS_PER_PAGE = 6;

const cardsElement = document.querySelector("#cards");
const statusElement = document.querySelector("#status");
const loadMoreButton = document.querySelector("#load-more");
const typeFiltersElement = document.querySelector("#type-filters");
const searchInput = document.querySelector("#search-input");

let allAssets = [];
let filteredAssets = [];
let selectedTypes = new Set();
let currentPage = 1;

function valueOrDash(value) {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  return String(value);
}

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatPrice(value) {
  const numeric = toNumber(value);

  if (numeric === null) {
    return "-";
  }

  return numeric.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

function formatPercent(value) {
  const numeric = toNumber(value);

  if (numeric === null) {
    return "-";
  }

  return `${numeric.toFixed(2)}%`;
}

function normalizeAsset(rawAsset) {
  return {
    stock: valueOrDash(rawAsset.stock),
    name: valueOrDash(rawAsset.name),
    type: valueOrDash(rawAsset.type),
    close: toNumber(rawAsset.close),
    change: toNumber(rawAsset.change),
    volume: toNumber(rawAsset.volume),
    marketCap: toNumber(rawAsset.market_cap),
    logo: rawAsset.logo,
  };
}

function renderTypeFilters() {
  const types = [...new Set(allAssets.map((asset) => asset.type))].sort();

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "filter-btn";
  allButton.textContent = "todos";
  allButton.classList.toggle("active", selectedTypes.size === 0);
  allButton.addEventListener("click", () => {
    selectedTypes.clear();
    updateFilteredAssets();
  });

  typeFiltersElement.innerHTML = "";
  typeFiltersElement.appendChild(allButton);

  types.forEach((type) => {
    const filterButton = document.createElement("button");
    filterButton.type = "button";
    filterButton.className = "filter-btn";
    filterButton.textContent = type;
    filterButton.classList.toggle("active", selectedTypes.has(type));

    filterButton.addEventListener("click", () => {
      if (selectedTypes.has(type)) {
        selectedTypes.delete(type);
      } else {
        selectedTypes.add(type);
      }

      updateFilteredAssets();
    });

    typeFiltersElement.appendChild(filterButton);
  });
}

function getSearchText() {
  return searchInput.value.trim().toLowerCase();
}

function matchesTextSearch(asset, text) {
  if (!text) {
    return true;
  }

  const allValues = Object.values(asset)
    .map((value) => String(value).toLowerCase())
    .join(" ");

  return allValues.includes(text);
}

function matchesTypeFilter(asset) {
  if (selectedTypes.size === 0) {
    return true;
  }

  return selectedTypes.has(asset.type);
}

function updateStatus() {
  const shown = Math.min(currentPage * ITEMS_PER_PAGE, filteredAssets.length);
  statusElement.textContent = `Mostrando ${shown} de ${filteredAssets.length} ativos.`;
}

function updateLoadMoreButton() {
  const canLoadMore = currentPage * ITEMS_PER_PAGE < filteredAssets.length;
  loadMoreButton.disabled = !canLoadMore;
  loadMoreButton.hidden = filteredAssets.length === 0;
}

function renderCards() {
  cardsElement.innerHTML = "";

  const maxItems = currentPage * ITEMS_PER_PAGE;
  const visibleAssets = filteredAssets.slice(0, maxItems);

  visibleAssets.forEach((asset) => {
    const card = document.createElement("article");
    card.className = "card";

    const percent = toNumber(asset.change);
    const variationClass =
      percent === null ? "" : percent >= 0 ? "positive" : "negative";

    card.innerHTML = `
			<div>
                <img src="${asset.logo}" alt="${asset.name} logo" class="asset-logo" />
				<h2>${asset.stock}</h2>
				<p>${asset.name}</p>
				<p><strong>Fechamento:</strong> ${formatPrice(asset.close)}</p>
				<p><strong>Variação:</strong> <span class="${variationClass}">${formatPercent(asset.change)}</span></p>
			</div>
			<span class="type-tag">${asset.type}</span>
		`;

    cardsElement.appendChild(card);
  });

  updateStatus();
  updateLoadMoreButton();
}

function updateFilteredAssets() {
  const searchText = getSearchText();

  filteredAssets = allAssets.filter((asset) => {
    return matchesTypeFilter(asset) && matchesTextSearch(asset, searchText);
  });

  currentPage = 1;

  renderTypeFilters();
  renderCards();

  if (filteredAssets.length === 0) {
    statusElement.textContent =
      "Nenhum ativo encontrado com os filtros atuais.";
  }
}

function getAssetsFromResponse(apiData) {
  if (Array.isArray(apiData)) {
    return apiData;
  }

  if (Array.isArray(apiData.stocks)) {
    return apiData.stocks;
  }

  if (Array.isArray(apiData.results)) {
    return apiData.results;
  }

  return [];
}

async function loadAssets() {
  try {
    statusElement.textContent = "Carregando ativos...";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Falha HTTP: ${response.status}`);
    }

    const data = await response.json();
    const rawAssets = getAssetsFromResponse(data);

    allAssets = rawAssets.map(normalizeAsset);

    if (allAssets.length === 0) {
      statusElement.textContent = "A API retornou lista vazia de ativos.";
      loadMoreButton.hidden = true;
      return;
    }

    updateFilteredAssets();
  } catch (error) {
    console.error(error);
    statusElement.textContent =
      "Nao foi possivel carregar os ativos. Tente novamente mais tarde.";
    loadMoreButton.hidden = true;
  }
}

loadMoreButton.addEventListener("click", () => {
  currentPage += 1;
  renderCards();
});

searchInput.addEventListener("input", () => {
  updateFilteredAssets();
});

loadAssets();
