var numeroGiocatori = prompt("Inserire il numero di giocatori:");
var arrayLancio = new Array();
var maxValue = 0;
var winner = "";

for (var i = 1; i < numeroGiocatori; i++) {
  arrayLancio.push([Math.floor((Math.random() * 6) +1 )])
}
console.log(arrayLancio);

for (var i = 0; i < arrayLancio.length; i++) {
  document.writeln("Giocatore" + (i+1) + ":" + arrayLancio[i] + "<br>");
}

maxValue = arrayLancio[0];
winner = "Giocatore" + 1;
console.log(winner);
console.log(maxValue);

for (var i = 1; i < arrayLancio.length; i++) {
  if(maxValue < arrayLancio[i]){
    maxValue = arrayLancio[i];
    winner = "Giocatore" + (i + 1);
  }
}
document.write(winner);

var cont = 0;
var arrayPareggio = [];
for (var k = 0; k < arrayLancio.length; k++) {
  if (maxValue == arrayLancio[k]) {
    arrayPareggio.push("Giocatore" + (k + 1));
    cont = cont + 1;
  }
}
console.log(cont);
// console.log(cont);

if(cont > 1){
  document.writeln(arrayPareggio);
}
