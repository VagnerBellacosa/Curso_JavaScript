// Usando o continue com um rótulo
// No exemplo abaixo, um laço rotulado como checkiandj contém o laço rotulado checkj. 
// Se o continue for alcançado, o programa continua a execução voltando ao topo do rótulo checkj. 
// Cada vez que o continue for alcançado, checkj reiterará até sua condição for falsa. 
// Quando retornar false, o restante de checkiandj será executado.
//
// Se o continue tivesse o rótulo checkiandj, o programa iria continuar retornando a execução 
// ao label checkiandj.
//
/// Veja também label.

var i = 0;
var j = 8;

checkiandj: while (i < 4) {
    console.log("i: " + i);
    i += 1;

    checkj: while (j > 4) {
        console.log("j: " + j);
        j -= 1;

        if ((j % 2) == 0)
            continue checkj;
        console.log(j + " is odd.");
    }
    console.log("i = " + i);
    console.log("j = " + j);
}