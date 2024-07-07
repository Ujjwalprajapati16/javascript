let score = "33";

console.log(score); // Outputs: "33"
console.log(typeof score); // Outputs: "string"

// Convert score to a number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Outputs: "number"
console.log(valueInNumber); // Outputs: 33

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let valueInBoolean = Boolean(score);
console.log(typeof valueInBoolean); // Outputs: "boolean"
console.log(valueInBoolean); // Outputs: true (if score is not "0", false otherwise)

// "" => false
// "Pikachu" => true

let valueInNull = Boolean(null);
console.log(typeof valueInNull); // Outputs: "boolean"
console.log(valueInNull); // Outputs: false

// undefined => false

let valueInUndefined = Boolean(undefined);
console.log(typeof valueInUndefined); // Outputs: "boolean"
console.log(valueInUndefined); // Outputs: false

// 0 => false

let valueInZero = Boolean(0);
console.log(typeof valueInZero); // Outputs: "boolean"
console.log(valueInZero); // Outputs: false

// NaN => false

let valueInNaN = Boolean(NaN);
console.log(typeof valueInNaN); // Outputs: "boolean"
console.log(valueInNaN); // Outputs: false

// Infinity => true

let someNumber = 33
let StringNumber = String(someNumber);

console.log(typeof someNumber); // Outputs: "number"
console.log(StringNumber); // Outputs: someNumber
console.log(typeof StringNumber); // Outputs: "string"

let someBoolean = true

console.log(typeof someBoolean); // Outputs: "boolean"

let StringBoolean = String(someBoolean);

console.log(typeof someBoolean); // Outputs: "boolean"

console.log(StringBoolean); // Outputs: true

// String => "true"

let someNull = null

console.log(typeof someNull); // Outputs: "object"

let StringNull = String(someNull);

console.log(typeof someNull); // Outputs: "object"

console.log(StringNull); // Outputs: null

// String => "null"