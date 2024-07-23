const user = {
    username : "PIkachu",
    loginCount : 1,
    signedIn : true,

    getUserDetails : function(){
        console.log(`Username: ${this.username}`);
        console.log(`Login Count: ${this.loginCount}`);
        console.log(`Signed In: ${this.signedIn}`);
    }
}

console.log(user.getUserDetails());

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.getUserDetails = function(){
        console.log(`Username: ${this.username}`);
        console.log(`Login Count: ${this.loginCount}`);
        console.log(`Signed In: ${this.signedIn}`);
    }

    return this;
}

const newUser = new User("Ujjwal", 5, true);

console.log(newUser.username);
newUser.getUserDetails();

