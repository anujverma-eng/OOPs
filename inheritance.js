class User {
  constructor(userName) {
    this.userName = userName
  }

  myName() {
    console.log(`My Name is: ${this.userName}`)
  }

}

class Teacher extends User {
  constructor(userName, email) {
    super(userName)
    this.email = email
  }

  info() {
    console.log(`My Name is: ${this.userName}`)
    console.log(`My Email is: ${this.email}`)
  }

}

const chaiUser = new User("Anuj")
// chaiUser.myName()

const chaiTeacher = new Teacher("Anuj Verma", "anuj@verma.com")
chaiTeacher.info()
chaiTeacher.myName()