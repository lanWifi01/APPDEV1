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

const myHobbies = {
    list: ['playing guitar', 'coding', 'reading manga'],
    whyFavorite: function() {
        console.log(`My hobbies are: ${this.list.join(', ')}. They are my favorites because they help me grow creatively, sharpen my skills, and keep me entertained!`)
    }
}

myHobbies.whyFavorite()