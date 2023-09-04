const arrayDeNumeros = [];
let paresDoArray ;

for (let i = 0; i < 78; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
  arrayDeNumeros.push(numeroAleatorio);
  if (numeroAleatorio % 2 === 1)
  console.log(numeroAleatorio);
}

arrayDeNumeros.forEach(num => {
  if (num % 2 === 1)
  arrayDeNumeros.pop(num);
} );

console.log(arrayDeNumeros.sort());
const linha1 = [ 0,0,0,0,0,0];
const linha2 = [ 0,0, 1 ,0,0,0];
const mapa = []
mapa.push(linha1);
mapa.push(linha2);

console.log(mapa);
// pop remover do array
// push adicionar no array
// sort ordernar