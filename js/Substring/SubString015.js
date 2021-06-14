// Substring

// No exemplo a seguir demonstramos como selecionar apenas o texto entre as
// tags HTML que destacam o texto em negrito. Para isso também utilizamos a
// propriedade length.

var htmlExemplo = "<b>Texto em destaque</b>";
var resultado = htmlExemplo.substring(3, htmlExemplo.length - 4);

console.log(resultado);

// Texto em destaque