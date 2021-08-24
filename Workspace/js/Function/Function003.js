function Person() {
    var that = this;
    that.age = 0;

    setInterval(function growUp() {
        // A chamada a função refere à variáevel `that` da qual
        // o valor é o objeto esperado.
        that.age++;
    }, 1000);
}