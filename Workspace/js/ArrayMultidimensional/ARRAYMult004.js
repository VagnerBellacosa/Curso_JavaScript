function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}

createArray(); // [] or new Array()

console.table(createArray());

// ┌─────────┐
// │ (index) │
// ├─────────┤
// └─────────┘

console.log(createArray());

// []

createArray(2); // new Array(2)

console.table(createArray(2));

// ┌─────────┐
// │ (index) │
// ├─────────┤
// └─────────┘

console.log(createArray(2));

// [ <2 empty items> ]

createArray(3, 2);

// [new Array(2),
//  new Array(2),
//  new Array(2)]

console.table(createArray(3, 2));

// ┌─────────┐
// │ (index) │
// ├─────────┤
// │    0    │
// │    1    │
// │    2    │
// └─────────┘

console.log(createArray(3, 2));

// [ [ <2 empty items> ], [ <2 empty items> ], [ <2 empty items> ] ]