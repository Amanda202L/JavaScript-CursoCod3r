let value; // uninitialized
console.log(value);

value = null; // without a value
console.log(value);

 /*console.log(value.toString()) 
 * TypeError: Cannot read property 'toString' of null */

const prod = {};
console.log(prod.price);
console.log(prod); 

prod.price = 3.50;
console.log(prod); 

prod.price = undefined; // don't use undefined, switch by 0 or null.
console.log(!!prod.price);
//delete prod.price; 
console.log(prod);   

prod.price = null; // without a price
console.log(!!prod.price);
console.log(prod);