var giocatore1 = Math.floor((Math.random() * 6) + 1);
var giocatore2 = Math.floor((Math.random() * 6) + 1);
document.getElementById("lancio1").innerHTML = giocatore1;
document.getElementById("lancio2").innerHTML = giocatore2;

if(giocatore1 > giocatore2){
  document.getElementById("vincitore").innerHTML = "Giocatore 1 vince!";
}
else if(giocatore1 < giocatore2){
  document.getElementById("vincitore").innerHTML = "Giocatore 2 vince!";
}
else{
  document.getElementById("vincitore").innerHTML = "Pareggio!";
}
