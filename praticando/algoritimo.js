// ##Variáveis e tipos
// - Number, String, Boolean
//------------------------------------------

// ##Operadores
// - Aritméticos: +, -, *, /
// - Comparação: ==, ===, !=, <, >, <=, >=
// - Lógicos: &&, ||, !
//------------------------------------------

// ##Estruturas de controle
//     - Condicionais: if / else
//     - Repetição: for / while
//-------------------------------------------

// ##Funções
//     - Quebrar o problema em partes menores (reuso + clareza)
//----------------------------------------------------------------

console.log("1) Par ou ímpar")

function parOuImpar(n) {
  if (n % 2 === 0) return "par";
  return "ímpar";
}

console.log(parOuImpar(6));
console.log("--------------------------------------------------");

console.log("2) Maior de 3 números")

function maiorDe3(a, b, c) {
  let maior = a;
  if (b > maior) maior = b;
  if (c > maior) maior = c;
  return maior;
}
console.log(maiorDe3(5, 10, 3));
console.log("--------------------------------------------------");

console.log("3) Soma de 1 até N")

function somaAteN(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}
console.log(somaAteN(2));
console.log("--------------------------------------------------");

console.log("4) Contador com regra")

function fizzBuzz() {
  for (let i = 1; i <= 15; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz();
console.log("--------------------------------------------------");

console.log("5) Média 7")

function media(m1, m2, m3) {
    let calculo = ((m1 + m2 + m3) / 3).toFixed(2)
    if(calculo < 7) 
        console.log(`Sua media foi ${calculo}, voce esta reprovado`)
    else if (calculo == 7) {
        console.log(`Sua media foi ${calculo}, você foi aprovado`)
    }else console.log(`sua media foi ${calculo}, parabens você esta acima da média`) 
}
media(6, 9, 8)




