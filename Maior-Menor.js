const prompt = require("prompt-sync")({ sigint: true });

while (true) {
  let primeiroNumero = prompt("Informe o primeiro numero: ");
  let segundoNumero = prompt("Informe o segundo numero: ");
  if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
  console.log("informe somente numeros, por favor.");
} else {
  if (primeiroNumero > segundoNumero) 
    console.log(primeiroNumero);
  else if (segundoNumero > primeiroNumero) 
    console.log(segundoNumero);
  else console.log("iguais");
}}
