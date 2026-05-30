// let nums = [3,2,1]
// let result = 0

// for(let num of nums){
//     result += num
// }

// console.log(result)

//----------------------------------------

// let salarios = [
//     {
//         cargo: 'dev 2',
//         bruto: 3000,
//         liquido: 2734.55
//     },
//     {
//         cargo: 'dev 3',
//         bruto: 4000,
//         liquido: 3734.55
//     },
//     {
//         cargo: 'dev 1',
//         bruto: 1200,
//         liquido: 996.35
//     }
// ]

// let result = 0

// for(let salario of salarios){
//     result += salario.bruto
// }

// console.log(result)

let arrs = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,10]
]
let result = 0

for(let indice in arrs){
    let valor = arrs[indice][indice]
    result += valor
    
}

console.log(result)