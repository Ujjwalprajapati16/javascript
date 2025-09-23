/*
    Object literal
*/

const user = {
  username: "Pikachu",
  loginCount: 1,
  signedIn: true,
  login() {
    console.log("User logged in");
  },
  logout() {
    console.log("User logged out");
  },
};

user.login();
user.logout();

/*
    constructor function, before ES5
*/

function Player(name, score, pos) {
  this.name = name;
  this.score = score;
  this.pos = pos;
}

Player.prototype.move = function (x, y) {
  this.pos = [x, y];
};

const player1 = new Player("Ujjwal", 100, [0, 0]);
player1.move(1, 2);
console.log(player1);

/*
 * Classes - ES6
 */

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  login() {
    console.log("User logged in");
  }

  logout() {
    console.log("User logged out");
  }

  changePassword(oldPassword, newPassword) {
    if (oldPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Old password is incorrect");
    }
  }

  getUserDetails() {
    console.log(`Username: ${this.username}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}

const user1 = new User("Pikachu", "pikachu@gmail", "12345678");
console.log(user1);

user1.login();
user1.logout();
