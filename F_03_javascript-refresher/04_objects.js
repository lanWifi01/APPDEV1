const aboutMe = {
    name: 'Dylan',
    age: 20,
    course: 'BSIS',
    introduce: function() {
        console.log(`Hi I am ${this.name}, age ${this.age}`)
    }
}

aboutMe.hobby = 'playing guitar'
aboutMe.introduce()