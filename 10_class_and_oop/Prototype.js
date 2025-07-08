let myname = "hitesh     "

console.log(myname.trueLength)

let myHeros = ["boogy","yeswant"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower: function(){
        console.log(`Spidy powder is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh = function() {
    console.log("hitesh is present");
    
}

Array.prototype.heyhitesh = function(){
    console.log("enla baddi haidnb");
    
}
//heroPower.hitesh()
//myHeros.hitesh()

myHeros.heyhitesh()
//heroPower.heyhitesh()


let another = "chaiaurcode         "

String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);    
}

another.truelength();
//"hitesh".truelength();
myname.truelength();