function fora(x) {
   function dentro(y) {
      return x + y;
   }
   return dentro;
}
fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
result = fn_inside(5); // retorna 8

result1 = fora(3)(5); // retorna 8

console.log(result);
console.log(result1);