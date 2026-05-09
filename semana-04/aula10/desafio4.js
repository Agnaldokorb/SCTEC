// Compressão de string
function compressaoString(str) { // Função para comprimir a string
    let resultado = ''; // Variável para armazenar o resultado da compressão
    let count = 1; // Contador para contar ocorrências consecutivas de caracteres

    for (let i = 0; i < str.length; i++) { // Loop para percorrer cada caractere da string
        if (str[i] === str[i + 1]) { // Verifica se o caractere atual é igual ao próximo
            count++; // Incrementa o contador se os caracteres forem iguais
        } else { // Caso contrário, adiciona o caractere e sua contagem ao resultado
            resultado += str[i] + (count > 1 ? count : '1') + ' '; // Adiciona o caractere e a contagem (ou 1 se for único) ao resultado
            count = 1; // Reseta o contador para o próximo caractere
        }
    }
    return resultado.trim(); // Retorna o resultado da compressão, removendo espaços extras
}

console.log(compressaoString("aaabbc")); // "a3 b2 c1"