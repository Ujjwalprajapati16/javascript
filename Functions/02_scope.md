# JavaScript Scope and Functionality

## Variable Declaration and Scope

In JavaScript, the scope of a variable determines where it can be accessed. Variables can be declared using var, let, or const, each having different scoping rules.


### Global and Block Scope
```javascript
let a = 10;
const b = 10;
var c = 10;
```

> var have global scope 
> let and const a block scope


### Example: Block Scope in Conditional Statements
```javascript 
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a); // not work
console.log(b); // not work
console.log(c); // 30
```

## Scope in Functions and Closures

Functions create their own scope, and inner functions can access variables from their parent functions, demonstrating the concept of closures.

### Example: Function and Closure Scope
```javascript
function one(){
    const username = "Pikachu";

    function two(){
        const website = "youtube.com";
        console.log(username); // Pikachu
    }

    console.log(website); // out of scope not working

    two(); // Pikachu
}

one();
```

> The inner function two can access the variable username from its parent function one.

> The variable website is only accessible within the two function.

## Scope in Conditional Statements

Variables declared inside if statements have block scope and are not accessible outside the block.

### Example: Conditional Statement Scope
```javascript
if(true){
    const username = "Pikachu";
    if(username === "Pikachu"){
        const website = "youtube.com";
        console.log(username + website); // Pikachu youtube.com
    }

    console.log(website); // out of scope not working
}

console.log(username); // out of scope not working
```

> username and website are only accessible within their respective blocks.

## Hoisting in Functions

Function declarations are hoisted in JavaScript, meaning they can be called before they are defined. However, function expressions are not hoisted.

### Example: Hoisting in Functions
```javascript
addone(5); // 6
function addone(num){
    return num + 1; //
}


addTwo(5); // Its not work because hoisting
const addTwo = function(num){
    return num + 2; //
}

```

> The function declaration addOne is hoisted, so it can be called before its definition.

> The function expression addTwo is not hoisted, so it cannot be called before its definition.