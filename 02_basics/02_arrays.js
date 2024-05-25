const marvelheros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvelheros.push(dc_heros);

//console.log(marvelheros);

const allheros =marvelheros.concat(dc_heros);
//console.log(allheros);

//SPREAD operator instead of concat

const all_powerful_heros=[...marvelheros,...dc_heros];
console.log(all_powerful_heros);

const anotherarray=[1,2,3,4,[7,3,4],5,3,[3]];
const realanotherarray=anotherarray.flat(Infinity);
console.log(realanotherarray);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));

console.log(Array.from({name :"hitesh"}));//intersting 

let score1=1
let score2=2
let score3=3
console.log(Array.of(score1,score2,score3));