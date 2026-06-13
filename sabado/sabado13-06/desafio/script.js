const conteudo = document.getElementById("cards");
const geral = document.getElementById("geral");

let listOriginal = [];

function recarregaLista(list) {
  let html = "";
  for (let item of list) {
    const name = item.name;
    const origin = item.origin;
    const temperament = item.temperament;
    const description = item.description;
    const url = item.vetstreet_url || item.wikipedia_url || "#";
    html += `
            <div class="card">
                <h2>Raça: <strong>${name}</strong></h2>
                <p>Origem: <strong>${origin}</strong></p>
                <p>Temperamento: <strong>${temperament}</strong></p>
                <p>Descrição: <strong>${description}</strong></p>
                <p>Mais Informações: <a href="${url}" target="_blank">${url}</a></p>
            </div>`;
  }
  conteudo.innerHTML = html;
}

fetch("https://api.thecatapi.com/v1/breeds")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    listOriginal = data;
    recarregaLista(data);
  });

geral.oninput = () => {
  let textoDigitado = geral.value;
  let deveAparecer = listOriginal.filter((item) => {
    let isValid = false;

    for (let key in item) {
      if (item[key] != null) {
        isValid = String(item[key])
          .toLowerCase()
          .includes(textoDigitado.toLowerCase());
        if (isValid) {
          break;
        }
      }
    }
    return isValid;
  });
  recarregaLista(deveAparecer);
};
