//  Escopo de bloco
// Variáveis declaradas com let são "içadas" para começo do bloco em que elas são definidas 
// (isso é conhecido também pelo termo, hoisting).
// Redeclaração de uma mesma variável num mesmo escopo de bloco causa um TypeError.

if (x) {
    let foo;
    let foo; // Emite um TypeError.
}