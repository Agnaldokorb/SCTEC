let matriz = [
  // matriz 2x2
  [1, 2],
  [3, 4],
];

let somaTotal = 0; // variável para armazenar a soma total dos elementos da matriz

for (let linha of matriz) {
  // percorre cada linha da matriz
  for (let valor of linha) {
    // percorre cada elemento da linha atual
    somaTotal += valor; // adiciona o valor do elemento atual à soma total
  }
}

console.log(somaTotal);
