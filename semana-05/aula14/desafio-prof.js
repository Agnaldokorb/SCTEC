class Item{ //classe para criar os itens do inventario
    constructor(nome, valor){
        this.nome = nome;
        this.valor = valor;
    }
}

class ItemNoInventario{ //classe para criar os itens que estão no inventario, com a quantidade e se estão ativos ou não
    constructor(item){
        this.item = item;
        this.quantidade = 0;
        this.ativo = false;        
    }
}

class Inventario{ //classe para criar o inventario, com o limite de itens, os itens possíveis e os itens guardados
    constructor(){
        this.limite = 20;
        this.itensPossiveis = []; //itens
        this.itensGuardados = []; //itensNoInventario
    }
    cadastrarItem(item){ //metodo para cadastrar um item no inventario, verificando se o limite de itens possíveis foi atingido
        this.itensPossiveis.push(item)
    }
    listarItens(){ //metodo para listar os itens possíveis do inventario
        this.itensPossiveis.forEach((item, index) => {
            alert(`${index + 1} - ${item.nome} - R$${item.valor}`)
        })
    }
    buscarItemPorNome(nome){ //metodo para buscar um item por nome, retornando o item encontrado ou undefined caso não encontre
        return this.itensPossiveis.find(item => item.nome === nome)
    }
}

let inventario = new Inventario() //criando um novo inventario











alert("Ola selecione oque deseja fazer")
let mensagem = prompt(
    "Qual ação você quer tomar?\n 1- Cadastrar um produto \n 2- Listar Itens\n 3- Buscar um produto por nome\n X- Sair")

    while(mensagem !== "x") {
        switch(mensagem){
            case "1":
                let nome = prompt("Digite o nome do produto")
                let valor = prompt("Digite o valor do produto")
                let item = new Item(nome, valor)
                inventario.cadastrarItem(item)
                alert("Produto cadastrado com sucesso")
                break
            case "2":
                inventario.listarItens([])
                break
            case "3":
                let nomeBusca = prompt("Digite o nome do produto que deseja buscar")
                let itemEncontrado = inventario.buscarItemPorNome(nomeBusca)
                if (itemEncontrado) {
                    alert(`Produto encontrado: ${itemEncontrado.nome} - R$${itemEncontrado.valor}`)
                } else {
                    alert("Produto não encontrado")
                }
                break
            default:
                alert("Opção invalida")
        }
        mensagem = prompt(
            "Qual ação você quer tomar?\n 1- Cadastrar um produto \n 2- Listar Itens\n 3- Buscar um produto por nome\n X- Sair")
    }