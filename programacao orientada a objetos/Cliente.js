import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente extends ContaCorrente{
    constructor(nome, cpf, dataDeNascimento ){
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;

        super(ContaCorrente);
    }

}