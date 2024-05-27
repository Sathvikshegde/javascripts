(function chai(){

    // named IIFE
    console.log("DB CONNECTED");
})();

//arrow functions

(  ()=>{
    // UNNAMED IIFE
    console.log(`DB CONNECTED`);
})(); 

( (name)=>{
    console.log(`DB CONNECTED  ${name}`);
})('hitesh');