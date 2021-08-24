// parseFloat retornando um número
// O exemplo a seguir sempre retorna 3.14

parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14more non-digit characters");

// parseFloat retornando NaN
// O exemplo a seguir retorna NaN

parseFloat("FF2");