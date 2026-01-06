//Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2026, 0, 26,)
//let myCreatedDate = new Date(2026, 0 ,26, 5, 4)
//let myCreatedDate = new Date("2026-01-15")
let myCreatedDate = new Date("01-14-2026")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamo = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} amd the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})









