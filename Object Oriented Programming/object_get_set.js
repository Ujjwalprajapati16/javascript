const User = {
    _email : "user@example",
    _password : "password",

    get email(){
        return this._email;
    },

    set email(newEmail){
        if(newEmail.includes("@example.com")){
            this._email = newEmail;
        } else {
            throw new Error("Invalid email address");
        }
    },
}

const tea = Object.create(User);
console.log(tea.email);
tea.email = "Pikachu@example.com";
 console.log(tea.email);
console.log(tea.password);