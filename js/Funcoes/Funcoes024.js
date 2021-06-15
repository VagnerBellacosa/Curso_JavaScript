function multiplicar(multiplicador, ...args) {
  return args.map(x => multiplicador * x);
}

var arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]