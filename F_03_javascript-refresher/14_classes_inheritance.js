class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`)
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studeying.`)
  }
}

const student = new Student("Dylan", 20)
student.sayHello()
student.study()