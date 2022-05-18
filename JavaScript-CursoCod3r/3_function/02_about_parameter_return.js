function area(height, width) {
    const area = height * width
    if(area > 20) {
        console.log(`Above value allowed: ${area}m2º.`)
    } else {
        return area
    }
};

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 17, 22, 44));
console.log(area(5, 5));
