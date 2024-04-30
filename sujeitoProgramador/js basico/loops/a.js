var x = 0;
while(x<10){
    document.write("<br> o valor de x é: " + x);
    x++
}
document.write("<br> <p> ----------------------------------</p>")

for(let a = 0; a<5; a++){
   
    document.write("<br> o valor de a é: " + a);
}

const pedir = () =>{
    let valor = prompt("digite um numedo do cadastro")
    switch(Number(valor)){
        case 1:
            alert("voce escolheu 1 bolo ")
        break;
        case 2:
            alert("voce escolheu 2 sorvete ")
        break;
        case 3:
            alert("voce escolheu 3 chocolate ")
        break;
        case 4:
            alert("voce escolheu 4 sunday ")
        break;
        default:
            alert("chamar garçom");
            break;
    }
}