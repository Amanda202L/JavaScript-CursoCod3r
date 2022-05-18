// Function in JS are First-Class Object or (Citizens); 
// Higher-order function
 
// created literal way
function funny1() {
};

// storing var/const in function
 const funny2 = function () { 
 };

// storing on array
const array = [function(a, b) {return a + b }, funny1, funny2]
console.log(array[0](2, 3));

// storing on a object's atribute
const obj = {}
obj.speak = function() { return 'Hey!'}
console.log(obj.speak());

// to pass function like parameter 
 function run(funny3) {
    funny3
 };

 run(function() { console.log('Running...') });

// an function can return/storing other fuction
function add(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
};

add(2, 3)(4);
const addFive = add(2, 3)
addFive(4);

