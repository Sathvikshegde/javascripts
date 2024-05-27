const name="hitesh"
const repocount=50
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('hitesh')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newstring=gameName.substring(0,4)
console.log(newstring)

const anotherstring=gameName.slice(-8,2);
console.log(anotherstring)

const newstringone="       hitesh       "
console.log(newstringone)
console.log(newstringone.trim())


const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%2','-'))
console.log(url.includes('sundar'))

const game=new String("hitesh-hc-com")
console.log(game.split('-'));