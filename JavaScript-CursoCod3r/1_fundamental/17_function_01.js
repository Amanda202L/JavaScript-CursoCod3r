// Functions can return a value, but also may not have a return, lets see how that works

// Function without return
function showAdd(a, b)  {
    console.log(a + b)
};
showAdd(2, 3); 
showAdd(2); 
showAdd(2, 10, 4, 5, 6, 7, 8); showAdd(2, 3); 
showAdd();

// Function with return
function add(a, b = 1) {
    return a + b
}; 
console.log(add(2, 3));
console.log(add(2));
console.log(add());