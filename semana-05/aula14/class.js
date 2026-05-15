export class Jogador { //classe para criar os jogadores do time
    constructor(nome, posicao) {
        this.nome = nome;
        this.posicao = posicao;
    }
}

const jogador1 = new Jogador("Neymar", "Atacante"); //criando um novo jogador
const jogador2 = new Jogador("Alisson", "Goleiro"); //criando um novo jogador

const jogadores = [jogador1, jogador2]; //criando um array de jogadores, onde cada jogador é um objeto do tipo Jogador, com as propriedades nome e posicao

console.log(jogadores); //imprimindo o array de jogadores, onde cada jogador é um objeto do tipo Jogador, com as propriedades nome e posicao