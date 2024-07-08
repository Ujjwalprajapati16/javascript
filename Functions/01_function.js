// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(5, 10); // 15
console.log("Result: " + result);
console.log(addTwoNumbers(10, "20")); // 1020

function loginUserMessage(username){
    if(username === "" || username === undefined){
        return "Please enter a username";
    } else {
        return `Welcome, ${username}!`;
    }
}

console.log(loginUserMessage("")); // Please enter a username
console.log(loginUserMessage("John Doe")); // Welcome, John Doe!

function calaculateCartPrice(...args) {
    let cartItems = [
        {name: "Product 1", price: 10, quantity: 2},
        {name: "Product 2", price: 20, quantity: 1},
        {name: "Product 3", price: 30, quantity: 3}
    ];

    return args;
}

console.log(calaculateCartPrice(500, 56, 78, 500, 100, 15)); // Please enter products

const user = {
    username: "Pikachu",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // Username is Pikachu and price is 199

const arr = [200, 400, 100, 600];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(arr)); // 400