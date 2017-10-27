// Generics

function identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}

console.log(identity<string>("Hello"));


// Functions with callbacks

function boFunc(): void {
    console.log('Bo func');
}

function someFunc(bo: () => void): void {
    console.log('Some Func');
    bo();
}

someFunc(boFunc);

// This inside arrow function

class Person {
    private name = 'Yanko';

    public sayHello() {
        setTimeout(function () {
            console.log(`Hello ${this.name}`); // <- this is inside function !
        }, 1000);
    }

    public sayHelloProper() {
        setTimeout(() => {
            console.log(`Hello ${this.name}`); // <- Now is ok.
        }, 1000);
    }
}

