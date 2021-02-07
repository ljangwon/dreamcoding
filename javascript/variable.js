//whole-script strict mode syntax
//javascript is very flexible
//flexcible === dangerous
// added ECMAScript 5
'use strict';

//2. Variable , rw(read/write)
// let (added in ES6)

let globalName = 'golobal name';
{
    let name = 'jake';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting ( move declartion from bottom to top)
// has no block scope
console.log(age);
age =4;
console.log(age);
var age;

// 3. constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
//- security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, symbole
// object, box container
// function, first-class function

const count = 17; // iteger
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values:
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12344433243242423423423423n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob }`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value;
const canRead = true;
const test = 3<1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

console.clear();
// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// 5. Dynamic typeing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'/'5';
console.log(`value: ${text}, type: ${typeof text}`);
//onsole.log(text.charAt(0)); // error

// object, real-life object, data structure
const jake = { name: 'jake', age: 44};
jake.age = 43;

console.log(jake);