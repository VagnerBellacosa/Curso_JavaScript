// Interpretação octal sem informar a base
// Embora desencorajado pelo ECMAScript 3 e proibido pelo ECMAScript 5, muitas implementações
// interpretam uma string numérica começando com um 0 como octal. O exemplo abaixo pode ter
// um resultado octal, ou ele pode ter um resultado decimal.  Sempre especifique uma base para 
// evitar este comportamento não confiável.

parseInt("0e0"); // 0
parseInt("08"); // 0, '8' não é um dígito octal.