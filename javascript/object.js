// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value};

const name = 'jake';
const age = 4;

//

function log( message ) {
    console.log( message);
}
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax


function print( person) {
    log(person.name);
    log(person.age);
}

const jake = { name: 'jake', age: 4};
print(jake);

// with JavaScript magic (dynamically typed language)
// can add properties later
jake.hasJob = true;
log(jake.hasJob);


// can delete properties later

delete jake.hasJob;

log(jake.hasJob);

// 2. Computed properties
log(jake.name);
log(jake['name']);
jake['hasJob'] = true;
log(jake.hasJob);

function printValue(obj, key ) {
    log(obj[key]);
}
printValue(jake, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age:2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { naem: 'dave', age:4 };
const person4 = Person('jake', 30);

function Person( name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator : property existence check (key in obj)
log('name' in jake);
log('age' in jake);

// 6. for .. in vs for .. of
// for (key in obj)
console.clear();
for(key in jake) {
    log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for ( let i =0; i<array.length ; i++) {
    log(array[i]);
}

for (value of array) {
    log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj2, obj2, obj3...])
const user = { name: 'jake', age: 20};
const user2 = user;

user2.name = 'coder';
log(user);

// old way
const user3 = {};
for(key in user ) {
    user3[key] = user[key];
}

log(user3);

const user4 ={};

Object.assign(user4, user);
log(user4);

const user5 = Object.assign({}, user);
log(user5);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
log(mixed.color);
log(mixed.size);