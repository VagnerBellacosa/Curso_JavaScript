//  É possível usar a keyword let para vincular variáveis ​​localmente no escopo de loops em vez
//  de usar uma variável global (definida usando var) para isso.

for (let i = 0; i<10; i++) {
  alert(i); // 1, 2, 3, 4 ... 9
}

alert(i); // i não está definida