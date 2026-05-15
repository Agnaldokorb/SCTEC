export class Cachorro { //classe para criar os cachorros, com as propriedades nome, idade, raca, vacinado, porte, qtdPatas, corDoPelo, castrado, bravo e adestrado
    constructor(){
       this.nome = null
       this.idade = 0
       this.raca = null
       this.vacinado = false
       this.porte = null
       this.qtdPatas = null
       this.corDoPelo = null
       this.castrado = true
       this.bravo = false
       this.adestrado = false
    }
    nascer(temDonoHumano, nome, caracteristicas){ //metodo para criar um cachorro, verificando se ele tem dono humano ou não, e atribuindo as caracteristicas do cachorro
        if(!temDonoHumano){
            this.nome = ""
        }else{
            this.nome = nome
        }

        this.raca = caracteristicas.raca
        this.porte = caracteristicas.porte
        this.qtdPatas = caracteristicas.qtdPatas
        this.corDoPelo = caracteristicas.corDoPelo
    }
    vacinar(){ //metodo para vacinar o cachorro, verificando se ele tem dono humano ou não, e atribuindo a propriedade vacinado como true
        this.vacinado = true
    }
    passarUmAno(){ //metodo para passar um ano, aumentando a idade do cachorro em 1
        this.idade += 1
    }
}

let doguinho = new Cachorro() //criando um novo cachorro, onde as propriedades nome, idade, raca, vacinado, porte, qtdPatas, corDoPelo, castrado, bravo e adestrado são atribuídas como null, 0 ou false, dependendo do tipo da propriedade
doguinho.nascer(true, "doguinho", 
    {
        raca:"caramelo",
        porte:"Grande",
        qtdPatas:4,
        corDoPelo:'laranja',
    }
)

if(doguinho.temDonoHumano){ //verificando se o cachorro tem dono humano ou não, e vacinando o cachorro caso ele tenha dono humano
    doguinho.vacinar()
}

doguinho.passarUmAno()

console.log(doguinho)