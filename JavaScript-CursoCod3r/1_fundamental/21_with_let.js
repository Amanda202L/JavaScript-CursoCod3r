// About 'let' : is a global scope, local scope or can be a block
let number = 1;
{
    let number = 2;
    console.log(number, 'inside');
}
console.log(number, 'out');

