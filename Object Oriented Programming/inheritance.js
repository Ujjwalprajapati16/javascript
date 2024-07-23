class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Hello ${this.username}!`);
    }
}

class Teacher extends User {
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    }
    teach(){
        console.log(`${this.username} is teaching.`);
    }
}

const pikachu = new Teacher("pikachu", "Javascript");

pikachu.logMe();
pikachu.teach();

const pika = new Teacher("pika", "Java");

pika.logMe();
pika.teach();

console.log(pika == pikachu);