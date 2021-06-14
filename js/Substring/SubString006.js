// slice

// Se for um valor diferente de indefinido e, ao mesmo tempo não for um número, uma string vazia
// será retornada

const nome = 'Vagner Renato';
let i; // variável criada sem valor atribuído

// passando algum valor ≠ de undefined e ≠ de número

console.log(nome.slice(0, NaN)); // retorna <empty string>

console.log(nome.slice(2, false)); // retorna <empty string>

console.log(nome.slice(7, i)); // retorna

// Renato