function Person() {
    // O contrutor Person() define `this` como uma instância dele mesmo.
    this.age = 0;

    setInterval(function growUp() {
        // Em modo não estrito, a função growUp() define `this`
        // como o objeto global (porque é onde growUp() é executado.),
        // que é diferente ao `this`
        // definido pelo construtor Person().
        this.age++;
    }, 1000);
}

var p = new Person();