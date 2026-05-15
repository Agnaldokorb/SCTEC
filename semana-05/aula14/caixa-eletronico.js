let usuarios = [];

class Usuario { //classe para criar o usuario
    constructor() {
        this.nome = null;
        this.senha = null;
    }
    login(nome, senha) {    //metodo para realizar o login
        for (const usuario of usuarios) {
            if (usuario.nome === nome) {
                if (usuario.senha === senha) {
                    alert("login realizado com sucesso")
                    return true;
                } 
            } 
        }
        alert("Login não realizado")
        return false;
    }
    cadastrar(nome,senha) {    //metodo para cadastrar o usuario
        this.nome = nome;
        this.senha = senha;
    }
}

class Saldo {   //classe para realizar as operações de saldo
    constructor(usuario) {
        this.saldo = 0;
        this.usuario = usuario
    }
    sacar (valor) { //metodo para realizar o saque
        if (this.saldo < valor && !isNaN(valor)) {
            alert("Saldo insuficiente")
        } else {
            this.saldo = this.saldo - valor;
            alert("Valor sacado: R$"+valor);
        }
    }
    depositar (valor) { //metodo para realizar o deposito
        this.saldo = this.saldo + valor;
        alert("Valor depositado: R$"+valor);
         
    }
}

let loginRealizado = false; //variavel para verificar se o login foi realizado
let usuario = new Usuario(); //criando um novo usuario
let saldo = new Saldo(usuario); //criando um novo saldo para o usuario criado

let input = prompt("O que deseja fazer? 1 - cadastro, 2 - login, 3 - depositar, 4 - sacar, x - sair"); //variavel para receber a escolha do usuario

while (input !== "x") { //loop para manter o programa rodando até o usuario escolher sair
    switch (input) {
        case "1": //caso o usuario escolha a opção de cadastro
            let novoUsuario = new Usuario();
            nome = prompt("Digite o nome do usuário:");
            senha = prompt("Crie uma senha para o usuário");
            novoUsuario.cadastrar(nome, senha);

            usuarios.push(novoUsuario);
            break;

        case "2": //caso o usuario escolha a opção de login
            nome = prompt("Digite o nome do usuário:");
            senha = prompt("Crie uma senha para o usuário");
            loginRealizado = usuario.login(nome, senha);
            break;
        
        case "3": //caso o usuario escolha a opção de depositar
            if (loginRealizado) {
                let valor = Number(prompt("Digite o valor que deseja depositar:"));
                saldo.depositar(valor);
                alert("Saldo atual: R$"+saldo.saldo)                
            } else {
                alert("Realize o login primeiro.");
            }
            break;

        case "4": //caso o usuario escolha a opção de sacar
            if (loginRealizado) {
                let valor = Number(prompt("Digite o valor que deseja sacar:"))
                saldo.sacar(valor);
                alert("saldo atual: R$"+saldo.saldo)
            } else {
                alert("Realize o login primeiro.");
            }
    
        default: //caso o usuario escolha uma opção inválida
            alert("Opção inválida")
            break;
    }
    input = prompt("O que deseja fazer? 1 - cadastro, 2 - login, 3 - depositar, 4 - sacar, x - sair");
}