# JavaScript `if` Statement Examples

This document contains examples of using `if` statements in JavaScript, demonstrating various conditional checks and logical operations.

## Basic `if` Statement

```javascript
if (true) {
    console.log("Condition is true");
}

if(false){
    console.log("Condition is false");
}
```

```output
Condition is true
(No output, as the condition is false)

```
## if-else Statement

```javascript
const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}

```
```output
User is logged in
```

## Comparison Operators

### Equality (== vs ===)

```javascript
if( 2 == "2"){
    console.log("Exceuted");
}

if( 2 === "2"){
    console.log("Exceuted");
}
```

### Strict Equality (===)
```javascript
const temperature = 41;

if(temperature === 41){
    console.log("It's 41 degrees");
} else {
    console.log("It's not 41 degrees");
}
```
```output
It's 41 degrees

```

### Greater Than (>) Comparison
```javascript
const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`You have ${power} power`);
}
```
```output
You have fly power
```

## Shorthand if Statements
### Single Line if
```javascript
const balance = 1000;

if(balance >= 100) console.log(`You have ${balance}`);
```

## if-else if-else Ladder
```javascript
if (balance < 500){
    console.log("You don't have enough money");
} else if (balance < 750){
    console.log("You have a balance between 500 and 750");
} else if (balance < 900){
    console.log("You have a balance between 750 and 900");
} else {
    console.log("You have a balance greater than 900");
}
```
```output
You have a balance greater than 900
```

## Logical Operators
### AND (&&)
```javascript
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const LoggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow user to buy product");
}
```

### OR (||)
```javascript
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
```

## Summary
- Basic if statements execute code blocks when conditions are true.
- if-else statements provide an alternative block of code if the condition is false.
- Comparison operators (==, ===, >, etc.) are used to compare values.
- Logical operators (&&, ||) combine multiple conditions.
- Shorthand if statements allow for concise conditional logic.

# JavaScript `switch` Statement Examples

This document contains examples of using `switch` statements in JavaScript, demonstrating how to control flow based on the value of a variable.

## Basic `switch` Statement

### Syntax

```javascript
switch (key) {
    case value:
        // code block
        break;

    default:
        // default code block
        break;
}
```

## Example 1: String Key
```javascript
let key = "name";
let value = "John";

switch (key) {
    case "name":
        console.log("The key is 'name' and the value is:", value);
        break;

    case "age":
        console.log("The key is 'age' and the value is:", value);
        break;

    default:
        console.log("The key is not found.");
        break;
}
```
```output
The key is 'name' and the value is: John
```

## Example 2: Numeric Key
```javascript
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
        break;
}
```

## Extract Username from Email

```javascript
const userEmail = "Ujjwal@Pikachu.com";

if (userEmail) {
    const username = userEmail.split('@')[0];
    console.log(username);
} else {
    console.log("Invalid email address");
}
```
```output
Ujjwal
```

## Falsy Values
```javascript
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
```

## Truthy Values
```javascript
const emptyArray = [];

if (emptyArray.length === 0) {
    console.log("Empty Array");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Empty Object");
}
```

## Loose Equality Comparisons

```javascript
console.log(false == 0); // true
console.log(false == ''); // true
console.log(0 == ''); // true
```

## Nullish Coalescing Operator (??)
```javascript
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 15; // 10
console.log(val1); // 10
```

## Ternary Operator

```javascript
let val2 = 5;

val2 = val2 > 10 ? 'Greater than 10' : 'Less than or equal to 10';
console.log(val2);
```