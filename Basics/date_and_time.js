// Date

let currentDate = new Date();

console.log(currentDate);
console.log(currentDate.toString());
console.log(currentDate.toLocaleString());
console.log(currentDate.toDateString());
console.log(currentDate.toISOString());

let myCreatedDate = new Date(2024, 8, 23); // Month start with 0
console.log(myCreatedDate.toDateString());

// Time

let currentTime = new Date().getTime();
console.log(currentTime);

let myCreatedTime = new Date(2024, 8, 23, 10, 30, 0);
console.log(myCreatedTime.toLocaleString());

let myTimeStamp = Math.floor(Date.now()/1000);
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());