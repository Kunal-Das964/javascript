const promiseOne = new Promise(function(resolve,reject){
    //DO async task
    // DB call, cryptography, network
    setTimeout(function(){
        console.log("promise is complete");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise is consumed");    
});


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 is complete");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 is async");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "kunal", email: "kunal@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "ajeet",email: "ajeet@example.com"})
        }else{
            reject("ERROR: something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);    
}).catch((err) => {
    console.log(err);    
}).finally(() => console.log("Here your promise either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript",email: "ajeet@example.com"})
        }else{
            reject("ERROR: javascipt went wrong")
        }
    },1000)
})

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
// }

// getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((err) => console.log(err))