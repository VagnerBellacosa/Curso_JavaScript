// Relação com objetos Array
var kvArray = [["key1", "value1"], ["key2", "value2"]];

// Utiliza o construtor padrão de Map para converter um Array de 2 dimensões de chave-valor Array em um mapa
var myMap = new Map(kvArray);

myMap.get("key1"); // retorna "value1"

// Utiliza Array.from para converter um mapa em um Array de 2 dimensões de chave-valor
console.log(Array.from(myMap)) // Mostrará exatamente o mesmo Array que kvArray

// Uma forma mais sucinta de realizar a mesma conversão com o operador spread
console.log([...myMap]);

// Ou usa o operador spread nas chaves ou valores para o iterador pegar
// um array com somente as chaves ou valores
console.log([...myMap.keys()]); // Mostrará ["key1", "key2"]