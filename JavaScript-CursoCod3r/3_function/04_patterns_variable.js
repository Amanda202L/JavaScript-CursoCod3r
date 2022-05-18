function add(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
};

console.log(add(), add(3), add(1, 2, 3), add(0, 0, 0));

function add2(a, b, c) {
   a = a !== undefined ? a : 1
   b = 1 in arguments ? b : 1
   c = isNaN(c) ? 1 : c
   return a + b + c
};

console.log(add2(), add2(3), add2(1, 2, 3), add2(0, 0, 0));