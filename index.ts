console.log('Yo');

// Named functions

function greetingsNamed(name: string): string {
    return 'Hello ! ' + name;
}

// Unnamed functions

let greetings = function (name: string) {
    return 'Hi ! ' + name;
};

// Function type

let greetUnnamed: (name: string) => string;
greetUnnamed = function (name: string): string {
    return 'Hello ' + name;
};


// Optional parameters

function add(one: number, two?: number): number {
    let result = one;
    if (two !== undefined) {
        result += two;
    }
    return result;
}

console.log(add(1));

// Rest parameters

function addNum(...foo: number[]): number {

    let result = 0;
    for (let i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}

let res = addNum(2, 3, 4, 5, 4, 3);

function overload(num: number): number;

function overload(num: number): number {
    return 1;
}

// Template strings

let kur = 'Big';
let templateString = `Hello there ${kur}`;
console.log('@The kur: ', templateString);

// Variable goe on top, weird

function someKur() {
    kur = 'kur';
    var kur: string;
    console.log(kur);
}

someKur();

// Global scope vs function scope

var bar = 0; // global

(function () {
    var foo: number = 0; // in scope of this function
    bar = 1; // in global scope
    console.log(bar); // 1
    console.log(foo); // 0
})();

console.log(bar); // 1
// console.log(foo); // error

// Private variables with _

interface IBaiHui {
    readonly _name: string;
    readonly _age: number;
    readonly _kurLength: number;
}

class BaiHui implements IBaiHui {
    readonly _name: string;
    readonly _age: number;
    readonly _kurLength: number;

    constructor(name: string, age: number, kurLength: number) {
        this._name = name;
        this._age = age;
        this._kurLength = kurLength;
    }

    public returnReturn(): string {
        return  `Bai Hui ${this._kurLength.toString()}, santa.`;
    }
}

let baiHui = new BaiHui('BaiHui', 99, 100).returnReturn();
console.log(baiHui);

