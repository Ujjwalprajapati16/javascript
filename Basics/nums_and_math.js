const score = 400;
console.log(score);

const balance = new Number(400);
console.log(balance);

console.log(typeof score); // Outputs: "number"
console.log(typeof balance); // Outputs: "balance"
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.5656;
console.log(otherNumber); // 23.5656
console.log(otherNumber.toPrecision(2)); // 24

const hundreds = 100000000;
console.log(hundreds); // 100000000
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000



// +++++++++++++++++++++ Math +++++++++++++++++++++

console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10 (inclusive)

console.log(Math.abs(-5)); // 5
console.log(Math.round(4.6));

console.log(Math.max(5, 10, 15, 20, 25)); // 25
console.log(Math.min(5, 10, 15, 20, 25)); // 5

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20 (inclusive)