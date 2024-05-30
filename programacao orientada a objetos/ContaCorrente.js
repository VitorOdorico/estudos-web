"use strict"
export class ContaCorrente {
    constructor(agencia, numeroDaConta, saldo,status) {
        this.saldo = saldo;
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
        this.status = status;
    }
    
    sacar(valor){  
        if(this.sacar < valor){
            console.error("não possui saldo em conta. ");
        }else{
            this.saldo =- valor;
            return this.saldo;
        }
    }

    depositar(valor){
        valor += this.saldo;
        return this.saldo;
    }

    verificaContaAtiva(ativa){
        if(this.status === true){
            ativa = true;
            console.log(`esta conta${this.numeroDaConta}, está ativa`)
        }else{
            ativa = false;
            console.log(`esta conta ${this.numeroDaConta}, está inativa, por favor contatar o SAC`)
        }
    }
}