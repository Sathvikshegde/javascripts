//defination

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName()


function addTwoNumbers(number1,number2)
{
    console.log(number1+number2);
}
addTwoNumbers(3,4);

function addTwoNum(num1,num2)
{
    return num1+num2;
}
const result=addTwoNum(4,4)
console.log("Result:",result);


function userLoggedIn(username)
{
    if(username===undefined)
        {
            console.log("Please enter the username");
            return;
        }
        return `${username} just logged in`;
}
console.log(userLoggedIn("hitesh"));