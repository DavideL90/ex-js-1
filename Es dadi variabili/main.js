var numeroGiocatori = prompt("Inserire il numero di giocatori:");
var arrayGiocatori = [];
var arrayLancio = [];
var maxValue = 0;
var winner = "";
for (var i = 1; i <= numeroGiocatori; i++) {
  arrayGiocatori.push(["Giocatore" + i])
  arrayLancio.push([Math.floor((Math.random() * 6) +1 )])
}

maxValue = arrayLancio[0];
winner = arrayGiocatori[0];

for (var i = 1; i < arrayGiocatori.length; i++) {
    if(maxValue < arrayLancio[i]){
      maxValue = arrayLancio[i];
      winner = arrayGiocatori[i];
    }
}

document.write(winner + " ");
document.write(maxValue);
// var cont = 0;
// var arrayPareggio = [];
// for (var i = 0; i < arrayGiocatori.length; i++) {
//   if(maxValue == arrayLancio[i]){
//     debugger;
//     arrayPareggio.push([arrayGiocatori[i]]);
//     cont++;
//   }
// }
// console.log(arrayPareggio);
