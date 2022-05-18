function purchase(work1, work2) {
    const buyIceCream = work1 || work2
    const buyTv50 = work1 && work2
    //const buyTv32 = !!(work1 ^ work2) // <- bitwise xor
    const buyTv32 = work1 != work2
    const healthy = !buyIceCream // <- unary operator 
    
    return { buyIceCream, buyTv50, buyTv32, healthy }
};

console.log(purchase(true, true));
console.log(purchase(true, false));
console.log(purchase(false, true));
console.log(purchase(false, false));




