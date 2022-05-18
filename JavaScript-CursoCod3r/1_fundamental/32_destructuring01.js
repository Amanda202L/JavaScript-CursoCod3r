// ES2015 new resource

const person = {
    name: 'Anne',
    age: 10, 
    address: {
        street: 'speedlines',
        number: 2002,
        }
};

const { name, age } = person;
console.log( name, age );

const { name: nm, age: ag } = person;
console.log(nm, ag);

const { middleName, city = true } = person;
console.log(middleName, city);

const { address: {  street, number, zipcode  } } = person;
console.log(street, number, zipcode);

//const { account: {agc, num } } = person;
//console.log(account,agc, num);