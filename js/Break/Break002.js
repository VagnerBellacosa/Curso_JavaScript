// O código a seguir possui o comando break dentro de uma estrutura nomeada.
// O comando break deverá estar dentro da estrutura na qual o label se refere. Veja que 
// inner_block está dentro de outer_block.

bloco_externo: {

    bloco_interno: {
        console.log('1');
        break bloco_externo; // encerra bloco_interno e bloco_externok
        console.log(':-('); // não é executado
    }

    console.log('2'); // não é executado
}