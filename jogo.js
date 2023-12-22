class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
  
      this.tipoMovimentoRelacionado = new TipoMovimentoRelacionado();
      this.tipoMovimentoRelacionado.relateTypesAndMoves();
    }
  
    getType() {
      return this.type;
    }
  
    getAttack() {
      return this.tipoMovimentoRelacionado.getMoveForType(this.type);
    }
  
    attack() {
      console.log(`O ${this.getType()}, ${this.name}, atacou usando ${this.getAttack()}.`);
    }
  }
  
  class TipoMovimentoRelacionado {
    constructor() {
      this.type = ["mago", "guerreiro", "monge", "ninja", "ladino"];
      this.moves = ["magia", "espada", "chute", "shuriken", "adaga"];
      this.relacionados = {};
    }
  
    relateTypesAndMoves() {
      for (let i = 0; i < this.type.length; i++) {
        const tipo = this.type[i];
        const movimento = this.moves[i];
        this.relacionados[tipo] = movimento;
      }
    }
  
    getMoveForType(tipo) {
      return this.relacionados[tipo];
    }
  
    printTypesAndMoves() {
      for (let i = 0; i < this.type.length; i++) {
        const tipo = this.type[i];
        const movimento = this.getMoveForType(tipo);
        console.log(`O ${tipo}, atacou usando ${movimento}!`);
      }
    }
  }
  
  const tipoMovimentoRelacionado = new TipoMovimentoRelacionado();
  tipoMovimentoRelacionado.relateTypesAndMoves();
  tipoMovimentoRelacionado.printTypesAndMoves();
  