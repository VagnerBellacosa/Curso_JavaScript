function myConcat(separador) {
   var result = "", // inicializa a lista
       i;
   // itera por meio de argumentos
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separador;
   }
   return result;
}

// retorna "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

console.log(myConcat);

// retorna "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

console.log(myConcat);

// retorna "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

console.log(myConcat);