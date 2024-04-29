// vareavel onde selecionamos um elemento(tag) atráves do id
let area = document.getElementById('area');
let areaBotao = document.getElementById('areaBotao');
function entrar(){
    let nome = prompt("nome")
    if(nome === "" || nome === null){
        alert("algo deu errado")
        area.innerHTML = "clique no botão para acessar...."
    }else{   
    // innerHTML usa-se para alterar o conteudo dentro da tag
    area.innerHTML = "bem vindo " + nome

    // criar um botão para sair
    // define a bareavel, onde irá criar um novo elemento html do tipo botão
    let botaoSair = document.createElement("button");
    // onde vai adicionar dentro da tag botão.
    botaoSair.innerHTML = "sair da conta";
    // adicionando dentro de área(h2) mais este botão, após cair na condicional
    areaBotao.appendChild(botaoSair);
    botaoSair.onclick = sair;
    
    }
}

function sair(){
    alert("até mais");
    area.innerHTML = "você saiu"
    
    areaBotao = null;
}