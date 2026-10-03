if (true) {
  let insideBlock = "Code inside if block"
  console.log(insideBlock)
}

try {
  console.log(insideBlock)
} catch (error) {
  console.log("insideBlock is not defined here")
}

function createCounter() {
  let count = 0
  return function increment() {
    count++
    return count
  }
}

const counterA = createCounter()
const counterB = createCounter()

console.log(counterA())
console.log(counterA())
console.log(counterB())
