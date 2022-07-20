import Verifica from "../paginasJavascript/validacaoDados.js";


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
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    const p4 = document.getElementById('p4')


    //NOME DO USUARIO E BOTÃO.

    const botaoenviar = document.getElementById('submitnome')


    //PARAGRAFOS PARA A INFORMAÇÃO DOS DADOS NA TELA.


    const idUsuario = document.getElementById('idUsuario')
    const nomeUsuario = document.getElementById('idUsuario')
    const numeroUsuario = document.getElementById('idUsuario')
    const saldoUsuario = document.getElementById('idUsuario')


    //btn.addEventListener("click", ObtemValor)


    btn.onclick = (e) => {
        e.preventDefault()  
        
        const agencia = AgenciaForm.value
        const tipoconta = TipoContaForm.value
        const conta = ContaForm.value
        const dv = DvForm.value
        const valor = ValorForm.value
        const ddd = dddForm.value
        const telefone = TelefoneForm.value

        criaUsuario(agencia, tipoconta, conta, dv, valor, ddd, telefone)
    
    }

    function criaUsuario(agencia, tipoconta, conta, dv, valor, ddd, telefone){
        
        const usuario = new Verifica('', '', agencia, tipoconta, conta, dv, '', ddd, telefone)

        if(usuario.VerificaAgencia() && usuario.VerificaTipoConta() && usuario.VerificaConta() && usuario.VerificaDv()){
            console.log('Todos dados correto!!!')
            p1.classList.remove('ocultarP')
            p2.classList.remove('ocultarP')
            p3.classList.remove('ocultarP')
            p4.classList.remove('ocultarP')

            

        }

        else if(usuario.VerificaTipoConta() && usuario.VerificaConta() && usuario.VerificaDv()){
            console.log('Agencia errada')
            tela.innerHTML = '<h2>Agencia errada!! Corrija os dados.</h2>'
        }

        else if(usuario.VerificaAgencia() && usuario.VerificaConta() && usuario.VerificaDv()){
            console.log('Tipo de conta errada')
            tela.innerHTML = '<h2>Tipo de conta errada!! Corrija os dados. </h2>'
        }

        else if(usuario.VerificaAgencia() && usuario.VerificaTipoConta() && usuario.VerificaDv()){
            console.log('Conta errada')
            tela.innerHTML = '<h2>Conta errada!! Corrijir os dados. </h2>'
        }

        else if(usuario.VerificaAgencia() && usuario.VerificaConta() && usuario.VerificaTipoConta()){
            console.log('DV errado')
            tela.innerHTML = '<h2> Dv errado!! Corrijir os dados </h2>'
        }

        
        
    }

//}