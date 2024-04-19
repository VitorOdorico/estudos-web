// formato inicial de se criar 

//declara as vareaveis
let massa = 160;
let altura = 1.88;
// faz a formula do imc
let imc = massa / altura**2;
// imprime o imc com duas casas decimais após o ponto
console.log(imc.toFixed(2))
// condicinal onde mostra o nivel do imc
if(imc<=16){
    console.log("magreza grave")
}else if(imc == 17 || imc <= 18.5){
    console.log("magreza leve")
}else if(imc == 18.6 || imc <= 24.9){
    console.log("peso ideal")
}else if(imc == 25 || imc <= 29.9){
    console.log("sobre peso")
}else if(imc == 30 || imc <= 34.9){
    console.log("obesidade 1")
}else if(imc == 35 || imc <= 39.9){
    console.log("obesidade 2")
}else{
    console.log("obsedidade 3")
}
console.log("--------------------------------------diferença de arquiteturas--------------------------------------")

// formato em funções
const calculaImc = (massa, altura) =>{
    let imc = massa / altura**2
   
    console.log(`seu imc é de ${imc.toFixed(2)}`);
    if(imc<=16){
        console.log("magreza grave")
    }else if(imc == 17 || imc <= 18.5){
        console.log("magreza leve")
    }else if(imc == 18.6 || imc <= 24.9){
        console.log("peso ideal")
    }else if(imc == 25 || imc <= 29.9){
        console.log("sobre peso")
    }else if(imc == 30 || imc <= 34.9){
        console.log("obesidade 1")
    }else if(imc == 35 || imc <= 39.9){
        console.log("obesidade 2")
    }else{
        console.log("obsedidade 3")
    }
}

calculaImc(89, 1.75);