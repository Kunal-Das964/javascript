// Arrays

const myArr =[1, 2, 3, 4, 5] // type to write an array
const myHeros = ["ironmsn","hulk"] // type o=to write an array 

const myArr2 = new Array(1, 2, 3, 4) // type to write an array which is of type object 
// console.log(myArr[0]);

// array methods

// myArr.push(6) // this method add the give data to the array at the end  
// myArr.push(7) // this method add the give data to the array at the end 
// myArr.pop() // this method delete the last data from the array

// myArr.unshift(5) // this method add the data in the starting of an array
// myArr.shift() //this method delete teh first data from the array

// console.log(myArr);

// console.log(myArr.includes(9)); // this method tells that the provided data is in the array or not 
// console.log(myArr.indexOf(3)); // thid method show the index of the given data

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice and splice method

// console.log("A", myArr);

const myn1 = myArr.slice(1,3) // this method don't change the array and give the array part which is given to that with range of last-1

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3) // // this method change the array by cuuting the part which is removed from them and give the array part which is given to that with range of lastindex
// console.log("C", myArr);
// console.log(myn2);
