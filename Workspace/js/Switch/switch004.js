// Multi-Caso - Operação Simples
// Esse método toma vantagem do fato de não existir um break após um case e irá continuara 
//  executar o próximo case independentemente se o case corresponde ao critério. 
// Veja o título desta seção "O que acontece se eu esquecer um break?"
//
// Esse é um exemplo de uma operação sequencial simples com a instrução switch, onde quatro 
// valores diferentes fazem a mesma coisa..



var Animal = 'Girafa';
switch (Animal) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Porco':
        alert('Esse animal irá para Arca de Noé');
        break;
    case 'Dinossauro':
    default:
        alert('Esse animal não vai.');
}