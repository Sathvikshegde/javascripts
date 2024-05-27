// for of

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

let greetings="helloworld"
for (const greet of greetings) {
    console.log(`value is ${greet}`);
}

const map=new Map()

map.set('IN',"India");
map.set('FR',"FRANCE");
map.set('RS',"RUSSIA");

console.log(map);

for (const [app,val] of map) {
    console.log(app,':>', val);
    
}

const myobj={
    in:"india",
    rs:"reussia"
}
for (const [appw,valu] of myobj) {
    console.log(appw,valu);

    //objects cannot be iterable
    
}

