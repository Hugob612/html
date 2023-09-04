const arrayDeNumeros = [];

let soma = 0;

for (let i = 0; i < 78; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
  arrayDeNumeros.push(numeroAleatorio);
  soma += arrayDeNumeros[i];
}
let total =0;
arrayDeNumeros.forEach((numero) => {
    total += numero;
});

console.log(+ soma);