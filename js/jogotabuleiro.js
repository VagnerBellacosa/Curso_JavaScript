// var line = gets().split(" ");
var line = [2, 4];

var Ct_TamanhoTabul = parseInt(line[0]);

var Ct_QtdOper = parseInt(line[1]);

// Limita as operacoes
if (Ct_QtdOper > 105) Ct_QtdOper = 105;

var x, x_length = Ct_TamanhoTabul,
    y, y_length = Ct_TamanhoTabul,
    Arr_Tabuleirovalores = [];

// Povoando tabuleiro com zeros
for (x = 0; x < x_length; x++) {
    Arr_Tabuleirovalores[x] = [];
    for (y = 0; y < y_length; y++) {
        Arr_Tabuleirovalores[x][y] = 0
    }
}

console.table(Arr_Tabuleirovalores);
let a;
a = 0;

console.log(Ct_QtdOper);

// efetua todos os movimentos
while (a <= Ct_QtdOper) {

    //    var Ax_Movimentos = gets().split(" ");
    if (a == 0) var Ax_Movimentos = [1, 1, 1];
    else if (a == 1) var Ax_Movimentos = [2, 2, 2];
    else if (a == 2) var Ax_Movimentos = [3, 1];
    else if (a == 3) var Ax_Movimentos = [3, 2];
    // 2 4
    // 1 1 1
    // 2 2 2
    // 3 1
    // 3 2

    var Ct_CodOper = parseInt(Ax_Movimentos[0]);
    var Ct_LinhaColuna = parseInt(Ax_Movimentos[1]);
    var Ct_NumberR = parseInt(Ax_Movimentos[2]);

    if (Ct_NumberR > 50) Ct_NumberR = 50;

    // Verifica o tipo de movimento
    switch (Ct_CodOper) {
        // Popula linha  
        case 1:

            for (y = 0; y < Ct_TamanhoTabul; y++) {
                Arr_Tabuleirovalores[Ct_LinhaColuna][y] = parseInt(Ct_NumberR);
            }
            break;
            // Popula Coluna     
        case 2:

            for (y = 0; y < Ct_TamanhoTabul; y++) {
                Arr_Tabuleirovalores[y][Ct_LinhaColuna] = parseInt(Ct_NumberR);
            }

            break;
            // verifica linha e calcula vencedor    
        case 3:
            var Ct_Maior = 0;

            var innerArrayLength = Arr_Tabuleirovalores[0].length;

            console.log( "innerArrayLength : " + innerArrayLength); 
            console.log( "Ct_Maior : " + Ct_Maior); 

            for (y = 0; y < innerArrayLength; y++) {
                if (Arr_Tabuleirovalores[Ct_LinhaColuna][y] > parseInt(Ct_Maior))
                    Ct_Maior = parseInt(Arr_Tabuleirovalores[Ct_LinhaColuna][y]);
            }

            console.log(Ct_Maior);

            break;
            // verifica coluna e calcula vencedor    
        case 4:
            var Ct_Maior = 0;
            var innerArrayLength = Arr_Tabuleirovalores[0].length;

            for (y = 0; y < Ct_TamanhoTabul; y++) {
                if (Arr_Tabuleirovalores[y][Ct_LinhaColuna] > parseInt(Ct_Maior))
                    Ct_Maior = parseInt(Arr_Tabuleirovalores[y][Ct_LinhaColuna]);
            }
            console.log(Ct_Maior);
            break;
        default:
            console.log("Erro codigo de operacao invalido: " + Ct_CodOper + ".");
    }
    console.log(Arr_Tabuleirovalores);
    a++;
}