// ## Classes (JavaScript)

// Em JavaScript, Classes são uma forma mais organizada de criar objetos e reutilizar código usando orientação a objetos.

// Elas foram introduzidas no ES6 e funcionam como “modelos” para criar objetos.

console.log("Sintaxe Básica de uma Classe\n");

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método da classe
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("Agnaldo", 40);
pessoa1.apresentar(); // Olá, meu nome é Agnaldo e tenho 40 anos.

console.log("--------------------------------------------------");

console.log("Funções dentro de classes\n");

class calculadora {
    somar(a, b) {
        return a + b;
    }
}

const calc = new calculadora();
console.log(calc.somar(10, 5)); // 15

console.log("--------------------------------------------------");

console.log("Herança em Classes\n");

class Animal {
    falar() {
        console.log("Som emitido pelo animal");
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au au!");
    }
}

const dog = new Cachorro();
dog.falar(); // Som emitido pelo animal
dog.latir(); // Au au!

console.log("--------------------------------------------------");

console.log("Super() usado para acessar métodos da classe pai\n");

class usuario {
    constructor(nome) {
        this.nome = nome;
    }
}

class Admin extends usuario {
    constructor(nome, profissao) {
        super(nome); // super() chama o construtor da classe pai (usuario)
        this.profissao = profissao;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e minha profissão é ${this.profissao}.`);
    }
}

const admin = new Admin("Agnaldo", "Desenvolvedor");
admin.apresentar(); // Olá, meu nome é Agnaldo e minha profissão é Desenvolvedor.

console.log("--------------------------------------------------");

console.log("Encapsulamento com # para propriedades privadas\n");

class Conta {
  #saldo = 0 // # torna a propriedade privada

  depositar(valor) {
    this.#saldo += valor
  }

  verSaldo() {
    return this.#saldo
  }
}

const conta = new Conta()

conta.depositar(1252)

console.log(`R$${conta.verSaldo().toFixed(2)}`) // R$1252.00