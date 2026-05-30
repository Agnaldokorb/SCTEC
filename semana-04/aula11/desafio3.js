// > 2000 || < 6 dias de folga = + 20%
// se nao soma 50 reais por dia de folga

// objto com cargo e salario final nesse mes [{cargo:'dev1', salarioFinal: 9009409}]

let resultado = []
let funcionarios = [
    {
        cargo: 'dev 2',
        bruto:3000,
        diasDeFolga:[6,7,14,16,23,24]
    },
    {
        cargo: 'dev 3',
        bruto:4000,
        diasDeFolga:[6,7,8,14,16,23,24,25]
    },
    {
        cargo: 'dev 1',
        bruto:1200,
        diasDeFolga:[6,14,16,23]
    },
]

for(let funcionario of funcionarios){
    let valorBruto = funcionario.bruto
    let cargo = funcionario.cargo
    let diasDeFolga = funcionario.diasDeFolga
    if(valorBruto > 3000 || funcionario.diasDeFolga.length < 6){
        let objetoFinal = {
            cargo: cargo,
            salarioFinal: valorBruto * 1.20
        }
        resultado.push(objetoFinal)
    }else{
        let objetoFinal = {
            cargo: cargo,
            salarioFinal: valorBruto + diasDeFolga.length * 50
        }
        resultado.push(objetoFinal)
    }
}

console.log(resultado)








/*-----------------------------------------------------------------------------------*/



let arrA = ['html','css','if','==']
let arrB = ['html','css','for','==','let']

let doAqueNaoTemNoB = []
let doBqueNaoTemNoA = []

for(let item of arrA){
    let existe = arrB.includes(item)
    if(!existe){
        doAqueNaoTemNoB.push(item)
    }
}
for(let item of arrB){
    let existe = arrA.includes(item)
    if(!existe){
        doBqueNaoTemNoA.push(item)
    }
}
console.log("arrayA", doAqueNaoTemNoB)
console.log("arrayB", doBqueNaoTemNoA)



// identificar quais do A nao possuem no B e vice versa


/*-----------------------------------------------------------------------------------*/




let arrs = [
    [1,2,3,4,5], 
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,10]
]
let ultimoIndice = arrs[0].length - 1;

let result = 0

for(let indice in arrs)
{
    let valor = arrs[indice][ultimoIndice]
    result += valor
    ultimoIndice -= 1
}
console.log(result)


/*-----------------------------------------------------------------------------------*/



let salarios = [
    {
        cargo: 'dev 2',
        bruto:3000,
    },
    {
        cargo: 'dev 3',
        bruto:4000,
    },
    {
        cargo: 'dev 1',
        bruto:1200,
    },
]
let result = 0

//if,laco de repeticao (for), tipos de dados (array, objeto e number, boleano), operadores aritimeticos (+), operadores logicos
for(let salario of salarios){
    if(salario.bruto >= 2000){
        result += salario.bruto
    }
}

console.log(result)


/*-----------------------------------------------------------------------------------*/

let nums = [3,2,1]
let result = 0


for(let num of nums){
    // num = 3
    // result = 0 + 3
    // num = 2
    // result = 3 + 2
    // num = 1
    // result = 5 + 1
    result += num
}

console.log(result)