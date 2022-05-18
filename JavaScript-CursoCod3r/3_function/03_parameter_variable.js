function add() {
    let add = 0 
    for(i in arguments) {
        add += arguments[i]
    } 
        return add
};

console.log(add());
console.log(add(1));
console.log(add(1.1, 2.2, 3.3));
console.log(add(1.1, 2.2, 'testing'));
console.log(add('a', 'b', 'c'));