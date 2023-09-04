class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
  console.log(`rodando`)
  // Criando objetos usando a classe Pessoa
  const pessoa1 = new Pessoa("João", 25);
  const pessoa2 = new Pessoa("Maria", 30);
  pessoa1.nome = "Joãop";
  // Chamando o método apresentar para cada objeto
  pessoa1.apresentar();
  pessoa2.apresentar();