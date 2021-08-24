// Esta função retorna uma string preenchida com zeros à esquerda
function padZeros(num, totalLen) {
   var numStr = num.toString();             // Inicializar valor de retorno como string
   var numZeros = totalLen - numStr.length; // Calcular números de zeros
   for (var i = 1; i <= numZeros; i++) {    // Preencher a quantidade de zeros
      numStr = "0" + numStr;
   }
   return numStr; // Retorna a string já preenchida
}

var resultado;
resultado = padZeros(42,4); // retorno "0042"
console.log(resultado);

resultado = padZeros(42,2); // retorno "42"
console.log(resultado);

resultado = padZeros(5,4);  // retorno "0005"
console.log(resultado);