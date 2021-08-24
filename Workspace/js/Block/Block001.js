// Com var
// Variáveis declaradas com var não possuem bloqueio de escopo. Variáveis introduzidas com um bloco
// são guardadas no escopo da função que elas estão ou script, e os efeitos de configura-las
// persistem pelo próprio bloco. Em outras palavras, declarações em bloco não introduzem um escopo.
// Mesmo blocos "standalone" são sintaxes válidas, você não vai querer usar blocos standalone
// em JavaScript, porque não fazem o que você pensa que eles fazem, se você pensa que eles
// fazer coisas como blocos em C ou Java. Por exemplo:

var x = 1; {
    var x = 2;
}
console.log(x); // imprime 2