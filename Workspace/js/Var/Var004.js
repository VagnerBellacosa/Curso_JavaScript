/// Variables declared using var are created before any code is executed in a process known
//  as hoisting. Their initial value is undefined.

'use strict';
console.log(x); // undefined (note: not ReferenceError)
console.log('still going...'); // still going...
var x = 1;
console.log(x); // 1
console.log('still going...'); // still going...