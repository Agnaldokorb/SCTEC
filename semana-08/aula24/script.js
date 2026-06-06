import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.0.1";

let container = document.querySelector("#cards");
let list = document.querySelector("#listas");

fetch("https://www.tabnews.com.br/api/v1/contents")
  .then((response) => response.json())
  .then((data) => {
    let primeiros = data.slice(0, 3);

    for (let item of primeiros) {
      let url = `https://www.tabnews.com.br/api/v1/contents/${item.owner_username}/${item.slug}`;
    }
    

    container.innerHTML = primeiros
      .map(
        (post) => `
        <div class="card" onclick="window.open('https://www.tabnews.com.br/${post.owner_username}/${post.slug}', '_blank')">
            <h2>${post.title}</h2>
            <p>${post.owner_username}</p>
        </div>
        `,
      )
      .join("");
    data.forEach((post) => {
      list.innerHTML += `
    <li class="list">
      <a 
        href="https://www.tabnews.com.br/${post.owner_username}/${post.slug}"
        target="_blank"
      >
        ${post.title}
      </a>
    </li>
  `;
    });
  });
