// Classes

class Character {
    private fullName: string;

    constructor(firstName: string, lastName: string) {
        this.fullName = firstName + " " + lastName;
    }

    sayHello(name?: string) {
        if (name) {
            console.log("Hi " + name + " ! my name is: " + this.fullName);
        }
        else {
            console.log("Hi my name is: " + this.fullName);
        }
        return this;
    }

    sayHi(): void {
        console.log(' Brum, Brum');
    }
}

var myCharacter = new Character('Ivan', 'Petkanov');

myCharacter.sayHello('Yanko').sayHi();

// Interfaces

interface LoggerInterface {
    log(arg: any);
}

class Logger implements LoggerInterface {
    log(arg) {
        console.log(arg);
    }
}

let myLog = new Logger();
myLog.log('Hello Logger');

interface UserInterface {
    name: string;
    age: number;
}

let userObject: UserInterface = {
    name: 'Yanko',
    age: 12
};

namespace Geometry {

    export interface VectorInterface {

    }

    export class Vector2d implements VectorInterface {

    }
}

var vector2instance = new Geometry.Vector2d();