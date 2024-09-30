// Dates

let myDate = new Date();
// console.log(myDate); // giving real time date and time in yyyy-mm-ddTtime format
// console.log(myDate.toString()); // giving real time date and time in (day month date year time coordinates) format
// console.log(myDate.toDateString()); // giving real time date and time in (day month date year) format
// console.log(myDate.toLocaleString()); // giving real time date and time in (mm/dd/yyy, time (AM/PM)) format
// console.log(typeof myDate); // date is a object type in js

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})