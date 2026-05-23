let list = [10, 1000, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let callback = (item) => {
  // função de callback para o filter
  if (item > 5) {
    return true;
  }
  return false;
};

let resultado = list.filter(callback);

console.log(resultado);

//----------------------------------------------------------

function filter(list, callback) {
  // função de filtro personalizada
  let result1 = [];
  for (let item of list) {
    if (callback(item)) {
      result1.push(item);
    }
  }
  return result1;
}

let result1 = filter(list, callback);

console.log(result1);

//----------------------------------------------------------

function every(list, callback) {
  // função de every personalizada
  for (let item of list) {
    if (!callback(item)) {
      return false;
    }
  }
  return true;
}

let result2 = every(list, callback);

console.log(result2);

//----------------------------------------------------------

//let nuns = [1, 2, 3, 4, 5];

let pessoas = [
  { receitaMensal: 1000, nome: "João", idade: 20 },
  { receitaMensal: 2000, nome: "Maria", idade: 25 },
  { receitaMensal: 3000, nome: "José", idade: 35 },
];

let reduceCallback = (acumulado, atual) => {
  if (atual.idade >= 20 && atual.idade <= 30) {
    return acumulado + atual.receitaMensal;
  }

  return acumulado;
};

let resulte = pessoas.reduce(reduceCallback, 0);

console.log(resulte);

function reduce(array, callback, initialValue) {
  let acumulado = initialValue;

  for (let item of array) {
    acumulado = callback(acumulado, item);
  }

  return acumulado;
}

let result3 = reduce(pessoas, reduceCallback, 0);

console.log(result3);

//----------------------------------------------------------
