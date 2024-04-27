// // Object Literal

// const user = {
//   userName: "Anuj",
//   password: "anuj",
// getUserName_arrow: () => {
//   console.log(this)
// }
// getUserName: function(){
//   console.log(this.userName)
// }
// }

// console.log(user.getUserName())


// Constructor Function

function User(userName, password) {
  this.userName = userName
  this.password = password

  return this
}

const user1 = new User("anuj", "verma")
const user2 = new User("anuj2", "verma2")

console.log(user1)