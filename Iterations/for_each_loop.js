const coding = ["js", "ruby", "python", "javascript" ];

// For each required a callback function
coding.forEach(function (item) {
    console.log(item);
});

coding.forEach( (item) => {
    console.log(item);
});

function printMe(item){
    console.log(item);
}
//It required only reference not calling function
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const myCoding = [
    {
        name: 'js',
        version: 'ES6',
    }, 
    {
        name: 'java',
        version: '8',
    },
    {
        name: 'python',
        version: '3',
    },
];

myCoding.forEach(({name, version}) => {
    console.log(`Name: ${name}, Version: ${version}`);
});