// The property created on the global object for global variables, is set to be non-configurable
//  because the identifier is to be treated as a variable, rather than a straightforward property 
//  of the global object. JavaScript has automatic memory management, and it would make no sense
//  to be able to use the delete operator on a global variable.

'use strict';
var x = 1;
globalThis.hasOwnProperty('x'); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.