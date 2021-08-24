// Slice
// endIndex
// Opcional. É o índice, de base zero, onde termina a extração. O caractere que possuir este
// índice não será incluso.
// Se omitido ou possuir valor de undefined, ou for maior que str.length, slice() 
// extrairá até o fim da string.

const nome = 'Vagner Renato';

// omitindo fimSlice
console.log(nome.slice(0));

// Vagner Renato

// undefined fimSlice
let i; // variável criada sem atribuir valor
console.log(nome.slice(0, i));

// Vagner Renato

// passando número maior que o tamanho da string
console.log(nome.slice(0, 15));

// Vagner