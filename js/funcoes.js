 // alert("Olá seja bem vindos a nossa página de JavaScript");
 var curso ="Curso de JavaScript";
 var instituicao="Gama Academy";
 var separador=" - ";
 // alert(curso+separador+instituicao);

 // var nome= prompt("Olá seja bem vindo, digite o seu nome","Digite o seu nome");
 // document.write("Seja bem vindo "+nome);

function mensagem()
{
 alert("Como você é curioso!!!");

}

function validar()
{
 var nome= formuser.nome.value;
 var email= formuser.email.value;
 var senha= formuser.senha.value;

if(nome ==""){
 alert("O preenchimento deste campo é obrigatório");
 formuser.nome.focus();
 return false;
}

if(email=="" || email.indexOf('@')==-1){
 alert("Preencha o campo de email corretamente");
 formuser.email.focus();
 return false;
}

if(senha=="" || senha.length<=5){
 alert("Preencha o campo senha que é obrigatório com mínimo de 6 caracteres");
 formuser.senha.focus();
 return false;

}

alert("Prezado(a) "+nome+" , estaremos lhe enviando todo o conteúdo do nosso curso para o seu email "+email);

}
