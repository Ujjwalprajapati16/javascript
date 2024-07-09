const userEmail = "Ujjwal@Pikachu.com";

if(userEmail){
    const username = userEmail.split('@')[0];
    console.log(username);
} else {
    console.log("Invalid email address");
}

/*
    Falsy Values
    false, 0, -0, BigInt, 0n, "0", null, undefined, NaN
*/

console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false

/**
 * Truthy Values
 * "0", "false"," ", [], {}, function(){}
 * 
 */

const emptyArray = [];

if (emptyArray.length === 0) {
    console.log("Empty Array");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Empty Object");
}

console.log(false == 0); // true
console.log(false == ''); // true
console.log(0 == ''); // true


//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 15; // 10
console.log(val1); // 10

//Terninary Operators
// condition ? true : false
let val2 = 5;

val2 = val2 > 10 ? 'Greater than 10' : 'Less than or equal to 10';
console.log(val2); // Greater than 10