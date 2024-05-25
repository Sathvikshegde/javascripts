const mySyn=Symbol("key1")

const JUser={
    name:"hithesh",
    age:18,
    "fullname":"Hitesh Choudhary",
    [mySyn]:"mykey1",
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLogginDays:["Monday","Saturday"]

}
console.log(JUser.email);
console.log(JUser["email"]);
console.log(JUser["fullname"]);
console.log(JUser[mySyn]);
console.log(typeof mySyn);

JUser.email="hitesh@chatgpt.com"
JUser.email="hitesh#microsoft.com"

console.log(JUser);

JUser.greeting = function(){
    console.log("hello js user");
}
JUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JUser.greeting());
console.log(JUser.greetingTwo());