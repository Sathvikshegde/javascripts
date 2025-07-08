const user = {
    username:"hitesh",
    logincount:8,
    signedin:true,
    getuserdetails : function(){
        console.log("Got user details from dataabase");
        
    }
}

console.log(user.username);

console.log(user.getuserdetails());