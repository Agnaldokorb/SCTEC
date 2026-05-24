// ## Arrays vs Objects (JavaScript)

// - **Array**: lista ordenada de valores. Use quando a ordem/importa e você acessa por **índice** (0, 1, 2...).
// - **Object**: coleção de pares **chave → valor**. Use quando você acessa por **nome de propriedade**.

// ### Quando usar cada um

// - Use **array** para: listas (tarefas, itens, resultados), quando você precisa de **map/filter/reduce**, ordenação, posições.
// - Use **object** para: representar uma **entidade** (usuário, produto), configurações, dicionários (lookup por chave).

// ### Armadilhas e boas práticas

// - **Array é um tipo de object** em JS: `typeof [] === "object"`. Para checar array, use `Array.isArray(valor)`.
// - **Cópia rasa (shallow copy)**: `...` e `Object.assign` não clonam objetos aninhados.
// - Compare objetos/arrays por referência: `{} === {}` é `false`. Para comparar conteúdo, compare campos ou use uma estratégia específica.


console.log("Array — exemplos:\n");

const frutas = ["maçã", "banana", "laranja"];

frutas[0]; // "maçã"
frutas.push("uva"); // ["maçã", "banana", "laranja", "uva"] ** push adiciona no final
frutas.length; // 4

//percorre o array
for (const fruta of frutas) {
  console.log(fruta);
}

console.log("--------------------------------------------------");

console.log("Object — exemplos:\n");

const pessoa = {
  nome: "Agnaldo",
  idade: 40,
  ativo: true
};

pessoa.nome; // "Agnaldo"
pessoa["idade"]; // 40
pessoa.estado = "SC"; // adiciona nova propriedade
delete pessoa.ativo; // remove a propriedade "ativo"

console.log(pessoa);

console.log("--------------------------------------------------");

console.log("Transformar arrays:\n");

const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]
const soma = numeros.reduce((acc, n) => acc + n, 0); // 15

console.log("Dobro:", dobro);
console.log("Pares:", pares);
console.log("Soma:", soma);

console.log("--------------------------------------------------");

console.log("Trabalhar com objetos:\n");

const usuario = { nome: "Maria", idade: 30, ativo: false };

const objetos = Object.keys(usuario); // ["nome", "idade", "ativo"]
const valores = Object.values(usuario); // ["Maria", 30, false]
const entradas = Object.entries(usuario); // [["nome", "Maria"], ["idade", 30], ["ativo", false]]

console.log("Chaves:", objetos);
console.log("Valores:", valores);
console.log("Entradas:", entradas);

console.log("--------------------------------------------------");

console.log("Comparação de arrays/objetos:\n");

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (comparação por referência) porque são objetos diferentes na memória   
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false (comparação por referência) porque são objetos diferentes na memória

// Para comparar conteúdo, precisamos comparar campo a campo ou usar uma função de comparação profunda (deep equality).

