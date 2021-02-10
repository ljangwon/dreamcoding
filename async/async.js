// async & await  syntatic sugar
// clear style of using promise :)


// 1. async
function fetchUser1() {
    return new Promise( (resolve, reject) => {
        return resolve('ellie');
    } );
}

const user1 = fetchUser1();
console.log(user1);


// 1. async
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(log);
log(user);


// 2. await
function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

/*
function pickFruits() {
    return getApple().then( apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
*/

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all( [getApple(), getBanana()])
    .then(fruits => fruits.join(' ++ ' ));
}

pickAllFruits().then(log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(log);