// alternative to load event
console.log('hello world!')
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    botao();
  }
}

//Botão validação de todas as infos colocadas no formulário
function botao(){
  var btn = document.querySelector("#btn");
  btn.addEventListener('click', function (){
    console.log('hello')
    event.preventDefault();
    checkUserPass();
    checkNumber();
    checkTextarea();
  });
}

//Valida o usuário e a senha 
function checkUserPass(){
  event.preventDefault();
  var usuario = document.querySelector("#usuario").value;
  var senha = document.querySelector("#senha").value;
  //escreve se a senha for maior ou menor que seis, no console.log
  if (senha.length > 6){
    console.log('senha > 6');
  } else{
    console.log('senha < 6');
  };

  var failMessage = document.getElementById('fail-message');
  var goodMessage = document.getElementById('approve-message');
  //Escreve se o usuario escreveu algo no campo ou não, e escreve em vermelho caso seja inválido
  if (usuario.length > 0){
    goodMessage.textContent = "Usuário Válido";
    document.getElementById("approve-message").style.color = 'green';
  } else{
    failedMessage.textContent = "*Obrigatório preenchimento do campo";
    document.getElementById("failed-message").style.color = 'red';
  };
} 


//Escreve o número que o usuário colocou no input number, no console.log
function checkNumber(){
    event.preventDefault();
    var number = document.querySelector("#number").value;
    console.log('Esse é o número que o usuário escolheu ' + number);
  }

function checkTextarea(){
    event.preventDefault();
    var coment = document.querySelector("#coment").value;
    console.log(coment);
  }


function checkSelect(){
  event.preventDefault();
  var sel1 = document.querySelector("#sel1").value;
  var sel2 = document.querySelector("#sel2").value;
  var sel3 = document.querySelector("#sel3").value;
  var sel4 = document.querySelector("#sel4").value;
  
}

//var btn = document.querySelector("#check-usr");
//btn.addEventListener("click", function() { //JS, fique escutando para saber quando clicar
//var usuario = document.querySelector("#usuario").value;
//console.log(usuario);
//});  }

    