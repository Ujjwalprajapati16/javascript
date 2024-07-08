// Initialize an array with numbers from 0 to 9
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Log the first element of the array
console.log(myArr[0]); // Output: 0

// Initialize an array with hero names
const myHeros = ["shaktiman", "nagaraj"];

// Create a new array using the Array constructor with elements from 1 to 8
const Array2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);

// Add the number 6 to the end of 'myArr'
myArr.push(6);
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 6]

// Create a new array 'arr' containing elements from index 1 to 2 (non-inclusive of index 3) from 'myArr'
const arr = myArr.slice(1, 3);
console.log(arr); // Output: [1, 2]

// Log the original array to show it remains unchanged after slice
console.log("B " + myArr); // Output: B 0,1,2,3,4,5,6,7,8,9,6

// Remove 2 elements starting from index 1 in 'myArr', and insert "A" and "B" in their place
const myn2 = myArr.splice(1, 2, "A", "B");
console.log(myn2); // Output: [1, 2]

// Log the modified 'myArr' after splice
console.log("C " + myArr); // Output: C 0,A,B,3,4,5,6,7,8,9,6
