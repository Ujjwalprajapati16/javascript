function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increaseScore = function(amount){
    this.score += amount;
}

createUser.prototype.getDetails = function(){
    console.log(`Username: ${this.username}`);
    console.log(`Score: ${this.score}`);
}

const user1 = new createUser("Pikachu", 100);
const user2 = new createUser("Ujjwal", 200);

user1.increaseScore(50);
user2.increaseScore(100);

user1.getDetails(); // Username: Pikachu, Score: 150
user2.getDetails(); 