const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mynumbers.map( (num) => {return num + 10} )

// console.log(newNums);


// const renew = [] 
// mynumbers.forEach( (num) => {
//     if (num > 0) {
//         renew.push(num + 10)      
//     }
// } )

// console.log(renew);

const newNums = mynumbers
.map( (num) => num*10 )
.map( (num)  => num + 1)
.filter( (num) => num >= 40 )

console.log(newNums);