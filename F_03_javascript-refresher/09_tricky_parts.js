console.log(5 == "5")
console.log(5 === "5")

let notDefined
let nullVariable = null

console.log(notDefined, nullVariable)

const object = {
  name: "Dylan",
  regular: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  },
}

object.regular() 
object.arrow() 

const original = [1, 2, 3]

const copyByReference = original
copyByReference.push(4)
console.log(original) 

const copyBySpread = [...original]
copyBySpread.push(5)
console.log(original) 
console.log(copyBySpread) 
