const score = 400; // in this here 400 is of number type and here it is automatcalliy take ir as a number.
// console.log(score);


const balance =new Number (100); // in this 100 is also of a number type but here we can define that 100 is a number
// console.log(balance);
// console.log(balance.toString().length);// this is the number's method 
// console.log(balance.toFixed(1));// this is the number's method 


const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // this is the number's method 


const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // this is the number's method 
// console.log(hundreds.toLocaleString('en-IN')); // this is the number's method 

//***************************** Maths***********************

// console.log(Math); // properties of maths in js
// console.log(Math.abs(-4)); //method of maths in js 
// console.log(Math.round(4.6)); //method of maths in js
// console.log(Math.ceil(4.2)); //method of maths in js
// console.log(Math.floor(4.9)); //method of maths in js
// console.log(Math.min(4,5,5,26,6)); //method of maths in js
// console.log(Math.max(4,5,5,26,6)); //method of maths in js

// console.log((Math.random()*10) + 1); //method of maths in js

const min = 1;
const max = 6;
// console.log(Math.floor(Math.random() * (max -min +1)) + min) //method of maths in js

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);