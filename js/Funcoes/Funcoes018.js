var criarPet = function(nome) {
  var sex;

  return {
    setNome: function(newNome) {
      nome = newNome;
    },

    getNome: function() {
      return nome;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "macho" || newSex.toLowerCase() == "fêmea")) {
        sex = newSex;
      }
    }
  }
}

var pet = criarPet("Vivie");
pet.getNome();                  // Vivie

pet.setNome("Oliver");
pet.setSex("macho");
pet.getSex();                   // macho
pet.getNome();                  // Oliver


console.log(pet);