// Exemplo: Usando slice() para criar uma nova string
//O exemplo a seguir usa slice() para criar uma nova string.

var str1 = 'A manhã está sobre nós', // o tamanho de str1 é 22
    str2 = str1.slice(3, 10),
    str3 = str1.slice(2, -2),
    str4 = str1.slice(13),
    str5 = str1.slice(22);

console.log(str2); // retorna 'anhã es'

console.log(str3); // retorna 'manhã está sobre n'

console.log(str4); // retorna 'sobre nós'

console.log(str5); // retorna <empty string>