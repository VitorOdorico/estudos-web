function operacao(val1,val2,op){
    switch (op) {
        case "+":
            console.log(val1 + val2);
            break;
        case "-":
            console.log(val1 - val2);
            break; 
        case "*":
            console.log(val1 * val2);
            break; 
        case "/":
            console.log(val1 / val2);
            break;
        default:
            console.log('digite um operador valido.')
            break;
    }
}

operacao(1,2,"/");
// OUTPUT
// 0.5 - checked 