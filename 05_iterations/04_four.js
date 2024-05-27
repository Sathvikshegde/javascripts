const myobj={
    js:"javscript",
    cpp:"c++",
    rb:"ruby"
}

for (const key in myobj) {
    console.log(key);
    }
for (const key in myobj) {
    console.log(myobj[key]);
    }
for (const key in myobj) {
    console.log(`for ${key} the object is ${myobj[key]}`);
    }




let myarr=["js","cpp","ruby"]
for (const key in myarr) {
   console.log(myarr[key]);
}

const map=new Map()

map.set('IN',"India");
map.set('FR',"FRANCE");
map.set('RS',"RUSSIA");
for (const key in map) {
    console.log(map[key]);
}