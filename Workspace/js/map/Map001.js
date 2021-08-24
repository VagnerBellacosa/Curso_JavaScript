Usando o objeto Map
var myMap = new Map();

var keyString = "uma string",
    keyObj = {},
    keyFunc = function () {};

// configurando os valores
myMap.set(keyString, "valor associado com 'uma string'");
myMap.set(keyObj, "valor associado com keyObj");
myMap.set(keyFunc, "valor associado com keyFunc");

myMap.size; // 3

// obtendo os valores
myMap.get(keyString);    // "valor associado com 'uma string'"
myMap.get(keyObj);       // "valor associado com keyObj"
myMap.get(keyFunc);      // "valor associado com keyFunc"

myMap.get("uma string"); // "valor associado com 'uma string'"
                         // pois keyString === 'uma string'
myMap.get({});           // undefined, pois keyObj !== {}
myMap.get(function() {}) // undefined, pois keyFunc !== function () {}


var myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"



