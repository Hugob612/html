const prompt = require("prompt-sync")({ sigint: true });
 
let contador = 0;

while (contador != 10) {
  let numero = prompt("Insira sua nota:  ");
 
  if (isNaN(numero)){
    console.log("informe apenas números!")
  } else if (numero < 0 || numero > 10) {
    console.log("Informe apenas numeros entre 0 e 10!")
  } else { 
    if (numero >= 7) {
    console.log("Parabéns, aprovado.");
  } else if (numero > 5 && numero <= 6.9) {
    console.log("Você está de recuperação.");
  } else if (numero < 5) {
    console.log("Reprovado.");
  }}
  contador++;
}
