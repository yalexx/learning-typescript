console.log('Hello');

// Class Person

class Person {
    private name: string;
    private surname: string;
    private email: Email;

    constructor(name: string, surname: string, email: Email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    getEmail() {
        return this.email.get();
    }
}

class Teacher extends Person {
    public teach() {
        console.log('Super get parent email from teacher: ', super.getEmail());
        console.log('Hello Noobs, I\'m your Teacher!');
    }
}

class Direktor extends Teacher {
    public sayKur() {
        console.log('Kur !');
    }
}

class Email {
    private re = /\S+@\S+\.\S+/;
    private email: string;

    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error('Invalid email!');
        }
    }

    public validateEmail(email) {
        return this.re.test(email);
    }

    get(): string {
        return this.email;
    }
}

let myEmail = new Email('superactro@gmail.com');
let myPerson = new Person('Yanko', 'Alexandrov', myEmail);

console.log(myPerson.getEmail());


let myTeacher = new Teacher('Dr.', 'House', myEmail);
myTeacher.teach();
myTeacher.getEmail();

let myDirector = new Direktor('Boss', 'Bos', myEmail);
myDirector.sayKur();
myDirector.getEmail();

// Mixins

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}

class Animal {
    eat() {
    }
}

class Mammal1 extends Animal {
    breathe() {

    }
}

class WingedAnimal1 extends Animal {
    fly() {
    }
}

class Mammal extends Animal {
    breathe(): string {
        return "I'm alive!";
    }

    move(): string {
        return "I can move like a mammal!";
    }
}

class WingedAnimal extends Animal {
    fly(): string {
        return "I can fly!";
    }

    move(): string {
        return "I can move like a bird!";
    }
}