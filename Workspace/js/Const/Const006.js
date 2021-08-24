// const in objects and arrays
// const also works on objects and arrays.

const MY_OBJECT = { 'key': 'value' };

// Attempting to overwrite the object throws an error
// Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = { 'OTHER_KEY': 'value' };

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error
// Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];