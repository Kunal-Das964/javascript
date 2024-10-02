const score = 400; // in this here 400 is of number type and here it is automatcalliy take ir as a number.
// console.log(score);


const balance = new Number(100); // in this 100 is also of a number type but here we can define that 100 is a number
// console.log(balance);   
// console.log(typeof(balance));   

// console.log(balance.toString().length);// this is the number's method 
// console.log(balance.toFixed(1));// this is the number's method 


const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // this is the number's method 


const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // this is the number's method 
// console.log(hundreds.toLocaleString('en-IN')); // this is the number's method 

// console.log(Number.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.NaN);
// console.log(Number.POSITIVE_INFINITY);

//***************************** Maths***********************

console.log(Math); // properties of maths in js
console.log(Math.E); //Properties of maths in js and give euler's number
console.log(Math.LN10); //Properties of maths in js and give ln of 10
console.log(Math.LN2); //Properties of maths in js and give ln of 2
console.log(Math.LOG10E); //Properties of maths in js and give base 10 log of E
console.log(Math.LOG2E); //Properties of maths in js and give base 2 log of E
console.log(Math.PI); //Properties of maths in js and give value of PI(3.14...)
console.log(Math.SQRT1_2); //Properties of maths in js and give squareroot of 1/2
console.log(Math.SQRT2); //Properties of maths in js and give squareroot of 2
// console.log(Math.abs(-4)); //math function of maths in js
// console.log(Math.round(4.6)); //math function of maths in js
// console.log(Math.ceil(4.2)); //math function of maths in js
// console.log(Math.floor(4.9)); //math function of maths in js
// console.log(Math.min(4,5,5,26,6)); //math function of maths in js
// console.log(Math.max(4,5,5,26,6)); //math function of maths in js


// console.log((Math.random()*10) + 1); //method of maths in js

const min = 1;
const max = 6;
// console.log(Math.floor(Math.random() * (max -min +1)) + min) //method of maths in js

