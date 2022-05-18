function getRandNumber(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
};

let option = 0;

while(option != -1) {
    option = getRandNumber(-1, 10)
    console.log(`Your choice was ${option}.`)
};
console.log('See you next!');