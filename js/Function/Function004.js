function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| corretamente se refere ao objeto Person
    }, 1000);
}

var p = new Person();