const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function() {
    date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);