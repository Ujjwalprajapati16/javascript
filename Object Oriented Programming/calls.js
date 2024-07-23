function SetUsername(username) {
  // if(username.length < 8){
  //     throw new Error("Username must be at least 8 characters long");
  // }
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const chai = new createUser("Chai", "Chai@gamil.com", "123");
console.log(chai);
