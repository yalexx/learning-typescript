// Classes
var Character = (function () {
    function Character(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
    Character.prototype.sayHello = function (name) {
        if (name) {
            console.log("Hi " + name + " ! my name is: " + this.fullName);
        }
        else {
            console.log("Hi my name is: " + this.fullName);
        }
        return this;
    };
    Character.prototype.sayHi = function () {
        console.log(' Brum, Brum');
    };
    return Character;
}());
var myCharacter = new Character('Ivan', 'Petkanov');
myCharacter.sayHello('Yanko').sayHi();
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        console.log(arg);
    };
    return Logger;
}());
var myLog = new Logger();
myLog.log('Hello Logger');
var userObject = {
    name: 'Yanko',
    age: 12
};
var Geometry;
(function (Geometry) {
    var Vector2d = (function () {
        function Vector2d() {
        }
        return Vector2d;
    }());
    Geometry.Vector2d = Vector2d;
})(Geometry || (Geometry = {}));
var vector2instance = new Geometry.Vector2d();
