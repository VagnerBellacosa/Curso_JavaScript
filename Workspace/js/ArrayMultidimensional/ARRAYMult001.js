// Exemplo de Array Multidimensional e povoamento das ocorrencias
// Exemplo comando console.tablle

let activities = [];

activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);

// 
// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 9 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// └─────────┴─────────────┴───┘
//

// exibe a ocorrencia 0,1 do array

console.log(activities[0][1]);

// 9

// insere novo item no array atraves do push

activities.push(['Study', 2]);

console.table(activities);

// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 9 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// │    5    │   'Study'   │ 2 │
// └─────────┴─────────────┴───┘

// insere novo item apos 1,0 e move os itens restantes uma posicao a frente

activities.splice(1, 0, ['Programming', 2]);

console.table(activities);

// ┌─────────┬───────────────┬───┐
// │ (index) │       0       │ 1 │
// ├─────────┼───────────────┼───┤
// │    0    │    'Work'     │ 9 │
// │    1    │ 'Programming' │ 2 │
// │    2    │     'Eat'     │ 1 │
// │    3    │   'Commute'   │ 2 │
// │    4    │  'Play Game'  │ 1 │
// │    5    │    'Sleep'    │ 7 │
// │    6    │    'Study'    │ 2 │
// └─────────┴───────────────┴───┘

// This example calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.

activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);


// ┌─────────┬───────────────┬───┬───────┐
// │ (index) │       0       │ 1 │   2   │
// ├─────────┼───────────────┼───┼───────┤
// │    0    │    'Work'     │ 9 │ '38%' │
// │    1    │ 'Programming' │ 2 │ '8%'  │
// │    2    │     'Eat'     │ 1 │ '4%'  │
// │    3    │   'Commute'   │ 2 │ '8%'  │
// │    4    │  'Play Game'  │ 1 │ '4%'  │
// │    5    │    'Sleep'    │ 7 │ '29%' │
// │    6    │    'Study'    │ 2 │ '8%'  │
// └─────────┴───────────────┴───┴───────┘


// Removendo o ultimo elemento do Array

activities.pop();

console.table(activities);

// ┌─────────┬───────────────┬───┬───────┐
// │ (index) │       0       │ 1 │   2   │
// ├─────────┼───────────────┼───┼───────┤
// │    0    │    'Work'     │ 9 │ '38%' │
// │    1    │ 'Programming' │ 2 │ '8%'  │
// │    2    │     'Eat'     │ 1 │ '4%'  │
// │    3    │   'Commute'   │ 2 │ '8%'  │
// │    4    │  'Play Game'  │ 1 │ '4%'  │
// │    5    │    'Sleep'    │ 7 │ '29%' │
// └─────────┴───────────────┴───┴───────┘


// Removendo a terceira coluna do array (dimensao)

activities.forEach((activity) => {
    activity.pop(2);
});

console.table(activities);

// ┌─────────┬───────────────┬───┐
// │ (index) │       0       │ 1 │
// ├─────────┼───────────────┼───┤
// │    0    │    'Work'     │ 9 │
// │    1    │ 'Programming' │ 2 │
// │    2    │     'Eat'     │ 1 │
// │    3    │   'Commute'   │ 2 │
// │    4    │  'Play Game'  │ 1 │
// │    5    │    'Sleep'    │ 7 │
// └─────────┴───────────────┴───┘


// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

// Navega pelo array exibindo em console os elementos 

// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

// [0,0] = Work
// [0,1] = 9
// [1,0] = Programming
// [1,1] = 2
// [2,0] = Eat
// [2,1] = 1
// [3,0] = Commute
// [3,1] = 2
// [4,0] = Play Game
// [4,1] = 1
// [5,0] = Sleep
// [5,1] = 7
// [0,0] = Work
// [0,1] = 9
// [1,0] = Programming
// [1,1] = 2
// [2,0] = Eat
// [2,1] = 1
// [3,0] = Commute
// [3,1] = 2
// [4,0] = Play Game
// [4,1] = 1
// [5,0] = Sleep
// [5,1] = 7

// Or you can use the forEach() method twice:
// Lista todos os itens do array

activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});

// Work
// 9
// Programming
// 2
// Eat
// 1
// Commute
// 2
// Play Game
// 1
// Sleep
// 7