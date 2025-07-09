class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addcourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("Chai","456yh","678");
chai.addcourse();

const Tea = new User("Tea")
Tea.logme()


console.log(Tea instanceof Teacher);
