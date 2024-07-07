const accountId = 1544
let accountEmail = "PIkachu"
var accountPassword = "126565"
accountCity = "US" // its possible but not allowed


console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountId)

// Prompt user to enter account email

/*
Prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])