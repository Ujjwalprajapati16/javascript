const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python",
}

for (const key in myObject) {
    console.log(`${key} => ${myObject[key]}`)
}

const programming = ["js", "cpp", "rb", "py"];
for(const key in programming) {
    console.log(programming[key]);
}

//maps are not iterable