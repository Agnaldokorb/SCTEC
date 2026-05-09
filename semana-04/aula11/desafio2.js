let produtos = [
  { name: "Camisa", category: "Roupas", stock: 10 },
  { name: "Calca", category: "Roupas", stock: 5 },
  { name: "Gravata", category: "Roupas", stock: 0 },
  { name: "Notebook", category: "Eletronicos", stock: 5 },
  { name: "Mouse", category: "Eletronicos", stock: 0 },
];

function produtosLista(lista) {
  return lista
    .filter((produto) => produto.stock > 0) // Filtrar produtos com estoque maior que 0
    .reduce((acumulador, produto) => { // Agrupar produtos por categoria

      if (!acumulador[produto.category]) { // Se a categoria ainda não existe no acumulador, criar um novo array para ela
        acumulador[produto.category] = []; 
      }

      acumulador[produto.category].push(produto); // Adicionar o produto ao array correspondente à sua categoria
      return acumulador;
    }, {});
}

let resultado = produtosLista(produtos); // Chamar a função e armazenar o resultado

  console.log(resultado);