const showNote = function(note) {
    switch(Math.floor(note)) {      
    case 1: case 2: case 3:
        console.log('Disapproved!')
        break
    case 4: case 5: case 6:  
        console.log('Recovery')
        break
    case 7: case 8: case 9:
        console.log('Approved')
        break
    case 10: console.log('GREAT!')
        break
    default: console.log('Invalid.')
    }
};

showNote(3.5);
showNote(5);
showNote(7.9);
showNote(9.9);
showNote(10);
showNote(-0);
showNote();