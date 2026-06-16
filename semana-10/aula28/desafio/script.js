const schema = {
  type: "array",
  items: {
    type: "string",
    pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
  },
};

let foto = document.querySelector("#foto");
let processa = document.querySelector("#processa");

processa.onclick = async () => {
  let userFoto = foto.files[0];

  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  console.log("inicia");
  const response = await session.prompt(
    [
      {
        role: "user",
        content: [
          {
            type: "text",
            value:
              "Realize a colorimetria desda pessoa da imagem e retorne as cores que vão destacar os seus traços",
          },
          { type: "image", value: userFoto },
        ],
      },
    ],
    {
      responseConstraint: schema,
    },
  );
  let arrDeCores = JSON.parse(response);
    console.log(arrDeCores)
  // document.body.style.backgroundColor = arrDeCores[0]
  const container = document.querySelector("#container");
  const card = document.createElement("section");
  card.id = "card";

  const img = document.createElement("img");
  img.src = URL.createObjectURL(userFoto);
  card.appendChild(img);

  const colorsRow = document.createElement("div");
  colorsRow.className = "colors-row";

  arrDeCores.forEach((cor) => {
    const circle = document.createElement("div");
    circle.className = "color-circle";
    circle.style.backgroundColor = cor;
    colorsRow.appendChild(circle);
  });

  card.appendChild(colorsRow);

  container.appendChild(card);
  // para cada vez que esse codigo chegar aqui
  // criar o novo card e inseri-lo no container flex
  // o card deve possuir a foto mandada e as cores em circulos
};

async function startApp() {
  // LanguageModel
}
startApp();
