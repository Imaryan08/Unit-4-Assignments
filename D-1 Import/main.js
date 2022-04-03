const add = require('./add.js');
const subtract = require('./subtract.js');
const multiply = require('./multiply.js');
const divide = require('./divide.js');

// console.log(`Add: ${add(5,5)}`);
// console.log(`Subtract: ${subtract(5,5)}`);
// console.log(`Multiply: ${multiply(5,5)}`);
// console.log(`Divide: ${divide(5,5)}`);


// sum of 5 and 10 is 15.
// let [a,b] = [5,10];
// console.log(`Sum of ${a} and ${b} are ${add(a,b)}`)

let [a,b] = [5,10];

console.log(multiply(a,b));
console.log(add(a,b));
console.log(subtract(a,b));
console.log(divide(a,b));
