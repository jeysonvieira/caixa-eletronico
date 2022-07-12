import Verefica from "./validacaoDados";



const btn = document.getElementById('submit')

const teste = document.getElementById('agencia')



btn.addEventListener("click", function(e){
    e.preventDefault()

    console.log()
})



var testa = new Verefica(1)


console.log(testa.VereficaTudo())






