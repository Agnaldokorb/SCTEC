let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

function encontrarUnicos(arr1, arr2) { // Função para encontrar números únicos em ambas as arrays
  let combinados = [...arr1, ...arr2]; // Combinar as duas arrays em uma única array usando o operador spread
  let contagem = {};

  for (let numero of combinados) { // Contar a ocorrência de cada número na array combinada
    if (!contagem[numero]) {
      contagem[numero] = 0; // Inicializar a contagem para o número atual
    }

    contagem[numero] += 1; // Incrementar a contagem para o número atual
  }

  let unicos = []; // Array para armazenar os números únicos

  for (let numero of combinados) { // Verificar quais números aparecem apenas uma vez (únicos)
    if (contagem[numero] === 1) {
      unicos.push(numero); // Adicionar o número único ao array de números únicos
    }
  }

  return unicos; // Retornar o array de números únicos
}

let resultado = encontrarUnicos(array1, array2); // Chamar a função e armazenar o resultado


  console.log(resultado); // Exibir o resultado no console
