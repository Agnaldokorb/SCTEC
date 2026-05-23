function recebeEExecutaCallback(callback){
    callback(1,2,3,4,5)
}

function parametro(a,b,c,d,e){
    console.log(1)
}

recebeEExecutaCallback(parametro)


setTimeout(parametro, 3600)


console.log(parametro)



//-------------------------------------------------------------------------



let novoArray = [1,2,3,4,5,6].map((a) => {
    return a * 100
})

console.log(novoArray)

//------------------------------------------------------------------

let tenho = ["azul","amarelo","laranja","violeta"]

let precisa = ["amarelo","ciano","vermelho", "azul"]

//os que faltam

let falta = precisa.filter((item)=>{
    return !tenho.includes(item)
})

let possui = precisa.filter((item)=>{
    return tenho.includes(item)
})
let qtdPossui = possui.length
let qtdTotal = precisa.length

let porcentagem = (qtdPossui / qtdTotal) * 100

console.log(`Faltam ${falta} para completar a coleção`)
console.log(`Possui ${qtdPossui} de ${qtdTotal} itens, o que corresponde a ${porcentagem}% da coleção`)