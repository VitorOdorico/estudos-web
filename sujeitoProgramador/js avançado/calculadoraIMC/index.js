let peso,altura,imc,resultado,title;

function calcular(event){
    // previne  que o evento limpe todos os campos toda vez que for dado submit no formulário
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    title =  document.getElementById('title')
    imc = peso / (altura*altura);
    console.log(imc)
    if(imc < 17 ){

        resultado = document.getElementById('resultado');
        resultado.innerHTML = ("<br/><h2>" + imc.toFixed(2) + "</h2></br>Cuidado você está muito abaixo do seu preso ideal!" );

    }else if(imc > 17 && imc <= 18.49){
        
        resultado = document.getElementById('resultado');
        resultado.innerHTML = ("<br/><h2>" + imc.toFixed(2) + "</h2></br>Cuidado você está  abaixo do seu preso ideal!" );

    }
    else if(imc > 25 && imc <= 29.9){
        
        resultado = document.getElementById('resultado');
        resultado.innerHTML = ("<br/><h2>" + imc.toFixed(2) + "</h2></br> você está no seu preso ideal!" );

    }
    else if(imc > 29.9 && imc <= 34.9){
        
        resultado = document.getElementById('resultado');
        resultado.innerHTML = ("<br/><h2>" + imc.toFixed(2) + "</h2></br>Cuidade você está acima do seu preso ideal! </br> Obesidade grau |" );

    }
    else if(imc >= 35 && imc <= 40){
        
        resultado = document.getElementById('resultado');
        resultado.innerHTML = ("<br/><h2>" + imc.toFixed(2) + "</h2></br>Cuidade você está muito acima do seu preso ideal!</br> Obesidade grau ||" );

    }else if(imc > 40){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = ("<br/><h2>" + imc.toFixed(2) + "</h2></br>Cuidade você está muito acima do seu preso ideal!</br> Obesidade grau |||" );
    }else{
        alert("digite um valor valido")
    }


}