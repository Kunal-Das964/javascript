// if 

const isUserLoggedIn = true
const temperature = 41

// if ( temperature < 50) {
//      console.log("less than 50");
         
// }else {
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, ===, !=, !==

// 


//shorthand notation using implicent scope

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else if (balance < 1200) {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("allow to buy course");
// }
if (userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}

