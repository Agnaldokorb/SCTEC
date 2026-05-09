let obj1 = [
    { nome: "eduardo", idade: 29 }, 
    { nomeDoGato: "peppa" }
]; // array de objetos de entrada, cada um contendo diferentes chaves e valores

let objFinal = {};  // objeto vazio para armazenar as chaves e valores combinados dos objetos dentro do array

for (let obj of obj1) { // percorre cada objeto dentro do array
  for (let chave in obj) { // percorre cada chave do objeto
    objFinal[chave] = obj[chave]; // atribui o valor da chave ao objFinal, sobrescrevendo se a chave já existir
  }
}
console.log(objFinal);