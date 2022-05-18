    function test1(num) {
        if (num > 7)
            console.log(num)
            console.log('end')
        };

    test1(6);
    test1(8);

    // this next code contains mistake; 

    function test2(num) {
        if (num > 7); // dont use ';' inside of control structure                          
        console.log(num)
    };

    test2(6);
    test2(8);

