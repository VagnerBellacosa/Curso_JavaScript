// The scope of a variable declared with var is its current execution context and closures
//  thereof, which is either the enclosing function and functions declared within it, or,
//  for variables declared outside any function, global. Duplicate variable declarations 
// using var will not trigger an error, even in strict mode, and the variable will not lose
//  its value, unless another assignment is performed.

'use strict';
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();