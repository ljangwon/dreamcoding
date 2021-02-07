'use strict';
// object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. class declarations
function log( message ){
    console.log( message);
} 


class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        log(`${this.name}: hello!`);
    }
}

const jake = new Person('Jake', 44);
log(jake.name);
log(jake.age);
jake.speak();

// 2. Getter and setters
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //    throw Error('age can not be negative');
        //}
        this._age = value < 0 ? 0 : value; 
    }
}

const user1 = new User('Steve', 'Job', -1);
log(user1.age);

// 3. fields (public, private)
// too soon
// https://developer.mozila.org/en-US/docs/Web/Javascript/Referenc
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
log(experiment.publicField);
log(experiment.privateField);

// 4. Static properties and methods
// Too soon
class Article  {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        log(' triange red ');
    }
    getArea() {
        return (this.width*this.height) /2 ;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
log(triangle.getArea());

// 6. Class checking: instanceof
log(rectangle instanceof Rectangle);
log(triangle instanceof Rectangle);
log(triangle instanceof Triangle);
log(triangle instanceof Shape);
log(triangle instanceof Object);
log(triangle.toString());


// fun quiz time 
// function calculate( command, a, b )
// command: add, substract, divide, multiply, remainder

function calculate( command, a, b ) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a-b;
        case 'divid':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unknown command');
    }
}

log(calculate( 'multiply', 4, 6));
log(calculate( 'divid', 4, 6));