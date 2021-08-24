function Pessoa() {
  var self = this; // Alguns preferem 'that' em vez de 'self'. 
                   // Escolha um e seja consistente.
  self.idade = 0;

  setInterval(function crescer() {
    // A chamada de retorno refere-se à variável 'self' na qual
    // o valor é o objeto esperado.
    self.idade++;
  }, 1000);
}

