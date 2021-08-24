// Exemplo: Usando slice() com índices negativos.
// O exemplo a seguir usa o slice() com índices negativos.

var str = 'A manhã está sobre nós';

console.log(str.slice(-3));     // retorna 'nós'

console.log(str.slice(-3, -1)); // retorna 'nó'

console.log(str.slice(0, -1));  // retorna 'A manhã está sobre nó'

