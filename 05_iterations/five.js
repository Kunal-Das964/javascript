const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )
// coding.forEach( (value) => {
//     console.log(value);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index , arr) => {
//         console.log(item,index,arr);
        
// } )

const myCoding = [
    {
        langugueName : "javascript",
        langugueFile : "js"
    },
    {
        langugueName : "java",
        langugueFile : "java"
    },
    {
        langugueName : "python",
        langugueFile : "py"
    },
    
]

myCoding.forEach( (item) => {
    console.log(item.langugueName);    
} )