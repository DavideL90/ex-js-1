var emailList = ["a@hotmail.com" , "b@hotmail.com" , "c@gmail.com"];
var newEmail = prompt("Inserire la mail");
console.log(newEmail);
document.getElementById(emailInserita).innerHTML = emailList;
var controllo;
for (var i = 0; i < emailList.length; i++) {
  if(newEmail === emailList[i]){
    controllo = true;
  }
  // else{
  //   controllo = false;
  // }
}
if(controllo == true){
  document.writeln("L'email è presente in elenco. Accesso consentito!");
}
else{
  document.writeln("Non è possibile trovare la tua mail nell'elenco. Controlla di averla scritta correttamente")
}
