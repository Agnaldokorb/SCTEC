//contagem de caracteres
function conta(texto){
    if(typeof texto !== 'string'){
        return {}
    }
    let contador = {}

    for(let item of texto){
        // exec 4 -> letra = 'i'
        if(contador[item] === undefined){
            contador[item] = 1
            // exec 3 -> contador = {i:1, u:1, r:1}
        }else{
            contador[item] = contador[item] + 1
            // exec 4 -> contador = {i:2, u:1, r:1}
        }
    }
    return contador;
}

console.log(conta("iuri"));