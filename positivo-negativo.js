const prompt = require("prompt-sync")({ sigint: true });

while (true) {
  let numero = prompt("Informe um numero: ");
 if (isNaN(numero))
 console.log("Informe um numero valido");
 else {
  if (numero < 0) console.log("negativo");
  else console.log("positivo");
}}
