
// O código a seguir também utiliza o comando break com blocos nomeados mas gera um erro de 
// sintaxe pois o comando break está dentro do bloco_1 mas faz uma referência ao bloco_2.
// Um comando break sempre deverá estar dentro da estrutura nomeada na qual fizer referência.

bloco_1:{
  console.log ('1');
  break bloco_2;            // SyntaxError: label not found
}

bloco_2:{
  console.log ('2');
}
