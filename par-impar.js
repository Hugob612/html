const prompt = require("prompt-sync")({ sigint: true });

while (true) {
  let numero = prompt("Informe um número: ");
  if (isNaN(numero)){
  console.log("Informe um número, por favor.");
  } else {
  if (numero % 2 == 0) console.log("par");
  else console.log("impar");
}}
