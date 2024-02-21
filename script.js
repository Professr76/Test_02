function gravar(){
    
    let titulo = document.getElementById("titulo").value;

    let aluno = docuemnt.getElementById("aluno").value;

    let msg  = document.getElementById("msg").value;

     alert(titulo + "\n" + msg + "\n" + aluno);
    //agora vamos gravar em algum lugar

    let TextoMensagem = titulo + " \n" + msg + " \n"+aluno;

    document.getElementById("assunto").innerText = titulo;
    document.getElementById("estudante").innerText = aluno;
    document.getElementById("texto").innerText = msg;

    document.getElementById("titulo").value = "";
    document.getElementById("aluno").value = "";
    document.getElementById("msg").value = "";
    
}

function excluir(){

    document.getElementById("titulo").value = "";
    document.getElementById("aluno").value = "";
    document.getElementById("msg").value = "";

    alert("Dados deletados");
    
}