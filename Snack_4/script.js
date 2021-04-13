var numeri = [0, 6, 1, 7, 2, 8, 3, 9, 4, 10, 5, 11, 6, 12, 7, 13, 8, 14, 9, 15, 10]
var somma =0;

for (i=0; i<numeri.length; i++){
  if((i+1) %2){
    console.log(numeri[i])
    somma += numeri[i];
  }
}
console.log(somma)
