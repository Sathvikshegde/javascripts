const username=[]

if(username)
    {
        console.log("have user name");
    }
    else
    {
        console.log("dont have username");
    }

//falsy values

//false,0,-0,Bigint,0n,",null",undefined,NaN

//truthy values

//"0","false"," ",[],{},function(){}

if (username.length===0) {
    console.log("Array is empty");
    
}

const emptyobj={}

if (Object.keys(emptyobj).length===0) {
    console.log("Object is empty");
}

// Nullish coalescing operator
let val1;
val1=5 ?? 10
val1=null ?? 10
val1=undefined ?? 10
val1=60?? 5 ?? 10
//console.log(val1);

//ternary operator
