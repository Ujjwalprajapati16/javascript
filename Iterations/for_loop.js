// For

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is Best number");
    }
    console.log(element);
}

for(let i=1; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    for(let j=1; j <= 10; j++) {
        // console.log(`Inner loop: ${i} and ${j}`);
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

let myArray = ["Flash", "Spiderman", "Batman"];
for(let index=0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue

for(let i=0; i < 10; i++) {
    if(i == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value: ${i}`);
}

for(let i=0; i < 10; i++) {
    if(i % 2 == 0){
        continue;
    }
    console.log(`Value: ${i}`);
}