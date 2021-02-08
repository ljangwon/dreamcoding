// Array 🎉

function log(message) {
    console.log(message);
}

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍎', '🍌'];
log(fruits);

// 3. Looping over an array
// print all fruits
// a. for
for( let i=0; i< fruits.length ; i++){
    log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    log(fruit);
}
console.clear();
// c. forEach
fruits.forEach( (fruit, index, array) =>  console.log( fruit, index) );

// d. Addition, deletion, copy
// push: add and item to the end
fruits.push('🍒', '🍓');
log(fruits);
// pop: remove and item from the end
fruits.pop();
fruits.pop();
log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍋');
log(fruits);

// shift: remove an item from the beginning
fruits.shift();
log(fruits);

// note!! shift, usnshift are slower than push, pop 
// splice: remove an item by index position
fruits.splice(1, 1);

fruits.push('🍒', '🍓');
log(fruits);

fruits.splice(1,1, '🍈', '🥕');

// combine two arrays
const fruit2 = ['🍑', '🍆'];
const newfruits = fruits.concat( fruits) ;
log(newfruits);

// find the index
// search
console.clear();
log(fruits);
log(fruits.indexOf('🍓'));

// includes
log(fruits.includes('🍓'));

// lastIndexOf
log(fruits);
fruits.push('🍓');
log(fruits);
log(fruits.lastIndexOf('🍓') );


