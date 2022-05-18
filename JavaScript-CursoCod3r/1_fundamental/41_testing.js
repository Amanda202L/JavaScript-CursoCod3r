/* WARNING(AGAIN):
* KEEP THIS CLEAN, AGAIN.
* (and out of global scope, please);
*/

let a = 3;

global.a = 123;

this.c = 456;
this.d = false;
this.e = 'testing';

console.log(a);
console.log(global.a);
console.log(this.c)
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// variables created in insane way

abc = 3; // please, don't do this.
console.log(abc); 

// module.exports = { e: 456, f: false, g: test };
