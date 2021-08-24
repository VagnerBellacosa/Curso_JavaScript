/* Declare a função 'minhaFunção' */
function minhaFuncao(objeto) {
   objeto.marca = "Toyota";
 }

 /*
  * Declare a variável 'meucarro';
  * crie e inicialize um novo Objeto;
  * atribua referência para 'meucarro'
  */
 var meucarro = {
   marca: "Honda",
   modelo: "Accord",
   ano: 1998
 };

 /* Exibe 'Honda' */
 console.log(meucarro.marca);

 /* Passe a referência do objeto para a função */
 minhaFuncao(meucarro);

 /*
  * Exibe 'Toyota' como valor para a propriedade 'marca'
  * do objeto, mudado pela função.
  */
 console.log(meucarro.marca);