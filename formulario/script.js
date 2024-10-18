var cadastros = [];

function adicionarcadastro(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if(nome && email && telefone){
        var cadastro = {nome:nome,email:email,telefone:telefone};
        cadastros.push(cadastro);
        atualizaDatagride();
        LimparFormulario();


    }else{
        alert("Preencha todos os campos!");
    }
}

function atualizaDatagride(){
    var tbody = document.querySelector("#datagride tbody"); 
    tbody.innerHTML = "";
    for(var i = 0; i < cadastros.length; i++){
        var cadastro = cadastros[i];

        var row = document.createElement("tr");
        criarcelula(row,cadastro.nome);
        criarcelula(row,cadastro.email);
        criarcelula(row,cadastro.telefone);

        var cellacoes = document.createElement("td");

        var botaoedit = document.createElement("button");

        botaoedit.textContent = "Editar";
        botaoedit.onclick = criarEditar(i) ;

        var botaoexclui = document.createElement("button");

        botaoexclui.textContent = "Excluir";
        botaoexclui.onclick = criarExcluir(i);

        cellacoes.appendChild(botaoedit);
        cellacoes.appendChild(botaoexclui);

        row.appendChild(cellacoes);
        



        

        tbody.appendChild(row);

    }
}
function criarcelula(row, texto){
    var cell = document.createElement("td");
    cell.textContent = texto;
    row.appendChild(cell);

}

function LimparFormulario(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("nome").focus();
    

}

function criarExcluir(index){
    return function(){
        excluirCadastro(index);
    };
    function excluirCadastro(index){
        cadastros.splice(index,1);//exclui o elemento cadastros[index]
        atualizaDatagride();
    }
}

function criarEditar(index){
    return function(){
        editarCadastro(index,1);
    };
}
    function editarCadastro(index){
        document.getElementById("nome").value = cadastros[index].nome;
        document.getElementById("email").value = cadastros[index].email; 
        document.getElementById("telefone").value = cadastros[index].telefone; 

    }
