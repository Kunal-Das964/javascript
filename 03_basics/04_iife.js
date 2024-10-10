// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// ()//fisrt parenthesis where we define function 
// ()//second paranthesis is for execution

// why we use iife because 1. it wnat to execute immediately 2.it doesn't polluted by global variables

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("kunal");