import Verifica from "../paginasJavascript/validacaoDados.js";
import usuariosCaixa from "../paginasJavascript/arrays.js";
import { Add, Remove } from "../paginasJavascript/AddRemove.js";


 //DIVS E INPUTS DO NOME DO USUÁRIO.

const divnome = document.getElementById('divNome')
const submitnome = document.getElementById('submitnome')
const nome = document.getElementById('nome')
const labelNome = document.getElementById('labelnome')



 //DIVS E INPUTS DOS DADOS DO USUÁRIO.

const primeiralinha = document.getElementById('primeiralinha')
const segundalinha = document.getElementById('segundalinha')
const terceiralinha = document.getElementById('terceiralinha')

const AgenciaForm = document.getElementById('agencia')
const TipoContaForm = document.getElementById('tipoconta')
const ContaForm = document.getElementById('conta')
const DvForm = document.getElementById('dv')
const ValorForm = document.getElementById('valor')
const dddForm = document.getElementById('ddd')
const TelefoneForm = document.getElementById('telefone')





const confirmar = document.getElementById('botaoSub')



 //DIVS E PARAGRAFOS TELA.

 const tela = document.getElementById('teladocaixa')
 const h2tela = document.getElementById('h2tela')
 const p1 = document.getElementById('p1')
 const p2 = document.getElementById('p2')
 const p3 = document.getElementById('p3')
 const p4 = document.getElementById('p4')




  //PARAGRAFOS PARA A INFORMAÇÃO DOS DADOS NA TELA.


const idUsuario2 = document.getElementById('idUsuario')
const nomeUsuario2 = document.getElementById('nomeUsuario')
const numeroUsuario = document.getElementById('numeroUsuario')
const saldoUsuario = document.getElementById('saldoUsuario')






submitnome.onclick = (a) => {

    a.preventDefault()

    const nomeValue = nome.value

    

    criaNome(nomeValue)

}



function criaNome(nomeUsu){

    const nomeUsuario = new Verifica('', nomeUsu)


    if(nomeUsuario.VerificaNome()){
        
        const idUsuario = nomeUsuario.VerificaNome() - 1

    
        Add('ocultar', divnome)

        Remove('ocultar', primeiralinha, terceiralinha, confirmar)



        confirmar.onclick = (a) => {
            a.preventDefault()



            const agencia = AgenciaForm.value
            const tipoconta = TipoContaForm.value
            const conta = ContaForm.value
            const dv = DvForm.value
            const ddd = dddForm.value
            const telefone = TelefoneForm.value


            CriaUsuario(idUsuario, nomeUsuario ,agencia, tipoconta, conta, dv, null, ddd, telefone)

            

        }


        function CriaUsuario(id, nome ,agencia, tipoconta, conta, dv, valor, ddd, telefone){

            const dadosUsuario = usuariosCaixa[idUsuario]



            const usuario = new Verifica(id, nome ,agencia, tipoconta, conta, dv, Number(valor), ddd, telefone)

                
            if(usuario.VerificaAgencia(id) && usuario.VerificaTipoConta(id) && usuario.VerificaConta(id) && usuario.VerificaDv(id)){


                Add('ocultar', primeiralinha, terceiralinha, h2tela)

                Remove('ocultar', p1, p2, p3, p4, segundalinha)




                idUsuario2.innerText = dadosUsuario.id
                nomeUsuario2.innerText = dadosUsuario.nome
                numeroUsuario.innerText = dadosUsuario.ddd + ' ' + dadosUsuario.numero
                saldoUsuario.innerText = dadosUsuario.saldo



                confirmar.onclick = (a) =>{

                    a.preventDefault()

                    const valor = ValorForm.value


                    if(valor < dadosUsuario.saldo){
                        dadosUsuario.saldo -= Number(valor)
                        saldoUsuario.innerText = dadosUsuario.saldo

                        Add('ocultar', segundalinha, confirmar)

                    }

                    else{
                        Remove('ocultar', h2tela)

                        h2tela.innerText = 'Valor acima do possuído na conta atual.'

                    
                
                    }
                }

            }

    
                else if(usuario.VerificaTipoConta(id) && usuario.VerificaConta(id) && usuario.VerificaDv(id)){

                    h2tela.innerText = 'Tipo de agência errada!! Corrija os dados.'
               
                
                }
        
                else if(usuario.VerificaAgencia(id) && usuario.VerificaConta(id) && usuario.VerificaDv(id)){

                    h2tela.innerText = 'Tipo de conta errada!! Corrija os dados.'
                }
        
                else if(usuario.VerificaAgencia(id) && usuario.VerificaTipoConta(id) && usuario.VerificaDv(id)){

                    h2tela.innerText = 'Conta errada!! Corrijir os dados.'
                }
            
                else if(usuario.VerificaAgencia(id) && usuario.VerificaConta(id) && usuario.VerificaTipoConta(id)){

                    h2tela.innerText = 'Dv errado!! Corrijir os dados.'
                }
    
           


            
        





                
        




            





        }







        





    }



}