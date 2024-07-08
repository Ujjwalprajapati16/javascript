//Singleton
// Object.create

const user1 = Object.create(null);
user1.name = "John Doe";
user1.age = 30;
user1.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

//Symbol
const mySym = Symbol("key1");

//Object literals
const User = {
    name: "Pikachu",
    age: 30,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "john@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "tuesday"],
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

// Factory function
console.log(`Hello, my name is ${this.name}`);
console.log(User.email);
console.log(User["name"]);
console.log(User[mySym]);

User.email = "Pikachu@pokemon.com";
Object.freeze(User);
console.log(User);

User.greet();