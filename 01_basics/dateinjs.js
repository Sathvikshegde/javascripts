// Dates

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate=new Date(2024,0,23,5,3)
console.log(myCreatedDate.toLocaleString())

let date=new Date("01-14-2023")
console.log(date.toLocaleString())

// milliseconds

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000));
console.log(Date.now())


//get days and month
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());

// backticks
console.log(`the date is ${newDate.getMonth()+1} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default',{
    weekday:"long"
})