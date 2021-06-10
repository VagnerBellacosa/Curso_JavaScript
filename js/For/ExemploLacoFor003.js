// Assim como ocorre no bloco de inicialização, a condição também é opcional. 
// Se você está omitindo essa expressão, você deve certificar-se de quebrar
//  o loop no corpo para não criar um loop infinito.

for (var i = 0;; i++) {
    console.log(i);
    if (i > 3) break;
    // more statements
}