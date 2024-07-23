class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User("Pikachu", "pikachu@pokemon.com", "123456789");

console.log(user.encryptPassword()); // Output: 123456789abc

console.log(user.changeUsername()); // Output: PIKACHU