// displaying array elements
valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

// adding elements in an array
valores[4] = 10;
console.log(valores);
console.log(valores.length);// 

// adding elements of other types in an array (avoid this)
valores.push({id:3}, false, null, 'shit');
console.log(valores);

// some ways to delete an array elements
(valores.pop());
delete valores[0];
console.log(valores);

// in javascript, array is treat like an object
console.log(typeof valores);
console.log(typeof valores.length);
