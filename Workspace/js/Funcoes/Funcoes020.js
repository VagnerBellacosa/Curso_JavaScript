var createPet = function(nome) {  // Função externa define uma variável chamada "nome"
  return {
    setNome: function(nome) {    // Função fechada define uma variável chamada "nome"
      nome = nome;               // ??? Como podemos acessar o "nome" definido pela função externa ???
    }
  }
}