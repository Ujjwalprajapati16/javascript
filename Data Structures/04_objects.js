const tinderuser = new Object();

tinderuser.name = "Pikachu";
tinderuser.email = "pikachu@gmail.com";
tinderuser.password = "82168781768";

console.log(tinderuser);

const regularUser = {
    name: "Charmander",
    email: "charmander@gmail.com",
    password: "123456789",
    fullName: {
        userFullName: {
            first: "Char",
            last: "mander"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName.userFullName.first);

const obj1 = {1: "Pikachu", 2: "Charmander", 3: "Squidel"};
const obj2 = {4: "Raichu", 8: "Ash", 5: "Phonex"};

// const obj3 = (Object.assign({}, obj1, obj2)); // Merge objects
const obj3 = {...obj1, ...obj2};
console.log(obj3); //

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


const course = {
    courseName: "JavaScript Basics",
    courseDescription: "Learn the fundamentals of JavaScript",
    courseDuration: "3 months",
    coursePrice: 199.99,
    courseInstructor: {
        name: "John Doe",
        email: "johndoe@gmail.com"
    }
}

const {courseInstructor} = course;
console.log(course);
console.log(courseInstructor); //

// const {courseName, coursePrice} = course;

