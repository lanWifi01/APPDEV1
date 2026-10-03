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