function rand([ min = 0, max = 1000 ]) {
    if (min > max) [max, min] = [min, max]
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
};

console.log(rand([50, 40]));
console.log(rand([995]));
console.log(rand([, 10]));
console.log(rand([]));
//console.log(rand());