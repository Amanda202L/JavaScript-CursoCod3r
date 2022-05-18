function treatErrorAndThrow(error) { 
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'message'
    
    throw {
        name: error.name,
        message: error.message,
        date: new Date,
        note: 'Come back later, sorry.'
    }
};

function showNameScreamed(obj) {
    try {  
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {   
        treatErrorAndThrow(e)
    }
};

const obj = { named: 'Amanda' };
showNameScreamed(obj);