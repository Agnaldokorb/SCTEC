// reverter frase
function reverterFrase(frase) {
  return frase
    .split(/\s+/) // Divide a string em um array de palavras usando um espaço como delimitador 
    .reverse() // Inverte a ordem das palavras no array
    .join(" "); // Junta as palavras de volta em uma string, separadas por um espaço
}

console.log(reverterFrase("hello world")); // "world hello"
console.log(reverterFrase("javascript is fun")); // "fun is javascript"