let matriz = [ 
    // matriz 2x2
  [1, 2],
  [3, 4],
];

let linhas = []; // array para armazenar a soma de cada linha
let colunas = []; // array para armazenar a soma de cada coluna, inicializado como vazio e preenchido durante a iteração

for (let [l, linha] of matriz.entries()) { // percorre cada linha da matriz, usando entries() para obter o índice da linha (l) e a própria linha (linha)
  let somaLinha = 0; // variável para armazenar a soma dos elementos da linha atual  

  for (let [c, valor] of linha.entries()) { // percorre cada elemento da linha atual, usando entries() para obter o índice da coluna (c) e o valor do elemento (valor)
    somaLinha += valor; // adiciona o valor do elemento atual à soma da linha

    if (l === 0) { // se estivermos na primeira linha, inicializamos a soma da coluna correspondente
      colunas[c] = 0; // inicializa a soma da coluna c na primeira linha
    }

    colunas[c] += valor; // adiciona o valor do elemento atual à soma da coluna correspondente
  }

  linhas.push(somaLinha); // adiciona a soma da linha atual ao array de linhas
}

let resultado = {   // objeto para armazenar os resultados finais
  linhas: linhas,
  colunas: colunas,
};

console.log(resultado);