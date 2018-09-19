// Object destructuring
const person = {
    name: 'rene',
    age: 46,
    location: {
        city: 'East Windsor',
        temp: 78
    }
};

//defautl created as anonymous
const {name: firstName = 'Anonymous', age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;

if (city && temperature){
    console.log(`It's ${temperature} in ${city}.`)
    }

//equivalent 

if (person.location.city && person.location.temp){
console.log(`It's ${person.location.temp} in ${person.location.city}.`)
}

//Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147'];

const [, city1, state] = address; //skip but keep comma on items not interested in destructuring

console.log(`You are in ${city1} ${state}.`);

//challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product,smallprice,mediumprice,largeprice] = item;


console.log(`A medium ${product} cost ${mediumprice}`);
