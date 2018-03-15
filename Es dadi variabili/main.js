var numeroGiocatori = prompt("Inserire il numero di giocatori:");
var arrayLancio = [];
var maxValue = 0;
var winner = "";

for (var i = 1; i < numeroGiocatori; i++) {
  arrayLancio.push([Math.floor((Math.random() * 6) +1 )])
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

console.log(arrayLancio);
console.log(maxValue);
console.log(winner);

var cont = 0;

for (var i = 0; i < arrayLancio.length; i++) {
  debugger
  if (console.log(maxValue == arrayLancio[i])) {
    cont = cont + 1;
    console.log(cont);
  }
}
console.log(cont);
//
// if(cont > 1){
//
// }
