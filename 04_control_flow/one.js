const temperature=40
if(temperature===41)
    {
        console.log("temperature is less than 50");
    }
    else{
        console.log("temperature is more then 50");
    }
console.log("Executed");
/*
const score=200
if(score>100)
    {
        let power="fly"
        console.log(`Userpower:${power}`);
    }
    console.log(`Userpower:${power}`);*/

// const balance=1000
// //if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less the 500");
// }
// else if(balance<750)
//     {
//         console.log("less the 750");
// }
// else if(balance <900){
//     console.log("less then 900");
// }
// else{
//     console.log("less then 1200");
// }
    
const debitcard=true
const userloggedin=true
const loggedingoogle=true
const loggedinemail=false
if(debitcard && userloggedin)
    {
        console.log("Allow to purchase");
    }

if(loggedingoogle || loggedinemail)
    console.log("allow");