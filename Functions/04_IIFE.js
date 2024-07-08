// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log("Chai is a popular coffee brand.");
})();

//Unnamed IIFE

( () => {
    console.log("DB Connected");
})();

( (name) => {
    console.log(`DB connected: ${name}`);
})("MongoDB");