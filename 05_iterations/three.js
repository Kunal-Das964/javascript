// Array's loop
// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('IN', "India")
map.set('Fr', "France")

// console.log(map);


for (const [key,value] of map) {
    // console.log(key, ':-',value);
    
}

// const myObject ={
//     'Game1': "NFS",
//     'Game2': "spiderman",
// }

// for (const [key] of myObject) {
//     // console.log(key, ':-',value);   
// }