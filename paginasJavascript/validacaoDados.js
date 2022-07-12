import usuariosCaixa from "./arrays";

class Verefica{

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

    VereficaTudo(){
        if(this.id === usuariosCaixa[0].id){
        return true
        }
        else{
            return false
        }

    }
}


const teste = new Verefica(usuariosCaixa[0].id)


export default Verefica;



