const score=400
console.log(score)
const balance=new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))


const othernumber=23.677
console.log(othernumber.toPrecision(2))
console.log(othernumber.toPrecision(3))
console.log(othernumber.toPrecision(1))

const hundreads=1000000
console.log(hundreads.toLocaleString())

console.log(hundreads.toLocaleString('en-IN'))

// +++++++++++     Maths    ++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,3,2));
console.log(Math.max(4,6,3,2));

console.log(Math.random());

console.log((Math.random()*10)+1);
console.log(Math.random()*10);

console.log(Math.floor((Math.random()*10)+1));


const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1))+min));