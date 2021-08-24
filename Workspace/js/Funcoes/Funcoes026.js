function Pessoa() {      // O construtor Pessoa() define 'this' como sendo ele.
    this.idade = 0;
    setInterval(function crescer() {    // No modo não estrito, a função crescer define 'this'
            // como o objeto global, o que é diferente do 'this'
            // definido pelo construtor Pessoa().
            this.idade++;
     }, 1000);
}
var p = new Pessoa();

console.log(p);