let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
  let map = {}; // {complemento: indice}

  for (let indice = 0; indice < nums.length; indice++) {
    // Percorre o array
    let valor = nums[indice]; // Pega o valor atual
    // Verifica se o complemento já existe no mapa
    if (map[valor] !== undefined) {
      // Se existir, retorna os índices
      return [map[valor], indice]; // [0, 1]
    }
    // Calcula o complemento e armazena
    let subtracao = target - valor; // Calcula o complemento
    map[subtracao] = indice; // Armazena o complemento e o índice
  }
  return []; // Se não encontrar
}

console.log(twoSum(nums, target)); // [0, 1]
