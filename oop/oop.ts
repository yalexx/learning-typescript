console.log('Hello');

// Class Person

class Person {
    public name: string;
    public surname: string;
    public email: Email;

    constructor(name: string, surname: string, email: Email) {
        this.name = name;
        this.surname = surname;
        this.email = email;


    }

    getEmail() {
        return this.email.get();
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