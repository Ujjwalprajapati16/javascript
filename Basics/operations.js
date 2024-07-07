let value = 3
let negValue = -value

console.log("Value:", value);
console.log("Negative:", negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2); // remainder of 2 divided by 2
console.log(2**3); // 2 raised to the power of 3
console.log(2 + 3 * 4); // operator precedence
console.log((2 + 3) * 4); // parentheses for grouping

let str1 = "Pikachu";
let str2 = "Pika Pi";
let str3 = str1 + str2;

console.log(str3); // operator precedence 

console.log("1" + 2); // output string 12
console.log(1 + "2"); // output string 12
console.log("1" + "2"); // output string 12
console.log("1" + 2 + "2"); // output string 122
console.log(1 + 2 + "2"); // output 32

console.log(true + true); // output 2
console.log(+true); // output 1
console.log(+""); // output 0

let gameCounter = 100;
gameCounter++;
console.log("Game counter:", gameCounter); // output 101