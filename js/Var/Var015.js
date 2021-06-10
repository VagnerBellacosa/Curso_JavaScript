// The same example as above but with a strict mode:

'use strict';

var x = 0;

function f() {
    var x = y = 1; // Throws a ReferenceError in strict mode.
}
f();

console.log(x, y);