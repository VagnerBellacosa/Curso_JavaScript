var Ct_Total = 0;
var Fl_Stop = true;

while (Fl_Stop) {

    let valor1 = parseInt(gets(), 10);

    if ((valor1 == null) || (isNaN(valor1))) {

        Fl_Stop = false;

    } else {

        if (valor1 > 0) {
            Ct_Total++;
        }
    }

}

console.log(Ct_Total + " valores positivos");