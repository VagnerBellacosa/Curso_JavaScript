function Create2DArray(rows) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }

    return arr;
}

console.table(Create2DArray());

// ┌─────────┐
// │ (index) │
// ├─────────┤
// └─────────┘

console.log(Create2DArray());

// []