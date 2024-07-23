class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }

    get username(){
        return this._username.toLowerCase();
    }

    set username(value){
        this._username = value;
    }
}

const user = new User("Ujjwal", "password123");
console.log(user._password);
console.log(user.password);