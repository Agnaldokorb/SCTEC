let entrada = [
    { valor: 50 }, 
    { valor: 120 }, 
    { valor: 80 }
]; // array de objetos de entrada, cada um contendo uma propriedade "valor"

let resultado = {   // objeto para armazenar os resultados finais
  maiorQue200: 0,
  menorOuIgual200: 0,
};

for (let item of entrada) { // percorre cada objeto do array de entrada
  let valorMultiplicado = item.valor * 2; // multiplica o valor do item por 2

  if (valorMultiplicado > 200) { // verifica se o valor multiplicado é maior que 200
    resultado.maiorQue200++; // incrementa o contador de maiorQue200 se a condição for verdadeira
  } else {
    resultado.menorOuIgual200++; // incrementa o contador de menorOuIgual200 se a condição for falsa
  }
}

console.log(resultado);
