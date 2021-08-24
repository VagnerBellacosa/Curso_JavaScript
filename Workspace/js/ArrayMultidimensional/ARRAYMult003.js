let x = new Array(10);

for (var i = 0; i < x.length; i++) {
    x[i] = new Array(3);
}

// Exibe a estrutura

console.log(x);

// [
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ],
//     [ <3 empty items> ]
//   ]

// exibe em tabela
console.table(x);

// ┌─────────┐
// │ (index) │
// ├─────────┤
// │    0    │
// │    1    │
// │    2    │
// │    3    │
// │    4    │
// │    5    │
// │    6    │
// │    7    │
// │    8    │
// │    9    │
// └─────────┘