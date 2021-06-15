function fatorial(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * fatorial(n - 1));
}

var a, b, c, d, e;
a = fatorial(1); // a recebe o valor 1
b = fatorial(2); // b recebe o valor 2
c = fatorial(3); // c recebe o valor 6
d = fatorial(4); // d recebe o valor 24
e = fatorial(5); // e recebe o valor 120

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
