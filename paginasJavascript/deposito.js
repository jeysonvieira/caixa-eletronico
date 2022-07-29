import Verifica from "../paginasJavascript/validacaoDados.js";
import usuariosCaixa from "../paginasJavascript/arrays.js";


//window.onload = function(){


    //CAIXAS E BOTÕES DO FORMULÁRIO.

    const btn = document.getElementById('submit')

    const AgenciaForm = document.getElementById('agencia')
    const TipoContaForm = document.getElementById('tipoconta')
    const ContaForm = document.getElementById('conta')
    const DvForm = document.getElementById('dv')
    const ValorForm = document.getElementById('valor')
    const dddForm = document.getElementById('ddd')
    const TelefoneForm = document.getElementById('telefone')


    //DIV E PARÁGRAFOS OCULTO DA TELA.

    const tela = document.getElementById('teladocaixa')
    const h2tela = document.getElementById('h2tela')
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    const p4 = document.getElementById('p4')


    //NOME DO USUARIO E BOTÃO.

    const botaoenviar = document.getElementById('submitnome')
    const inputnome = document.getElementById('nome')
    const divnome = document.getElementById('divNome')



    //BOTÃO E LINHAS DOS INPUTS PARA APARECER APÓS O NOME.

    const linha1 = document.getElementById('primeiralinha')
    const linha2 = document.getElementById('segundalinha')
    const linha3 = document.getElementById('terceiralinha')
    const botaoSub = document.getElementById('botaoSub')


    //PARAGRAFOS PARA A INFORMAÇÃO DOS DADOS NA TELA.


    const idUsuario = document.getElementById('idUsuario')
    const nomeUsuario = document.getElementById('nomeUsuario')
    const numeroUsuario = document.getElementById('numeroUsuario')
    const saldoUsuario = document.getElementById('saldoUsuario')



    //OBTENDO O NOME DIGITADO.

    botaoenviar.onclick = (a) =>{
        a.preventDefault()

        const nomeValue = inputnome.value

        criaNome(nomeValue)

    }


    //CRIANDO UM OBJETO E VERIFICANDO SE O NOME ESTÁ NO BANCO DE DADOS (arrays.js).


    function criaNome(nome){
        const nomeUsu = new Verifica('', nome)

        if(nomeUsu.VerificaNome()){

            divnome.classList.add('ocultar')
            
            linha1.classList.remove('ocultar')
            linha2.classList.remove('ocultar')
            linha3.classList.remove('ocultar')
            botaoSub.classList.remove('ocultar')

            const id = nomeUsu.VerificaNome() - 1


            btn.onclick = (e) => {
                e.preventDefault()
                
                const idUsu = id
                const nomeUsu = usuariosCaixa[id].nome
                
                const agencia = AgenciaForm.value
                const tipoconta = TipoContaForm.value
                const conta = ContaForm.value
                const dv = DvForm.value
                const valor = ValorForm.value
                const ddd = dddForm.value
                const telefone = TelefoneForm.value
        
                criaUsuario(idUsu, nomeUsu, agencia, tipoconta, conta, dv, valor, ddd, telefone)
            
            }
        
        
            //CRIANDO UM OBJETO COM OS DADOS PASSADOS E VERIFICANDO A VALIDAÇÃO.
        
        
            function criaUsuario(id, nome, agencia, tipoconta, conta, dv, valor, ddd, telefone){

                const usuarioOficial = usuariosCaixa[id]

                console.log(usuarioOficial)
                
                const usuario = new Verifica(id, nome, agencia, tipoconta, conta, dv, Number(valor), ddd, telefone)
        
                if(usuario.VerificaAgencia(id) && usuario.VerificaTipoConta(id) && usuario.VerificaConta(id) && usuario.VerificaDv(id) && usuario.VerificaSaldo(id)){

                    usuarioOficial.saldo += Number(valor)

                    h2tela.classList.add('ocultarP')

                    console.log('Todos dados correto!!!')
                    p1.classList.remove('ocultarP')
                    p2.classList.remove('ocultarP')
                    p3.classList.remove('ocultarP')
                    p4.classList.remove('ocultarP')


                    idUsuario.innerText = usuarioOficial.id
                    nomeUsuario.innerText = usuarioOficial.nome
                    numeroUsuario.innerText = usuarioOficial.ddd + ' ' + usuarioOficial.numero
                    saldoUsuario.innerText = usuarioOficial.saldo


                    function finaliza(){
                        linha1.classList.add('ocultar')
                        linha2.classList.add('ocultar')
                        botaoSub.classList.add('ocultar')

                        linha3.innerHTML = '<h2>DINHEIRO DEPOSITADO<h2>'

                    }

                    finaliza()
        
                    
        
                }

                else if(usuario.VerificaAgencia(id) && usuario.VerificaTipoConta(id) && usuario.VerificaConta(id) && usuario.VerificaDv(id)){
                    console.log('Digite o valor a ser depositado.')

                    h2tela.innerText = 'Digite o valor a ser depositado.'

                }
        
                else if(usuario.VerificaTipoConta(id) && usuario.VerificaConta(id) && usuario.VerificaDv(id)){
                    console.log('Agencia errada')

                    h2tela.innerText = 'Tipo de agência errada!! Corrija os dados.'

                    
                
                }
        
                else if(usuario.VerificaAgencia(id) && usuario.VerificaConta(id) && usuario.VerificaDv(id)){
                    console.log('Tipo de conta errada')
                    h2tela.innerText = 'Tipo de conta errada!! Corrija os dados.'
                }
        
                else if(usuario.VerificaAgencia(id) && usuario.VerificaTipoConta(id) && usuario.VerificaDv(id)){
                    console.log('Conta errada')
                    h2tela.innerText = 'Conta errada!! Corrijir os dados.'
                }
            
                else if(usuario.VerificaAgencia(id) && usuario.VerificaConta(id) && usuario.VerificaTipoConta(id)){
                    console.log('DV errado')
                    h2tela.innerText = 'Dv errado!! Corrijir os dados.'
                }

                
        
                
                
            }








        }
        
    }

    //ID DO NOME DIGITADO.




    //OBTENDO OS VALORES DOS DADOS BANCARIOS DO USUARIO.




//}