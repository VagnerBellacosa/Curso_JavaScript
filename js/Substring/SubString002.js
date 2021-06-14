// Slice() - substring
//
// O método slice() extrai uma parte de uma string e a retorna como uma nova string,
// sem modificar a string original.
// startIndex
// É o índice, de base zero, onde se inicia a extração. Se for um número negativo,
// será o mesmo que executar str.length + startIndex (por exemplo, se startIndex for -3,
// será o mesmo que executar str.length - 3).

const nome = 'Vagner';
console.log(nome.slice(-3)); // retorna 'ner'

// ner