// polindromo
function polindromo(palavra) {
    const palavraLimpa = palavra
        .replace(/[^a-zA-Z0-9]/g, '') // remove caracteres não alfanuméricos e espaços
        .toLowerCase(); // converte para minúsculas
    const palavraReversa = palavraLimpa
        .split('') // divide a string em um array de caracteres
        .reverse() // inverte o array
        .join(''); // junta o array de volta em uma string

    return palavraLimpa === palavraReversa; // compara a string limpa com a string reversa
}
console.log(polindromo("A grama é amarga")); // true 