// DESAFIO 1
/*classe database com lista de objeto produtos ** ok **
metodos desejados: listar produtos (por menor ou maior preço) ** ok **
{nome, categoria,preco} buscar por palavra chave ou seja validar se o texto é contido em qualquer uma das 3 propriedades ** ok **
listar produtos de forma paginada (de 5 em 5)
*/

class Database {
  // classes com a lista de objetos
  constructor() {
    this.produtos = [
      { nome: "Notebook", categoria: "Eletrônicos", preco: 3500 },
      { nome: "Mouse Gamer", categoria: "Eletrônicos", preco: 150 },
      { nome: "Teclado Mecânico", categoria: "Eletrônicos", preco: 300 },
      { nome: "Cadeira Gamer", categoria: "Móveis", preco: 1200 },
      { nome: "Mesa Escritório", categoria: "Móveis", preco: 800 },
      { nome: "Monitor", categoria: "Eletrônicos", preco: 900 },
      { nome: "Fone Bluetooth", categoria: "Áudio", preco: 250 },
      { nome: "Celular", categoria: "Eletrônicos", preco: 2200 },
      { nome: "Smartwatch", categoria: "Tecnologia", preco: 700 },
      { nome: "Carregador", categoria: "Acessórios", preco: 80 },
      { nome: "Impressora HP", categoria: "Eletrônicos", preco: 650 },
      { nome: "Webcam Full HD", categoria: "Periféricos", preco: 280 },
      { nome: "HD Externo 1TB", categoria: "Armazenamento", preco: 420 },
      { nome: "SSD 512GB", categoria: "Armazenamento", preco: 350 },
      { nome: "Microfone USB", categoria: "Áudio", preco: 500 },
      { nome: "Caixa de Som JBL", categoria: "Áudio", preco: 750 },
      { nome: "Ventilador", categoria: "Eletrodomésticos", preco: 200 },
      { nome: "Ar Condicionado", categoria: "Eletrodomésticos", preco: 2800 },
      { nome: "Geladeira", categoria: "Eletrodomésticos", preco: 4200 },
      { nome: "Fogão 5 bocas", categoria: "Eletrodomésticos", preco: 1900 },
    ];
  }

  listarProdutosMenor() {
    return this.produtos.sort((a, b) => a.preco - b.preco);
  }

  listarProdutosMaior() {
    return this.produtos.sort((a, b) => b.preco - a.preco);
  }

  listaDeCategorias() {
    return this.produtos.map((produto) => produto.categoria);
  }

  buscar(palavra) {
    // Busca palavra chave
    return this.produtos.filter((produto) => {
      // filter() cria um novo array contendo apenas os elementos do array original que passaram em um teste de condição
      const texto = `
        ${produto.nome} 
        ${produto.categoria} 
        ${produto.preco}
        `.toLowerCase();

      return texto.includes(palavra.toLowerCase()); //toLowerCase() converte todos os caracteres alfabéticos de uma string para minúsculas
    });
  }

  listarPaginado(pagina = 1) {
    // paginação de 5 em 5

    const limite = 5; // declara o limite para paginação de 5

    const inicio = (pagina - 1) * limite; // calcula em qual posição do array a página deve começar.

    const fim = inicio + limite; // calcula se chegou ao limite

    return this.produtos.slice(inicio, fim); //.slice() é usado para extrair uma parte de uma string ou de um array e retorná-la como um novo elemento, sem alterar o dado original
  }
}

const nomeCat = "";
const db = new Database();

let input = prompt(
  "O que deseja fazer? 1 - Listar categorias , 2 - buscar categoria, 3 - maiores valores 4 - Menores valor  5 - listar paginação, x - sair",
);

while (input !== "x") {
  switch (input) {
    case "1":
      alert("Lista de categorias \n" + JSON.stringify(db.listaDeCategorias()));
      break;
    case "2": {
      let nomeCat = prompt(
        "Digite o nome do produto, categoria ou preço que deseja buscar:",
      );

      if (!nomeCat) {
        alert("Digite um valor valido!");
      }

      const resultado = db.buscar(nomeCat);

      if (resultado.length === 0) {
        alert("Nenhum produto encontrado!");
      } else {
        const texto = resultado
          .map((p) => `${p.nome} - ${p.categoria} - R$${p.preco}`)
          .join("\n");

        alert(texto);
      }

      break;
    }
    case "3":
      alert("MAIOR PREÇO \n" + JSON.stringify(db.listarProdutosMaior()));
      break;
    case "4":
      alert("MENOR PREÇO \n" + JSON.stringify(db.listarProdutosMenor()));
      break;
    case "5":
      alert("PÁGINA 1" + JSON.stringify(db.listarPaginado(1)));

      alert("PÁGINA 2" + JSON.stringify(db.listarPaginado(2)));
      break;

    default: //caso o usuario escolha uma opção inválida
      alert("Opção inválida");
      break;
  }
  input = prompt(
    "O que deseja fazer? 1 - Listar categorias , 2 - buscar categoria, 3 - maiores valores 4 - Menores valor, x - sair",
  );
}

// DESAFIO 2
/*classe casa inteligente
propriedade temAlguem
metodo toctoc
quando não houver ninguém na casa e toctoc for chamado nada deve acontecer, se tem alguém, retorna a trsing "quem é?"
inicia a classe sem ninguém > chama o toc toc > confirma que nao houve resposta > muda o valor da propriedade temalguem para true
> chama o metodo toc toc e ve que houve resposta
depois retira a pessoa e chama mais uma vez
*/

/*class casaInteligente {
    constructor(temAlguem){
        this.temAlguen = false // inicia sem ninguem em casa
    };
    
    toctoc() {
        if(this.temAlguen) { 
            return "quem é?"
        }
        return // nao retorna nada se ninguem em casa
    };
};

const casa = new casaInteligente(); // cria a casa


alert(casa.toctoc()); // sem ninguém "undefined"


casa.entrar(); // tem alguem em casa

alert(casa.toctoc()); // retorna: quem é?*/
