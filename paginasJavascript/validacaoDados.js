import usuariosCaixa from "../paginasJavascript/arrays.js";

class Verifica{

    id;

    constructor(id, nome, agencia, tipoconta, conta, dv, saldo, ddd, numero){

        this.id = id
        this.nome = nome
        this.agencia = agencia
        this.tipoconta = tipoconta
        this.conta = conta
        this.dv = dv
        this.saldo = saldo
        this.ddd = ddd
        this.numero = numero
    
    }


    VerificaId(){
        var contador = 0
        while(contador < usuariosCaixa.length){
            
            if(this.id === usuariosCaixa[contador].id){
                return true
            }
            contador++



        }
    }


    VerificaNome(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.nome == usuariosCaixa[contador].nome){
                return true + contador

            
            }
            contador++

        }

    }


    VerificaAgencia(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.agencia == usuariosCaixa[contador].agencia){
                return true
            }
            contador++

        }

    }


    VerificaTipoConta(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.tipoconta == usuariosCaixa[contador].tipoconta){
                return true
            }
            contador++

        }

    }


    VerificaConta(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.conta == usuariosCaixa[contador].conta){
                return true
            }
            contador++

        }

    }


    VerificaDv(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.dv == usuariosCaixa[contador].dv){
                return true
            }
            contador++

        }

    }


    VerificaSaldo(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.saldo == usuariosCaixa[contador].saldo){
                return true
            }
            contador++

        }

    }


    Verificaddd(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.ddd == usuariosCaixa[contador].ddd){
                return true
            }
            contador++

        }

    }



    VerificaNumero(){
        var contador = 0
        while(contador < usuariosCaixa.length){

            if(this.numero == usuariosCaixa[contador].numero){
                return true
            }
            contador++

        }

    }

    




}

//const usuario = new Verifica(1, 'Jeyson Saraiva Vieira', 4321, 13, 654321 , 3, 1350.89, '86', '95897185')

//console.log(usuario.VerificaId())
//console.log(usuario.VerificaNome())
//console.log(usuario.VerificaAgencia())
//console.log(usuario.VerificaTipoConta())
//console.log(usuario.VerificaConta())
//console.log(usuario.VerificaDv())
//console.log(usuario.VerificaSaldo())
//console.log(usuario.Verificaddd())
//console.log(usuario.VerificaNumero())


export default Verifica;