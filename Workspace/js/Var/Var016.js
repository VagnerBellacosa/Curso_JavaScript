// Implicit globals and outer function scope
// Variables that appear to be implicit globals may be references to variables in an outer
// function scope:

var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
    var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

    console.log(x, y); // 0 2

    function b() {
        x = 3; // Assigns 3 to existing file scoped x.
        y = 4; // Assigns 4 to existing outer y.
        z = 5; // Creates a new global variable z, and assigns it a value of 5.
        // (Throws a ReferenceError in strict mode.)
    }

    b(); // Creates z as a global variable.
    console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a