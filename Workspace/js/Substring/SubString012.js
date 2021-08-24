// slice
// O exemplo abaixo percorre o índice no sentido anti-horário (de trás para frente) até chegar 
// ao índice 16 da string, que será o início. Logo após, percorre o índice da string no sentido
//  horário até chegar ao índice 16 da string, que será o fim.

str = "Vagner Renato Bellacosa System Analyst"
console.log(str.slice(-9, 16)) // retorna

// Be

// O exemplo abaixo percorre o índice no sentido horário até chegar ao índice 14 da string,
// que será o início. Logo após, percorre o índice da string no sentido anti-horário até 
//chegar ao índice 7 da string, que será o fim.

console.log(str.slice(14, -7)) // retorna "tá so"

// Bellacosa System

// O exemplo abaixo percorre o índice no sentido anti-horário até chegar ao índice 5 da string,
// que será o início. Logo após, percorre o índice da string novamente no sentido anti-horário
// até chegar ao índice 1 da string, que será o fim.

console.log(str.slice(-5, -1)) // retorna "e nó"