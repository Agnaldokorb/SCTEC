import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.0.1";

document.getElementById("ano").textContent = new Date().getFullYear();

let container = document.querySelector("#cards");
let liste = document.querySelector("#listas");

fetch("https://api.github.com/users/Agnaldokorb/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let primeiros = data.slice(17, 999);
    let listas = data.slice(0, 16);

    for (let item of primeiros) {
      let url = `https://api.github.com/users/Agnaldokorb/repos/${item.name}/readme`;
    }

    for (let items of listas) {
      let url = `https://api.github.com/users/Agnaldokorb/repos/${items.name}/readme`;
    }
    
    container.innerHTML = primeiros
      .map(
        (post) => `
        <div class="card" onclick="window.open('https://github.com/Agnaldokorb/${post.name}', '_blank')">
            <h2>${post.name}</h2>
            <p>${post.description}</p>
        </div>
        `,
      )
      .join("");
    data.forEach((post) => {
      post.language = post.language ?? "Markdown";
      liste.innerHTML = listas
        .map(
          (post) => `
        <div class="list" onclick="window.open('https://github.com/Agnaldokorb/${post.name}', '_blank')">
            <h2>${post.name}</h2>
            <p>Linguagem:<strong>${post.language}</strong></p>
        </div>
        `,
        )
        .join("");
    });
  });
