var btn = document.querySelector("#btn-login");
btn.addEventListener("click", function (event){							
    event.preventDefault();
    var usuario = document.querySelector("#usuario").value;
    var senha = document.querySelector("#senha").value;
    var validacao = document.getElementById("validacao");
    if (usuario == 'admin' && senha == 'admin'){
        validacao.textContent = "Sucesso";
        document.getElementById('validacao').style.color = "green";
    } else{
        validacao.textContent = "Erro";
        document.getElementById('validacao').style.color = "red";
    }

});