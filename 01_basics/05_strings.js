const name = "kunal"
const repoCount = 1

console.log(name + repoCount + " value"); // not use in modern world 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern way to write string concatnation called sting interpolation

const gameName = new String('kunalkd') // another way to define string

//these are the string method

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);





