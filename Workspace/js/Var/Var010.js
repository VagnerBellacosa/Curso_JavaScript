// It's important to point out that the hoisting will affect the variable declaration,
// but not its value's initialization. The value will be indeed assigned when the
// assignment statement is reached:

function do_something() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
}

// ...is implicitly understood as:

function do_something() {
    var bar;
    console.log(bar); // undefined
    bar = 111;
    console.log(bar); // 111
}