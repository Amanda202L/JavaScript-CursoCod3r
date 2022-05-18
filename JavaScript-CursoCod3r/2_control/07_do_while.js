function getRandNumber(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
};

let option = -1;

do {
    option = getRandNumber(-1, 10)
    console.log(`Your choice was ${option}.`)
} while(option != -1)


console.log('Finished.')