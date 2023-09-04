class Pessoa {
  constructor(nome, verbo) {
    this.nome = nome;
    this.verbo = verbo;
  }
  andar() {
    console.log(`${this.nome} está andando!`);
  }
  fazerCaminhada() {
    console.log(`${this.nome} inciou uma caminhada!`);
    let i = 0;
    while (i <= 50) {
      this.andar();
      i++;
    }
    console.log(`${this.nome} encerrou sua caminhada!`);
  }
}
const nome = new Pessoa("Haphael", 1);
const verbo = new Pessoa("andando", 19);
nome.andar();
nome.fazerCaminhada();
