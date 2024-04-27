const sidekick = {
  name: "Robin"
}

const hero = {
  name: "Batman",
  saveGotham: function () {
    console.log(this.name, "is keeping Gotham safe.");
  }
}
hero.saveGotham(); // Batman is keeping Gotham safe.
hero.saveGotham.call(sidekick); // Robin is keeping Gotham safe.


function setUserName(userName) {
  this.userName = userName
}


function createUser(userName, password, score) {

  // setUserName(userName) // This will only call the setUserName fn, but it will set the variable inside the setUsername fn and not inside the createUser

  // Using Call

  setUserName.call(this, userName)
  // the call passes the current execution context to another function

  this.password = password
  this.score = score

}
