// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... retrun;}
// one function === one thing
// nameing: doSomething, command, verb
// e.g. createCarAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log("Hello");
}

printHello();

function log(message) {
    console.log(message);
}

log('Hello@');
log(1234);

// 2. Parameters
// primitive parameter: passed by value
// object parameter: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from='unknown') {

    log(`${message} by ${from}`);
}

showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i=0; i < args.length; i++) {
        log(args[i]);
    }

    for ( const arg of args ) {
        log(arg);
    }

    args.forEach( (arg) => log(arg) );
}

printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    log(message); // local variable
    log(globalMessage);
}

printMessage();

// 6. Return a value
function sum(a, b) {
     return a+b ;
}
const result = sum(1,2); //3
log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point >10 ) {
        // log upgrade logic ...
    }
}
// good
function upgradeUser(user) {
    if (user.point <=10 ) {
        return;
    }
    // log upgrade logic ...
}


// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. function expression
// a function declaration cn be called earlier than it is defined.(hoisted)
// a function expression is created when the execution reaches it.

const print = function() { //annoymous function
    log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
log(sumAgain(1,3));

// 2. callback function using function expression
function randomQuiz( answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    log('Yes');
};

// named function
// better debugging in debugger's stack traces
// recursions

const printNo = function print() {
    log('No');
};

randomQuiz('wrong', printYes, printNo );
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {
    log('simplePrint!');
};

const simplePrint2 = () => log('simplePrint! arrow');
const add = (a,b) => a+b ;
const simpleMultiply = (a,b) => {
    // do something
    return a*b;
};

log( add(3,4));
simplePrint2();

// IIFE: Immediately Invoked Function Expression
(function hello() { 
    log('IIFE');
})();


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