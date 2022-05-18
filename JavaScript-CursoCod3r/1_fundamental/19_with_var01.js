// Another short code only to uderstand more about scope local/global.
// Testing with 'Var':

{
    {
        {
            {
                var would = 'Would?';
            }
        }
    }
}
console.log(would);

function test() {
    var local = 123
    console.log(local)
}

// console.log(local); 

test();
