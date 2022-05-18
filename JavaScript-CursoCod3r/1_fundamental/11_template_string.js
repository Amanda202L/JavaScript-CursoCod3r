// Now, we will take a look at a very useful feature, 'Template String'!

const name = 'Amanda';
const concat = `Hi There ${name}!`;
const template = `
    Hi
    ${name}!`;

console.log(concat, template); 
console.log(`1 + 1 = ${1 + 1 }`);   

const up = stringM => stringM.toUpperCase(); 
console.log(`Hey...  ${up('caution')}!`);
