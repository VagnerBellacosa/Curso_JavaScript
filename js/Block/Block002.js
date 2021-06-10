// Com let e const
// Por contraste, variáveis declaradas com let e const tem escopo bloqueado:

let x = 1; {
    let x = 2;
}

console.log(x); // imprime 1 1