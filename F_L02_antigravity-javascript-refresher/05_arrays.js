let favoriteFoods = ["Fried Chicken", "Adobo", "Siomai"]
favoriteFoods.push("Siopao")
favoriteFoods.shift()
 
for (const food of favoriteFoods) {
  console.log(food)
}
 
const liked = favoriteFoods.map(food => {
    return ("I like " + food)
})
console.log(liked)

// New array using map
let grades = [88, 92, 75, 95, 60]

const gradeRemarks = grades.map(grade => {
    if (grade >= 90) return grade + " - Excellent"
    else if (grade >= 75) return grade + " - Passed"
    else return grade + " - Failed"
})

console.log(gradeRemarks)