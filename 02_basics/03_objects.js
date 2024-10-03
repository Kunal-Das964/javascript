// singleton
// Object.create// way to define an object which is a singleton

// object literals 

// const mySym = Symbol ("key1")

// const JsUser = {
//     name :"kunal",
//     [mySym] : "mykey1",
//     age : 21,
//     lacation :"gkp",
//     email : "kunal@abc.com",
//     isLoggedIn : false,
//     lastLogininDays: ["monday","saturday"]
// }// define an object

// console.log(JsUser.email);// access any key from object by method type
// console.log(JsUser["email"]);// access any key from object by brackets type
// console.log(JsUser[mySym]);// when need to define a symbol in an object

// JsUser.email = "kunaldas@google.com"// change any object's key's value
// Object.freeze(JsUser)// freeze any object so no one can change the key's value
// JsUser.email = "kunaldas@chatgpt.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hello JS user ");
    
// }// giving function as a key in object 
// JsUser.greetingTwo = function(){
//     console.log(`hello JS user, ${this.name}`);
    
// } // another function in object but by access it keys in the form of string interpolation

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
