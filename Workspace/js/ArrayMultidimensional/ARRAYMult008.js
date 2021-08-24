var appVar = [
    []
];

appVar[0][4] = "bineesh";
appVar[0][5] = "kumar";

console.log(appVar[0][4] + appVar[0][5]);

// bineeshkumar

console.log(appVar);

// [ [ <4 empty items>, 'bineesh', 'kumar' ] ]

console.table(appVar);

// ┌─────────┬───────────┬─────────┐
// │ (index) │     4     │    5    │
// ├─────────┼───────────┼─────────┤
// │    0    │ 'bineesh' │ 'kumar' │
// └─────────┴───────────┴─────────┘