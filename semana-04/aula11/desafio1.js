let anagramas = [
  "amor",  "roma", "maro",
  "porta",  "tropa",
  "alegria",  "galeria",
  "listen",  "silent",
  "care",
];

function agruparAnagramas(arr) {
  let mapa = {}; // Objeto para armazenar os grupos de anagramas

  for (let palavra of arr) {
    let assinatura = palavra.split("").sort().join(""); // Gerar a assinatura da palavra (letras ordenadas)

    if (!mapa[assinatura]) { // Se a assinatura ainda não existe no mapa, criar um novo grupo
      mapa[assinatura] = [];
    }

    mapa[assinatura].push(palavra); // Adicionar a palavra ao grupo correspondente à sua assinatura
  }

  return Object.values(mapa); // Retornar os grupos de anagramas como um array de arrays
}

let resultado = agruparAnagramas(anagramas); // Chamar a função e armazenar o resultado
console.log(resultado);
