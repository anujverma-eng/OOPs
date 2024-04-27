function createUser(userName, score) {
  this.userName = userName
  this.score = score
  return this
}

createUser.prototype.increment = function () {
  return ++this.score
}

createUser.prototype.decrement = function () {
  return --this.score
}


const user = new createUser("Anuj", 10)

console.log(user.increment())
console.log(user.decrement())
console.log(user.score)