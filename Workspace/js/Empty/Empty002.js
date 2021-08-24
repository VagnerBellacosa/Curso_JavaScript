// A instrução vazia às vezes é usada com instruções de loop. Veja o exemplo a seguir com um corpo
// de loop vazio:

var arr = [1, 2, 3];

console.log(arr)

// Assign all array values to 0
for (i = 0; i < arr.length; arr[i++] = 0) /* empty statement */;


console.log(arr)

// [0, 0, 0]