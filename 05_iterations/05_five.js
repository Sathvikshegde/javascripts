const coding=["js","cpp","ruby","c++"]

coding.forEach(function(val){
    console.log(val);
})

coding.forEach((item)=>{
    console.log(item);
})


function printMe(items)
{
    console.log(items);
}
coding.forEach(printMe)