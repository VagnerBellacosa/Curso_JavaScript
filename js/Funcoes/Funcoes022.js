function multiplicar(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}

multiplicar(5); // 5

console.log(multiplicar(5));