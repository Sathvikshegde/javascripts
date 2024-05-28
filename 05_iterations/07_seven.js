const myArr=[1,2,3,4,5,6,7,8,9,10]
const arr=myArr.map((num)=>{return num+10})
console.log(arr);


const pqrs=myArr
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>40)
console.log(pqrs);


