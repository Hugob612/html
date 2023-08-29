const prompt = require("prompt-sync")({ sigint: true });

while (true) {
  let numero = prompt("Informe um numero: ");

  let isPrimo = true;

  if(isNaN(numero)){
  console.log("Digite um numero valido");
  continue;
}
  if (numero <= 1) {
    isPrimo = false;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        isPrimo = false;
        break;
      }
    }
  }

  if (isPrimo) {
    console.log("Este número é primo.");
  } else {
    console.log("Este número não é primo.");
  }
}
