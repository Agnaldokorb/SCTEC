// ## Promise / Async / Await (resumo rápido)

// - **Promise** é um objeto que representa um valor que vai estar disponível no futuro (ou um erro).
//     - Estados: `pending` → `fulfilled` (resolvida) ou `rejected` (rejeitada).
//     - Você consome com **`.then()`** (sucesso) e **`.catch()`** (erro) e pode usar **`.finally()`** (sempre).
// - **async/await** é “açúcar sintático” em cima de Promises: deixa o código assíncrono com cara de código sequencial.
//     - Uma função `async` **sempre retorna uma Promise**.
//     - `await` **pausa** a execução daquela função `async` até a Promise resolver/rejeitar.

// ## Quando usar

// - Use **Promise + then/catch** quando for encadear rapidamente ou em APIs que já trabalham com `.then`.
// - Use **async/await** quando quiser legibilidade (especialmente com várias etapas e `try/catch`).

// ## Pegadinhas comuns

// - **Esquecer o `await`**: você não pega o valor, pega a Promise (aparece como `Promise { <pending> }`).
// - **`await` em loop**: se precisa ser sequencial, ok; se pode ser paralelo, prefira `Promise.all`.
// - **Tratamento de erro**:
//     - Com `then/catch`: use `.catch(...)`.
//     - Com `async/await`: use `try/catch` (ou deixe estourar e trate “em cima”).

// ## Exemplos (JavaScript)

console.log("1) Criando e consumindo uma Promise")

// Simula uma operação assíncrona (ex: API, timer)
function esperar(ms) { 
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Esperou ${ms}ms`), ms);
    });
}

esperar(3600)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro))
    .finally(() => console.log("Fim da espera!"));

console.log("--------------------------------------------------");


// A função async sempre retorna uma Promise
async function exemploAsync() {
    try {
        const resultado = await esperar(3600);
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    } finally {
        console.log("Fim da espera!");
    }   
}

exemploAsync();

console.log("--------------------------------------------------");

console.log("3) Rodar coisas em paralelo (Promise.all)")

// Se você fizer isso, vai rodar em sequência (1s + 2s = 3s):
async function paralelo() { 
  const [a, b] = await Promise.all([esperar(1000), esperar(2000)]);
  console.log(a, b);
}

paralelo();