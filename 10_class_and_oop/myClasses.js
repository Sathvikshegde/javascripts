// ES6

class User {
    constructor(username,email,password) {
        this.username = username;
        this.email = email,
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@google.com","123");

console.log(chai.encryptPassword());

console.log(chai.changeusername());


function niraj(username,email,pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
}
niraj.prototype.encrypt= function(){
    return `${this.pass}abc`
}
niraj.prototype.uppser = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new niraj("as","sdc","123")
console.log(tea.encrypt())
console.log(tea.uppser())