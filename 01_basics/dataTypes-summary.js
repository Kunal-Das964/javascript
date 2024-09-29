// Primitive datat type :- this data type are call by its value

// 7 type : - Strings, Number, boolean, Null, Undefined, Symbol,BigInt
//result=datatype

const score = 100; // result=number 
const scoreValue =1000.2; // result=number 
const name = "kunal"; // result=string
const isLoggedIn = false; // result=boolean
const todaysTemp = null; // result=object
let userEmail; // result=undefined 

const id=Symbol('123'); // result=symbol
const anotherId = Symbol('123'); // result=number 

const bigNumber = 1234567891234569871231655487n; // result=bigint

// Reference(Non-Primitive) data types

// Arrays, Objects, Functions

const heros = ["ironman", "Thor", "Hulk"] // result=object

const myObj = {
    name: "kunal",
    age: 22,
    rollno:123
} // result=object
let myFunction = function(){

} // result=object

// console.log(typeof name);
// console.log(typeof isLoggedIn);
// console.log(typeof todaysTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ******************************* Memory **************************************//

//there are two type of memory 

/*Stack:-1.it is used where primitive data types are used
         2.when it is used only the copy of saved variable is available/change will occur in copy of the value
*/

/*Heap:-1.it is used where non primitive data types are used
        2.when it is used the reference or the original of saved variable is available/change will occur in original value
*/

let myYoutubename = "kunaldasdotcom"
let anothername = myYoutubename
anothername = "Ajeetkumardotcom"

console.log(myYoutubename);
console.log(anothername); // stack memory allocation

let user = {
    email:"abc@google.com",
    upi:"kunal@ybl"
}
let user1 =user;
user1.upi = "ajydvusyxvsai@ybl"

console.log(user);
console.log(user1); // heap memory allocation

