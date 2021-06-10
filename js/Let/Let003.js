// Você pode encontrar erros em instruções switch porque existe apenas um bloco subjacente.

switch (x) {
    case 0:
        let foo;
        break;

    case 1:
        let foo; // TypeError para a redeclaração.
        break;
}