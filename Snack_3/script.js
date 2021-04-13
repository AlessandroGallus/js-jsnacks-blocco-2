var numero_invitati = prompt("Quanti invitati vuoi")

var nomi = ["Giorgio", "Cristina", "Marco", "Silvio", "Stefano", "Claudio", "Massimo"];
var cognomi = ["Vanni", "D'Avena", "Masini", "Pozzoli", "Bersola", "Maioli", "Dorati"];
var invitati = [];

for(var i=0; i<numero_invitati; i++){
  var random_nome = Math.floor(Math.random()*7);
  var random_cognome = Math.floor(Math.random()*7);
  invitati[i] = nomi[random_nome] + " " + cognomi[random_cognome];
}
console.log(invitati);