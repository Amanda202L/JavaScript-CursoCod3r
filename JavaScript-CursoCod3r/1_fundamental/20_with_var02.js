// About 'var': can be global or function.
var number = 1;

{
    var number = 2;
    console.log(number, 'inside');
}

console.log(number, 'out');
