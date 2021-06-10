// Multi-Caso - Operações encadeadas 
// Esse é um exemplo de múltiplas operações squenciais usando a instrução switch, onde, 
// dependendo do número inteiro, você poderá receber outputs diferentes. 
// Isso mostra que você pode alterar a ordem que você insere as instruções de case,
//  e isso não precisa ser uma sequência numérica. Em JavaScript, você pode até mesmo 
// misturar definições de strings dentro desses cases. 
// 
// This is an example of a multiple-operation sequential switch statement, where, 
// depending on the provided integer, you can receive different output.
//  This shows you that it wil traverse in the order that you put the case statements,
//  and it does not have to be numerically sequential. In JavaScript, you can even mix in 
// definitions of strings into these case statements as well.

var foo = 1;
var output = 'Output: ';
switch (foo) {
    case 10:
        output += 'Então ';
    case 1:
        output += 'Qual ';
        output += 'É ';
    case 2:
        output += 'O Seu ';
    case 3:
        output += 'Nome';
    case 4:
        output += '?';
        alert(output);
        break;
    case 5:
        output += '!';
        alert(output);
        break;
    default:
        alert('Favor escolher um número de 0 à 6!');
}