// Slice
// Caso endIndex seja definido e startIndex e endIndex sejam ambos positivos ou negativos, 
//endIndex deve ser maior que startIndex, do contrário uma string vazia é retornada.

const nome = 'Vagner Renato';

console.log(nome.slice(-1, -3)); // retorna <empty string>

console.log(nome.slice(3, 1)); // retorna <empty string>