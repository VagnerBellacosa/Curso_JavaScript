var arr = Array.from(Array(2), () => new Array(4));

arr[0][0] = 'foo';

console.info(arr);

// [ [ 'foo', <3 empty items> ], [ <4 empty items> ] ]

console.log(arr);

// [ [ 'foo', <3 empty items> ], [ <4 empty items> ] ]

console.table(arr);

// ┌─────────┬───────┐
// │ (index) │   0   │
// ├─────────┼───────┤
// │    0    │ 'foo' │
// │    1    │       │
// └─────────┴───────┘



var arr = Array.from(Array(8), () => new Array(8));

arr[0][0] = 'foo';

console.info(arr);

// [
//     [ 'foo', <7 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ]
//   ]

console.log(arr);

// [
//     [ 'foo', <7 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ],
//     [ <8 empty items> ]
//   ]

console.table(arr);

//   ┌─────────┬───────┐
//   │ (index) │   0   │
//   ├─────────┼───────┤
//   │    0    │ 'foo' │
//   │    1    │       │
//   │    2    │       │
//   │    3    │       │
//   │    4    │       │
//   │    5    │       │
//   │    6    │       │
//   │    7    │       │
//   └─────────┴───────┘