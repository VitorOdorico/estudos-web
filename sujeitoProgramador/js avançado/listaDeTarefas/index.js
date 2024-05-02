// document . querySelector busca todos os filhos dentro do id passado.
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

// lista para adicionar as tarefas
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

// função onde mostra as tarefas
function renderTarefas(){
    // limpar a lista no html toda vez que a página for recarregada
    listElement.innerHTML = '';
    // map é um atributo onde se percorre toda a array 
    tarefas.map((todo)=>{
        // cria um elemento li
        let liElement = document.createElement("li");
        // mostra o texto de todo(tarefas)
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#")

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);


        let posicao = tarefas.indexOf(todo)
        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)




        // tarefaText vira um "filho " de liElement
        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement)
        // liElement vira um filho da listElemente ul > li.
        listElement.appendChild(liElement)
    })
}

renderTarefas();

// funcão onde adiciona as tarefas
function adicionarTarefas(){
    // verifica se o input está vazio, assim não tendo uma tarefa valida para ser adicionado a lista.
    if(inputElement.value === ''){
        alert('Digite alguma tarefa');
       return false;
    }else{
        // cria uma vareavel onde vai receber o valor do input.
        let novaTarefa  = inputElement.value;
        // adiciona o valor recebido do input a lista de tarefas.
        tarefas.push(novaTarefa)
        // limpa o input novamente
        inputElement.value = '';

        // chama a render tarefa se tiver uma tarefa valida
        renderTarefas();
        salvaDados();
    }
}

// cria um evento de click no botão e chama a função que cria as tarefas
buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1)
    renderTarefas();
    salvaDados();
}


function salvaDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}