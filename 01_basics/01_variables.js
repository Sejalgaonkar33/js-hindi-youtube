const accountId = 12345
let accountEmail = "sejal@google.com"
var accountPassword = "123321"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sej@gmail.com"
accountPassword = "321123"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])