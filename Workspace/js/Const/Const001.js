// const
// Constants are block-scoped, much like variables declared using the let keyword. 
// The value of a constant can't be changed through reassignment, and it can't be redeclared.


const number = 42;

try {
    number = 99;
} catch (err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const `number'
    // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42