// In this class, we practice a little bit the boolean type, making a list of what would 'true' or 'false' in JavaScript.

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('THE TRUE ONE');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('THE FALSE ONE');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('FINISH...');
console.log(!(''|| null || 0 || ' '));

let saymyname = 'Amanda';
console.log(saymyname || 'UNKNOW');
