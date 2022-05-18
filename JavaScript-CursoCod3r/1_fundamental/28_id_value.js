    const greetings = 'Whats up?'; // lexicon context 1

    function exec() {
        const greetings = 'Heey there!' // lexicon context 2
        return greetings
    }

    // objects are like nested groups made by a pair of key/value
    const client = {
        name: 'Amanda',
        age: 19,
        weight: 42,  
        address: {
            street: '5th Avenue, NYC',
            number: 420
        }
    }
    console.log(greetings);
    console.log(client.name);
    console.log(exec(), client.name);
    console.log(client.name, greetings);    
    console.log(client.name, "it's living on ", client.address);