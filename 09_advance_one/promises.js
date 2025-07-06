const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async executed');
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
    
})


const Promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai#example.com"})
    },1000)
})

Promisetwo.then(function(user){
console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:"hitesh",password:"123"});
        }
        else{
            reject("ERROR: Something went wrong")
            
        }
    },1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("the promise is either rejcted or resolved")
)


const promisefive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:"javascript",password:"123"});
        }
        else{
            reject("ERROR: js went wrong")
            
        }
    },1000)
})

async function consume(){
    try{
        const response = await promisefive
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
}
consume()

async function getAllusers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
         
    }catch(error)
    {
        console.log("E:",error);
        
    }

}
getAllusers()