const printResult = function(note) {
    if(note >= 7.3) {
        console.log('Approved')
    } else {
        console.log('Disapproved')
    }
};

printResult(9);
printResult(2);
printResult(7.2);