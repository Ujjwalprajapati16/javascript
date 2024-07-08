const user = {
    username: "Pikachu",
    price: 199,

    welcomeMessage: function (){
        console.log(`Welcome ${this.username} !!`);
        console.log(this);
    }
}

user.welcomeMessage(); // Output: Welcome to Pikachu !!
user.username = "Charizard"; 
user.welcomeMessage(); // Output: Welcome Charizard !!

// function chai(){
//     console.log(this);
// }

// chai(); // Output: Window {}

const chai = () => {
    let username = "Pikachu";
    console.log(this.username);
}

// chai(); // Output: undefined

//Implicit return value
// const addTwo = (num1, num2) => num1 + num2;

const addtwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addtwo(10, 20)); // Output: 30
