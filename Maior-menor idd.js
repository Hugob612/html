const prompt = require("prompt-sync")({ sigint: true });

while (true) {
  let numero = prompt("Informe sua idade: ");
  if (isNaN(numero))
  console.log("informe apenas números!")
    else if (numero < 0){
  console.log("isso é impossível")
} else if (numero > 120)
  console.log("isso também é impossível")
else {
  if (numero < 18) 
    console.log("Menor de Idade");
  else console.log("Maior de Idade");
}}
