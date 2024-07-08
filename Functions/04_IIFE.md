# Immediately Invoked Function Expression (IIFE)

IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that runs as soon as it is defined. IIFEs are useful for isolating code and creating a local scope for variables, preventing them from polluting the global scope.

## Named IIFE

A named IIFE has a name, but the name is not accessible outside its own scope.

### Example: Named IIFE

```javascript
(function chai() {
    console.log("Chai is a popular coffee brand.");
})();

```

> This IIFE is named chai.

> It immediately logs "Chai is a popular coffee brand." to the console.

## Unnamed IIFE

An unnamed IIFE does not have a name and is often used for simple immediate execution.

### Example: Unnamed IIFE (Arrow Function)

```javascript
(() => {
    console.log("DB Connected");
})();
```
> This IIFE uses an arrow function.

> It immediately logs "DB Connected" to the console.

## IIFE with Parameters

IIFEs can also accept parameters, allowing you to pass values to the function at the time of its invocation.

### Example: IIFE with Parameters

```javascript
((name) => {
    console.log(`DB connected: ${name}`);
})("MongoDB");

```

> This IIFE takes a parameter name.

> It immediately logs "DB connected: MongoDB" to the console.

> [!NOTE]
>By using IIFEs, you can execute code immediately and create a local scope for variables, which helps in avoiding global namespace pollution and potential conflicts.