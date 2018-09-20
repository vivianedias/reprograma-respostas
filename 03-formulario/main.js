//Input usuario nao pode ser nulo
var btn = document.querySelector("#usersenh");
btn.addEventListener('click', function() { //JS, fique escutando para saber quando clicar
  var usuario = document.querySelector("#usuario").value;
  alert(usuario);
});

//O que a professora passou:
//var entrada = document.querySelector("#entrada").value; //store user input 
//var botaoEntrada = document.querySelector("#salvarFormulario");
//botaoEntrada.addEventListener('click', function() {
//    alert(entrada);
//});

//event.preventDefault

//if (usuario.value.length === 0)
// { 
//    alert("Esse campo não pode ser nulo");  	
//    return false; 
// }  	
// alert("Foi!");
// return true; 
//}  )


 //var senha = document.querySelector("senha").value;