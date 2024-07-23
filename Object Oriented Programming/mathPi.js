const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter); // Property descriptor for PI property
Math.PI.writable = true;
console.log(Math.PI);
Math.PI = 5;

console.log(Math.PI);


const chai = {
    name : 'chai',
    price : 500,
    isAvailable : false,
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, val] of Object.entries(chai)){
    if(typeof val !== 'function'){
        console.log(`${key}: ${val}`);
    }
}