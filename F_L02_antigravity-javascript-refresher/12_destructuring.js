const person = { name: "Dylan", age: 20 }
const { name, age } = person
console.log(name, age) // Must use the name that is in the object

const hobbies = ["playing guiar", "reading manhwa", "coding"]
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2)

function printName({ name }) {
  console.log(name)
}

printName(person)
