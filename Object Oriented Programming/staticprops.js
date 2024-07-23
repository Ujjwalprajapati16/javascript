class User {
    constructor(username) {
        this.username = username;
    }

    greet() {
        console.log(`Hello, my name is ${this.username}`);
    }

    static createId(){
        return 123;
    }
}

const user1 = new User("pikachu");

console.log(User.createId()); // Output: pikachu

class Teacher extends User {
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    }
}

const teacher1 = new Teacher("charmander", "Maths");

console.log(teacher1.greet()); // Output: Hello, my name is Charmander

console.log(teacher1.createId()); // Output:`