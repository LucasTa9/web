// nao existe funcao dentro de funcao

var cadastros = []; //variavel global - cadastroS

function adicionarCadastro(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if(nome && email && telefone){
        var cadastro = {nome: nome, email: email, telefone: telefone}; //variavel cadastrO
        cadastros.push(cadastro);
        atualizarDatagrid();
        limparFormulario();
    }else{
        alert("Preencha todos os campos!");
    }
}

function atualizarDatagrid(){
    var tbody = document.querySelector("#datagrid tbody"); //selecionar pelo nome do elemento que está dentro de uma id
    tbody.innerHTML = ""; //no conteúdo html pega o tbody e deixa ele vazio

    for(var i = 0; i < cadastros.length; i++) {
        var cadastro = cadastros[i]; //essa var cadastro é diferente da outra no function

        var row = document.createElement("tr"); //3 tr ligados com o td
        criarCelula(row, cadastro.nome);
        criarCelula(row, cadastro.email);
        criarCelula(row, cadastro.telefone);

        var cellAcoes = document.createElement("td");

        var botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = criarEditarHandler(i);

        var botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = criarExcluirHandler(i);

        cellAcoes.appendChild(botaoEditar);
        cellAcoes.appendChild(botaoExcluir);
        
        row.appendChild(cellAcoes);

        tbody.appendChild(row);
    }
}

function criarCelula(row, texto){
    var cell = document.createElement("td");
    cell.textContent = texto; //a cell vai receber o parâmetro texto
    row.appendChild(cell);
}

function limparFormulario(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("nome").focus();
}

function criarExcluirHandler(index){
    return function() {
        excluirCadastro(index);
    };
}

function excluirCadastro(index) {
    if(confirm("Confirmar exclusão?")== true){
    cadastros.splice(index, 1); // Exclui o elemento cadastros[index]
    atualizarDatagrid();
    }
}

function criarEditarHandler(index) {
    return function() {
        editarCadastro(index);
    };
}

function editarCadastro(index) {
    var linha = document.querySelector("#datagrid tbody tr:nth-child(" + (index + 1) + ")");
    if (linha) {
        var celulas = linha.querySelectorAll("td");
        for(var i = 0; i < celulas.length - 1; i++){
            var valorAtual = celulas[i].textContent;

            var input = document.createElement("input");
            input.type = "text";
            input.value = valorAtual;

            celulas[i].textContent = "";
            celulas[i].appendChild(input);
        }

        var botaoSalvar = document.createElement("button");
        botaoSalvar.textContent = "Salvar";
        botaoSalvar.onclick = function (){
            salvarEdicao(index);
        };
        celulas[celulas.length -1].innerHTML = "";
        celulas[celulas.length -1].appendChild(botaoSalvar); //appendChild é anexar, ou seja, anexar na 4° célula a var botaoSalvar
    }
}

function salvarEdicao(index) {
    var linha = document.querySelector("#datagrid tbody tr:nth-child(" + (index + 1) + ")");
    if (linha){
        var celulas = linha.querySelectorAll("td");
        cadastros[index].nome = celulas[0].querySelector("input").value; //na célula 0 vai selecionar o input que ela tem dentro
        cadastros[index].email = celulas[1].querySelector("input").value;
        cadastros[index].telefone = celulas[2].querySelector("input").value;

        atualizarDatagrid();
    }
}

function SimOuNao(index) {
    
}
