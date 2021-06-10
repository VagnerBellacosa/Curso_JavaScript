// var
// The var statement declares a function-scoped or globally-scoped variable, optionally 
// initializing it to a value.

var x = 1;

if (x === 1) {
    var x = 2;

    console.log(x);
    // expected output: 2
}

console.log(x);
// expected output: 2