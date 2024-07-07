# Primitive

> ## 7 Types :
> String, Number, Boolean, null, undefined, Symbol, BigInt

```javascript
const score = 101 //number
const points = 89.36 // number
const loginState = false // boolean
const outesidTemp = null // object

let userEmail; // undefined

const id Symbol('1413');
const otherid = Symbol('1412');

const bigInt = 6359168989561678637n;
console.log(typeof bigInt); // bigint
```

# Reference (Non primitive)

> Array, Object, Functions

```javascript
const heros = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Shaktiman",
    age: 18,
}

const myFunctions = function(){
    console.log("Hello, world!");
}

```

[video link](https://youtu.be/suMvZWjjKbo)

# Stack (Primitive), Heap (Non-primitive)

```javascript
let myName = "Pikachu";
let anotherName = "Pika";
anotherName = "ChaiAurCode"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "Pikachu@gamail.com",
    upi: "pika@ybl"
}

let userTwo = userOne;

userTwo.email = "Pika@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
```

[Video Link](https://youtu.be/7gwc-1czolw)