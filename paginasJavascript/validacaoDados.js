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


    VerificaAgencia(id){

        if(this.agencia == usuariosCaixa[id].agencia){
                return true
        }


    }


    VerificaTipoConta(id){

        if(this.tipoconta == usuariosCaixa[id].tipoconta){
                return true
        }

        

    }


    VerificaConta(id){

        if(this.conta == usuariosCaixa[id].conta){
                return true
        }

        

    }


    VerificaDv(id){

        if(this.dv == usuariosCaixa[id].dv){
                return true
        }


    }


    VerificaSaldo(id){

        if(this.saldo == usuariosCaixa[id].saldo){
                return true
        }

        

    }


    Verificaddd(id){

        if(this.ddd == usuariosCaixa[id].ddd){
                return true
        }

        

    }



    VerificaNumero(id){

        if(this.numero == usuariosCaixa[id].numero){
                return true
        
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