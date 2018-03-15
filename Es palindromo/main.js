var wordInput = prompt("Scrivi una parola:");
var reverseWord = "";
document.getElementById("inputword").innerHTML = wordInput;
for (var i = 0; i < wordInput.length; i++) {
  var a = wordInput.charAt(wordInput.length - (i+1));
  reverseWord = reverseWord + a;
}
if(wordInput === reverseWord){
  document.write("La parola è palindroma");
}
else{
  document.write("La parola non è palindroma");

}
