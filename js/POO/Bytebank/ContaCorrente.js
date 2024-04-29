class ContaCorrente{
    constructor(agencia, numeroDaConta, saldo, operante) {
        this.agencia =agencia;
        this.numeroDaConta = numeroDaConta;
        this.saldo =saldo;
        this.operante = operante;
        
    }

    deposita (valor){
        this.saldo += valor
        console.log(`Este é o saldo disponivel: ${this.saldo}`)
    }
    
    sacar(valor){
        this.saldo -= valor
        console.log(`Este é o saldo disponivel: ${this.saldo}`)
        
    }

    valiaContaAtiva(ativo){
        if(ativo === true){
            this.operante = ativo;
            console.log("A conta está ativa")
        }else{
            "Não possui uma conta ativa";
        }

    }
    
};
