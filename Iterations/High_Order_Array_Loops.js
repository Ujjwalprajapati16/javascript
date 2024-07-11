// for of

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}

const greeting = "Hello, world!";
for (const greet of greeting) {
    if(greet == " "){
        continue; // Skip spaces
    }
    console.log(`Each char is ${greet}`);
}

//Maps
const map = new Map();

map.set("name", "Pikachu");
map.set("Date", "15");

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}