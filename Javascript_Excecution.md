# JavaScript Excecution Context

JavaScript execution context refers to the environment in which JavaScript code is executed. There are three types of execution contexts:

1. **Global Ececution Context**
2. **Function Ececution Context**
3. **Eval Excecution Context**

Each execution context has two phases:

- **Memory creation phase**
- **Execution phase**

## Steps and Execution Process for the Given Code
```javascript
let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    let total = num1 + num2;
    reutrn total;
}

let result = addNum(val1, val2);
let result2 = addNum(15, 32);
```

## Global Execution Context

### Memory Creation Phase

- val1 is declared and initialized to undefined.
- val2 is declared and initialized to undefined.
- addNum is declared and its reference to the function is stored.
- result is declared and initialized to undefined.
- result2 is declared and initialized to undefined.

### Execution Phase

- val1 is assigned the value 10.
- val2 is assigned the value 20.
- addNum is defined as a function.
- The function addNum(val1, val2) is called.
- A new Function Execution Context is created.
- The function addNum(15, 32) is called.
- A new Function Execution Context is created.

## Function Execution Context

### Memory Creation Phase

When addNum(val1, val2) is called:

- num1 is declared and initialized to undefined.
- num2 is declared and initialized to undefined.
- total is declared and initialized to undefined.

When addNum(15, 32) is called:

- num1 is declared and initialized to undefined.
- num2 is declared and initialized to undefined.
- total is declared and initialized to undefined.

### Execution Phase

When addNum(val1, val2) is called:

- num1 is assigned the value 10.
- num2 is assigned the value 20.
- total is calculated as num1 + num2, resulting in 30.
- 30 is returned and assigned to result.

When addNum(15, 32) is called:

- num1 is assigned the value 15.
- num2 is assigned the value 32.
- total is calculated as num1 + num2, resulting in 47.
- 47 is returned and assigned to result2.

## Detailed Steps
1. Global Execution Context
    - Memory Creation Phase
        - val1: undefined
        - val2: undefined
        - addNum: function
        - result: undefined
        - result2: undefined
    - Execution Phase
        - val1 = 10
        - val2 = 20
        - result = addNum(val1, val2)
            - Function Execution Context (addNum)
                - Memory Creation Phase
                    - num1: undefined
                    - num2: undefined
                    - total: undefined
                - Execution Phase
                    - num1 = 10
                    - num2 = 20
                    - total = num1 + num2
                    - return 30
            - result = 30
        - result2 = addNum(15, 32)
            - Function Execution Context (addNum)
                - Memory Creation Phase
                    - num1: undefined
                    - num2: undefined
                    - total: undefined
                - Execution Phase
                    - num1 = 15
                    - num2 = 32
                    - total = num1 + num2
                    - return 47
            - result2 = 47

> [!NOTE]
> This documentation covers the execution process for the given JavaScript code, highlighting the Global Execution Context and Function Execution Context, as well as the memory creation and execution phases for each context.