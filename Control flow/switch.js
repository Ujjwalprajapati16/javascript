// Syntax : 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

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