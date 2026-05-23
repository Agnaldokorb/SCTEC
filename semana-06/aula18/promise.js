// try{
//     let array = (-1)

//     let soma = 2 + 2
// }catch(error){
//     console.error('Ocorreu um erro:', error);
// }finally{
//     contabilidade()
// }

// let  promise = new Promise((resolve, reject) => {
//     for(let i = 0; i < 10; i++){
//         let soma = i + i
//     }resolve(true)
// })

// promise.then(1)
//     .then((result) => {
//         console.log('Promise resolvida com sucesso:', result);
//     })
//     .catch((error) => {
//         console.error('Ocorreu um erro na Promise:', error);
//     })


// async function espera(){
//     for(let i = 0; i < 10; i++){
//         let soma = i + i
//     }return true
// }

// let resultado = espera()
// resultado.then((result) => {
//     console.log(result);
// })

let img = document.getElementById("img")
async function iniciaPagina() {
    let result = await fetch(`https://dog.ceo/api/breeds/image/random`)
    let obj = await result.json()
    img.src = obj.message
}

let btn = document.getElementById("btn")
btn.addEventListener("click", iniciaPagina)


iniciaPagina()