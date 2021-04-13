var numero = 0;
var somma=0;
var i =0;
/* for(i = 0; i<5; i++){
  numero = parseInt(prompt("Inserisci il " + (i+1) + "° numero: "));
  somma = somma+numero;
} */
while(i<5){
  numero = parseInt(prompt("Inserisci il " + (i+1) + "° numero: "));
  somma+=numero;
  i++;
}
console.log(somma);