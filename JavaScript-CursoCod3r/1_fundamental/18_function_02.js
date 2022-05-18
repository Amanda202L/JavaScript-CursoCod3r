// storing a function in a var/const
const showAdd = function (a, b) {
    console.log(a + b)
};
showAdd(2, 3);


// storing a arrow function in var/const;
const add = (a, b) => {
    return a + b 
};
console.log(add(2,3));

// implicit return (syntax reduced)
const sub = (a, b) => a - b;
console.log(sub(2, 3));

// another way more reduced
const show2 = a => console.log(a);
show2(2022);



