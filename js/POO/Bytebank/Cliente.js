import ContaCorrente  from './ContaCorrente' 
class Cliente extends ContaCorrente{
    constructor(nome,cpf){
        this.nome = nome;
        this.cpf = cpf
        ContaCorrente = new ContaCorrente()

    }

    
}