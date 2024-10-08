


function sayMyName(){
    console.log("K");
console.log("U");
console.log("N");
console.log("A");
console.log("L");
}

// sayMyName//giving the reference of function sayMyName
// sayMyName()//execution of function sayMyName

// function addTwoNumbers(number1,number2){

//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result 
   return number1 + number2
}


// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)
const result = addTwoNumbers(3,5)
// console.log("Result:",result);



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kunal"));

// console.log(loginUserMessage());
// console.log(loginUserMessage("kunal"));

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 200,2312,25,2,52,5,2));

const user ={
    username:"kunal",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price:933
})

const myNewArray = [200,400,600,300]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,400,600,300]));
// console.log(returnSecondValue(myNewArray));
