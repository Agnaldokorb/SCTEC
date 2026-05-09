// desafio anagramas

// texto1 = iuri texto2 = irui


function anagrama2(texto1, texto2){
    let arr1 = texto1.split('')
    let arr2 = texto2.split('')
    arr1.sort()
    arr2.sort()

    let string1 = arr1.join()
    let string2 = arr2.join()

    let ehAnagrama =  string1 == string2
    return ehAnagrama;
}
function anagrama(texto1, texto2){

    if(texto1.length != texto2.length){
        return false;
    }

    let contador1 = {}
    let contador2 = {}

    for(let item of texto1){
        if(contador1[item] === undefined){
            contador1[item] = 1
        }else{
            contador1[item] = contador1[item] + 1
        }
    }
    // {i:2,u:1,r:1}
    for(let item of texto2){
        if(contador2[item] === undefined){
            contador2[item] = 1
        }else{
            contador2[item] = contador2[item] + 1
        }
    }

    // {i:2,u:1,r:1}
    // {r:1,u:1,i:2}

    let ehAnagrama = true;

    //contador1, contador2
    for(let letra in contador1){
        // letra i
        // i i
        let letraRepeticao1 = contador1[letra] // 2
        let letraRepeticao2 = contador2[letra] // 2

        if(letraRepeticao2 === undefined){
            ehAnagrama = false
        }
        if(letraRepeticao1 !== letraRepeticao2){
             ehAnagrama = false
        }
    }

    return ehAnagrama;
}