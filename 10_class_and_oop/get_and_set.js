class user {
    constructor(username,email) {
        this.username = username
        this.email=email
    }
    get username(){
        return this._username;
    }
    set username(value){
        this._username=value
    }

    get email(){
        return `${this._email}abc`
    }
    set email(value){
        this._email = value
    }
}
const chai = new user("chai","bulla")
console.log(chai.username)
console.log(chai.email);
