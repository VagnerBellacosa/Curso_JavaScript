//* Exemplo de funcao classica//

const carro = {
    modelo: "Fiesta",
    fabricante: "Ford",
    NomeCompleto: function() {
        return `${this.fabricante} ${this.modelo}`;
    }
}

console.log(carro.NoeCompleto());