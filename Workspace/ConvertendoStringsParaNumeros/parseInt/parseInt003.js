// Uma função de análise mais rigorosa
// É útil em algum momento ter uma maneira mais rigorosa para analisar valores inteiros. 
//
// Expressões regulares podem ajudar:

filterInt = function(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
    return NaN;
}

console.log(filterInt('421')); // 421
console.log(filterInt('-421')); // -421
console.log(filterInt('+421')); // 421
console.log(filterInt('Infinity')); // Infinity
console.log(filterInt('421e+0')); // NaN
console.log(filterInt('421hop')); // NaN
console.log(filterInt('hop1.61803398875')); // NaN
console.log(filterInt('1.61803398875')); // NaN