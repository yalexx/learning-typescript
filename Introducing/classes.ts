// Optional Static Types

var counter; // (any) type
var counter1 = 0; // number (inferred)
var counter2: number; // number
var counter3: number = 0; // number

// Boolean

var isDone: boolean = false;

// Number

var height: number = 6;

// String

var name1: string = 'Yanko';

// Array

var list: number[] = [1, 2, 3];

var notSure: any = 4;
notSure = 'Can be string';
notSure = 1;

// Void

function wantUser(someFunc: () => {}): void {
}

// Typeof

var x: any = {};
if (typeof x === 'string') {

}

