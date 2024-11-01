const user = {
    username : "kunal",
    loginCount : 8,
    signedIn : true,

    getUserDetail: function(){
            // console.log("Got user detail from database");
            // console.log(`Username: ${this.username}`);
            // console.log(this);
            
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this 
}

const userOne = new User("kunal",12,true)
const userTwo = new User("chaiAurCode",2,false)
console.log(userOne.constructor);
// console.log(userTwo);


// when we use new keyword:-

//1.a new object created
//2.a consturctor function call because of new keyword. It packed all the argument and give it to you
//3.now this keyword is injected in that constructor
//4.at last all the argument is accessable