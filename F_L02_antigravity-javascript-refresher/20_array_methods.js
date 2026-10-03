const students = [
  { name: "Alice", grade: 88 },
  { name: "Priya", grade: 95 },
  { name: "Sam", grade: 42 },
]

const passing = students.filter((s) => s.grade >= 60)
console.log(passing.map((s) => s.name))

const priya = students.find((s) => s.name === "Priya")
console.log(priya)

console.log(students.some((s) => s.grade < 60))

const ranked = [...students].sort((a, b) => b.grade - a.grade)
console.log(ranked.map((s) => s.name))
