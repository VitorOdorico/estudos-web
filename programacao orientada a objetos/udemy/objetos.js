const carro = {
    modelo: 'G3',
    nome: 'gol',
    marca: 'volwsawagem',
    proprietario: {
        nome: 'junior',
        idade: 25,
        genero: 'masculino',
        endereco: {
            rua: 'jose pinto',
            numero: 1544,
            observacao: 'casa'
        }
    },
    condutores: [{
        nome: 'jose',
        idade: 19,
        tipoCNH: 'A'
    },{
        nome: 'carlos',
        idade: 22,
        tipoCNH: 'AB'
    }]
}

console.log(carro)