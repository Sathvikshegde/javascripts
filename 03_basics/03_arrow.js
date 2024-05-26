const user={
    username:"hitesh",
    price:100,
    welcomemessage: function()
    {
        //console.log(`${this.username} welcome to my website`);
        //console.log(this);
    }
}
user.welcomemessage()

user.username="sam"
user.welcomemessage()


//console.log(this);

function chai()
{
    let usename="hitesh"
    console.log(this.usename);
}
chai()

const code=function()
{
      let usrname="hitsh"
    console.log(this.usrname);
}
code()

// arrow function
const cvraman=() => {
    let usersname="hitesh"
    console.log(this.usersname);
}
cvraman()


const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));


const addone=(num1,num2) => (num1+num2)
console.log(addone(3,4));

const addwne=(num1,num2) => ({username:"hitesh"})
console.log(addone(3,4));