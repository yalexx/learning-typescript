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