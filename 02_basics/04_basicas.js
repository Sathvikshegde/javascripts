const tindUser=new Object();// single ton object
console.log(tindUser);

//muti ton object

const tinder={}
tinder.name="hitesh"
tinder.id=123
tinder.age=18
console.log(tinder);

const regularUser={
    email:"hitesh@google.com",
    userName : {
        userFullName:{
            firstName:"hitesh",
            lastName:"choudhary"
        }
    }

}
console.log(regularUser.email);
console.log(regularUser);
console.log(regularUser.userName);
console.log(regularUser.userName.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);

const obj5={...obj1,...obj2,...obj4}//spreading method
console.log(obj5);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log((tinder.hasOwnProperty('age')));
console.log((Object.hasOwnProperty('isLoggedIn')));

//de-structure

const  course={
    name:"JS",
    id:123,
    courseInstructor:"hitesh"
}
const{courseInstructor:instructor}=course;
console.log(instructor);

//JSON

{
    "course":"JS",
    "name":"hitesh",
    "price":"free"
}
[
    {},
    {}
]