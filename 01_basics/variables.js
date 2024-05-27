const accountId=144456
let accountEmail="hithesh@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;


// accountId=2 not allowed
accountEmail="shasj"
accountPassword="wabs5"
accountCity="Bengaluru"
console.log(accountId);



/*
    prefer not to us var
    because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);
