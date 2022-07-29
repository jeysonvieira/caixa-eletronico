function Add(acao, ...valor){

    var contador = 0

    while(contador < valor.length){
        valor[contador].classList.add(acao)


        contador++
    }



}

function Remove(acao, ...valor){

    var contador = 0

    while(contador < valor.length){
        valor[contador].classList.remove(acao)


        contador++
    }


}




export {Add, Remove};

