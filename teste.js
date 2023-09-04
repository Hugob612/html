const arrayDeNumeros = [];

for (let i = 0; i < 78; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
  arrayDeNumeros.push(numeroAleatorio);
}
let produto = 0;
arrayDeNumeros.forEach((numero) => {
  produto += numero;
});

console.log (produto);
