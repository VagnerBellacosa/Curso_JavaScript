// const input = gets();

input = parseInt(gets(),10);

const salary = Number(input.shift());


let percent = 0;

if ( salary <= 400  ) {
  percent = 15;
} else if ( salary <= 800 ) {
  percent = 12;
} else if ( salary <= 1200  ) {
  percent = 10;
} else if ( salary <= 2000 ) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = salary * ( percent / 100) ;

const newSalary = salary + reajust;

console.log("Novo salario: " + newSalary.toFixed(2));

console.log("Reajuste ganho: " + reajust.toFixed(2));

console.log("Em percentual: " + percent + " %");
