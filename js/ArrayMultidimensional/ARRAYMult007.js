var arr = Array(2).fill(null).map(() => Array(4));

arr[0][0] = 'foo';

console.info(arr);

// [ [ 'foo', <3 empty items> ], [ <4 empty items> ] ]

console.table(arr);

// ┌─────────┬───────┐
// │ (index) │   0   │
// ├─────────┼───────┤
// │    0    │ 'foo' │
// │    1    │       │
// └─────────┴───────┘

console.info(arr[0][0], arr[1][0]);

// foo undefined