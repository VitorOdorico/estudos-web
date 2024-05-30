const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 3232
    }
};

// consigo utilizar utilizar os valores de pessoa, desestruturando o objeto e pegando apenas os valores que necessito
const {nome, sobrenome, endereco} = pessoa;

console.log(nome, sobrenome, endereco);