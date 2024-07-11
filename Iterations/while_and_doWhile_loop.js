//While

while (true) {
    console.log("Hello, World!");
    break; // Exit the loop
}

let index = 0;

while (index < 10) {
    console.log(`Index ${index}`);
    index++;
}

let myArray = ["flash", "Batman", "Superhero"];
let arr = 0;
while (myArray.length > arr) {
    // const element = myArray.pop();
    // console.log(element);
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 0;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);