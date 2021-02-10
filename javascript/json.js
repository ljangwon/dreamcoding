//JSON
//Javascript Object Notation

function log(message) {
    console.log( message );
}

// 1. Object to JSON
//stringfy(obj)

let json = JSON.stringify(true);
log(json);
json = JSON.stringify(['apple', 'banana']);
log(json);

const rabbit  = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate : new Date(),
    jump: () => {
        console.log( `${rabbit.name} can jump!` );
    },
};

json = JSON.stringify(rabbit);
log(json);

json = JSON.stringify(rabbit, ['name', 'color'])
log(json);

json = JSON.stringify(rabbit, (key, value) => {
    log( `key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; 
});


// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    log( `key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

log(obj);
rabbit.jump();
//obj.jump();

log( rabbit.birthDate.getDate());

log( obj.birthDate.getDate());

// JSON Diff jsondiff.com
// JSON Beautifier    
// JSON Parser  
// JSON Validator 


