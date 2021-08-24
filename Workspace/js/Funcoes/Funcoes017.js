var pet = function(nome) {          // A função externa define uma variável "nome"
      var getNome = function() {
        return nome;                // A função interna tem acesso à variável "nome"  da função externa
      }

      return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
    },
    myPet = pet("Vivie");

myPet();                            // Retorna "Vivie"

console.log(mypet());