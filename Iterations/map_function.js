const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const newNums = nums.map((num) => {
    return num + 10;
});

console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

const newNum = nums.map((num) => {
    return num * 2;
}).map((num) =>{
    return num + 1;
});

console.log(newNum); // Output: [13, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32]