/// A função a seguir possui um comando break que encerra o loop  while quando a variável i vale 3,
// e então retorna o valor 3 * x.

function testaBreak(x) {
    var i = 0;

    while (i < 6) {
        if (i == 3) {
            break;
        }
        i += 1;
    }
    return i * x;
}