// ES6

class User {
  constructor(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
  }

  encryptPassword() {
    return `${this.password}-0XXX`
  }

  changeUserName() {
    return `${this.userName.toUpperCase()}`
  }

}

const chai = new User("Anuj", "anuj@anuj.com", "WOW")

// console.log(chai.encryptPassword())
// console.log(chai.changeUserName())


//---------------------------------------------------------------
// Behind the Scenes
//---------------------------------------------------------------


function User2(userName, email, password) {
  this.userName = userName
  this.email = email
  this.password = password
}

User2.prototype.encryptPassword = function () {
  return `${this.password}-0XXX`
}
User2.prototype.changeUserName = function () {
  return `${this.userName.toUpperCase()}`
}

const chai2 = new User2("Anuj2", "anuj@anuj.com", "WOW")

console.log(chai2.encryptPassword())
console.log(chai2.changeUserName())
