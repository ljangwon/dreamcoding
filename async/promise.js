'use strict'

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs  Consumer

// 1. Producer
// when new Promise is created, the executer runs automatically.
const promise = new Promise( (resolve, reject) => {
    // doing some heavy work (network, read files)
    log('doing something...');
    setTimeout( ()=>{
        resolve('ellie');
    //reject( new Error('no network'));
    }, 2000 );

});

// 2. Consumers: then, catch, finally
promise
.then( (value) => {
    log(value);
})
.catch( error => {
    log(error);
})
.finally( () => { 
    log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise( (resolve, reject) => {
    setTimeout( () => resolve(1), 1000 );
});

fetchNumber
.then( num => num * 2)
.then( num => num * 3 )
.then( num => {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> resolve(num-1), 1000);
    });
})
.then( num => log(num) );


// 4. Error handing
const getHen = () =>
    new Promise( (resolve, reject) => {
        setTimeout( () => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise( (resolve, reject) => {
        setTimeout( () => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise( ( resolve, reject) => {
        setTimeout( () => resolve(`${egg} => 🍛`), 1000);
    });

/*
getHen()
.then(hen => getEgg(hen) )
.catch( error => {
    return '🥖';
})
.then(egg => cook(egg))
.then(meal => log(meal));
*/

getHen()//
.then(getEgg)
.catch( error => {
    return '🥖';
})
.then(cook)
.then(log)
.catch(log);
