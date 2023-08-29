const prompt = require("prompt-sync")({ sigint: true });
//TODO: Permitir vogal

while (true) {
  let letra = prompt("Informe uma letra: ");

  if (!isNaN(letra)) {
      console.log("Por favor, informe apenas letras."); 
  } else {
      if (letra.length > 1) {
        console.log("Por favor, informe apenas uma letra.");
      } else {
          if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
            console.log("Vogal");
          } else {
            console.log("Consoante");
          }
      }
  }
}
