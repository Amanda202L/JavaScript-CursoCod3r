Number.prototype.between = function(start, end) {
    return this >= start && this <= end
};

const printResult = function(note) {
    if (note.between(9.0, 10)) {
        console.log('Great!') 
    } else if (note.between(7.0, 8.9)) {
        console.log('Approved')
    } else if (note.between(4.0, 6.9)) {
        console.log('Recovery')
    } else if (note.between(0, 3.9)) {
        console.log('Disapproved!')
    } else {
        console.log('Error!')
    }
};

printResult(10);
printResult(8.5);
printResult(5);
printResult(3.5);
printResult(-1);