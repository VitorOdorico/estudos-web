const obj = {}
obj.falar = function (){return 'Opa'}

console.log(obj.falar())


function run(fun){
    fun()
}

run(function(){console.log("executando")})

function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}
// = a bagunça
soma(2,3)(5)