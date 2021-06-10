// Usada dentro de um bloco, let limita os escopo das variáveis para aquele bloco.
// Observe a diferença entre var em que o escopo é definido dentro da função onde é declarada

var a = 5;
var b = 10;

if (a === 5) {
    let a = 4; // O escopo é dentro do bloco if
    var b = 1; // O escopo é dentro da função

    console.log(a); // 4
    console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1