// A função stricter parse
// As vezes é útil ter uma maneira mais rigorosa para analisar valores float, expressões
// regulares podem ajudar:

var filterFloat = function(value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
        .test(value))
        return Number(value);
    return NaN;
}

console.log(filterFloat('421')); // 421
console.log(filterFloat('-421')); // -421
console.log(filterFloat('+421')); // 421
console.log(filterFloat('Infinity')); // Infinity
console.log(filterFloat('1.61803398875')); // 1.61803398875
console.log(filterFloat('421e+0')); // NaN
console.log(filterFloat('421hop')); // NaN
console.log(filterFloat('hop1.61803398875')); // NaN