function minhaFuncao(objeto) {
  objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = meucarro.make;     // x recebe o valor "Honda"

minhaFuncao(meucarro);
y = meucarro.make;     // y recebe o valor "Toyota"
                    // (a propriedade make foi alterada pela função)


