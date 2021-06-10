// Usando continue com while
// O exemplo abaixo mostra um laço while que tem um  continue que será executado quando o 
// valor de i for 3. Assim, n terá os valores 1, 3, 7, e 12.

var i = 0;
var n = 0;

while (i < 5) {
    i++;

    if (i === 3) {
        continue;
    }

    n += i;
    console.log("i = " + i);
    console.log("n = " + n);
}