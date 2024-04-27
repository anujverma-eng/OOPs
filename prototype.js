// Let's say an example that, I want the method on all strings, that must provide me the True Length of the string, by trimming it.

String.prototype.trueLength = function () {
  console.log(`True Length: ${this.trim().length}`)
}


"Anuj  ".trueLength()

Array.prototype.max = function () {
  let max = 0
  for (let i = 0; i < this.length; i++) {
    const val = this[i]
    if (max < val) {
      max = val
    }
  }
  console.log(max)
}
const arr = [1, 112, 101, 3, 4]

arr.max()