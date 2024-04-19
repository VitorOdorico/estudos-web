let pessoa = {
    nome: "ana",
    idade: 26,
    genero: "feminino",
    profissao: "engenheira de software",
    falar: function(){
        //contexto console 
        let apresentação = console.log( `Eu sou ${this.nome}, tenho ${this.idade} anos, sou do genero ${this.genero}, e sou uma ${this.profissao}`)
        
        //contexto web somente removeria o console e chamaria o teamplete direto na vareavel
        return  apresentação;
        
    }
}

pessoa.falar();

console.log("===========================================================================================================================")
let a = 3
console.log(this.a)
// não retorna pois não está em ambito global
global.b = 123;
// global é como se fosse o window do navegador, então pode se atribuir valor a ele pois é uma vareavel global
this.c = 456; 
// this tambem chama do mesmo escopo que o global;


console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)