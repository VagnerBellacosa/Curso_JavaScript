function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
}
a = addSquares(2,3); // retorna 13
b = addSquares(3,4); // retorna 25
c = addSquares(4,5); // retorna 41

console.log(a);
console.log(b);
console.log(c);